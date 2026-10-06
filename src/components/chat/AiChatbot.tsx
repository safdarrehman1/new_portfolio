"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  Download,
  RotateCcw,
  Copy,
  Check,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatAction {
  label: string;
  action: "scroll" | "link" | "download";
  url: string;
}

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  actions?: ChatAction[];
  timestamp: string;
  isStreaming?: boolean;
}

const STARTER_PROMPTS = [
  "What projects have you built?",
  "What's your tech stack?",
  "Are you available for work?",
  "Tell me about your AI learning path",
  "How can I contact you?",
];

/**
 * Lightweight Markdown renderer for AI message bubbles.
 * Safely parses bold, backticks code, markdown links, and bullet lists.
 */
function MarkdownText({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed break-words">
      {lines.map((line, lineIdx) => {
        if (!line.trim()) {
          return <div key={lineIdx} className="h-1.5" />;
        }

        const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
        const cleanLine = isBullet
          ? line.replace(/^[\s•\-]+/, "").trim()
          : line;

        const parsedElements = parseInlineMarkdown(cleanLine);

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 pl-1">
              <span className="text-primary mt-1 select-none">•</span>
              <div className="flex-1">{parsedElements}</div>
            </div>
          );
        }

        return <div key={lineIdx}>{parsedElements}</div>;
      })}
    </div>
  );
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-primary/10 border border-primary/20 px-1 py-0.5 font-mono text-[11px] text-primary"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isInternal = href.startsWith("#") || href.startsWith("/");
      return (
        <a
          key={i}
          href={href}
          target={isInternal ? "_self" : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
          className="font-medium text-primary hover:underline underline-offset-2 inline-flex items-center gap-0.5"
        >
          <span>{label}</span>
          {!isInternal && <ExternalLink className="size-2.5 inline ml-0.5" />}
        </a>
      );
    }

    return <span key={i}>{part}</span>;
  });
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi! I'm **Ask Safdar AI**, Safdar Rehman's official portfolio assistant.\n\nAsk me anything about his full-stack stack, shipped projects, background, or availability!",
      actions: [
        { label: "View Projects", action: "scroll", url: "#projects" },
        { label: "Get In Touch", action: "scroll", url: "#contact" },
      ],
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback((smooth = false) => {
    const container = chatContainerRef.current;
    if (!container) return;
    if (smooth) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    } else {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  // Tooltip display logic: show once after 3.5s if not previously dismissed
  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("safdar_chat_tooltip_seen");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("safdar_chat_tooltip_seen", "true");
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    dismissTooltip();
  };

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened and scroll to bottom
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom(false);
      }, 100);
    }
  }, [isOpen, scrollToBottom]);

  // Monitor scroll in messages box to toggle "scroll to latest" button
  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) return;
    const isScrolledUp =
      container.scrollHeight - container.scrollTop - container.clientHeight > 80;
    setShowScrollBottom(isScrolledUp);
  };

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  const handleActionClick = (action: ChatAction) => {
    if (!action.url) return;

    if (action.action === "scroll") {
      const targetId = action.url.replace("#", "");
      const el = document.getElementById(targetId) || document.querySelector(action.url);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      if (window.innerWidth < 640) {
        setIsOpen(false);
      }
    } else if (action.action === "link") {
      window.open(action.url, "_blank", "noopener,noreferrer");
    } else if (action.action === "download") {
      const link = document.createElement("a");
      link.href = action.url;
      link.download = "Safdar-Rehman-CV.pdf";
      link.click();
    }
  };

  const handleSend = async (customPrompt?: string) => {
    const query = customPrompt || input;
    if (!query.trim() || isTyping) return;

    const userMessage: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const aiMessageId = "ai-" + Date.now();
    const initialAiMessage: Message = {
      id: aiMessageId,
      sender: "ai",
      text: "",
      isStreaming: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage, initialAiMessage]);
    setInput("");
    setIsTyping(true);

    // Scroll immediately
    setTimeout(() => scrollToBottom(true), 30);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          message: query.trim(),
          history: messages.slice(-6).map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error(`Chat API responded with status ${res.status}`);
      }

      // Check for SSE Stream response
      if (res.body && res.headers.get("content-type")?.includes("text/event-stream")) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";
        let finalActions: ChatAction[] | undefined = undefined;
        let sseBuffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          sseBuffer += decoder.decode(value, { stream: true });
          const parts = sseBuffer.split("\n\n");
          // Keep incomplete tail in buffer
          sseBuffer = parts.pop() || "";

          for (const block of parts) {
            const trimmed = block.trim();
            if (!trimmed) continue;

            const lines = trimmed.split("\n");
            for (const line of lines) {
              if (line.startsWith("data:")) {
                const jsonStr = line.replace(/^data:\s*/, "").trim();
                try {
                  const data = JSON.parse(jsonStr);
                  if (data.type === "token") {
                    accumulatedText += data.token;
                    setMessages((prev) =>
                      prev.map((msg) =>
                        msg.id === aiMessageId
                          ? { ...msg, text: accumulatedText, isStreaming: true }
                          : msg
                      )
                    );
                    scrollToBottom(false);
                  } else if (data.type === "done") {
                    accumulatedText = data.reply || accumulatedText;
                    finalActions = data.actions;
                  }
                } catch {
                  // Ignore JSON parse errors on malformed chunks
                }
              }
            }
          }
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? {
                  ...msg,
                  text: accumulatedText,
                  actions: finalActions,
                  isStreaming: false,
                }
              : msg
          )
        );
      } else {
        // Fallback standard JSON
        const data = await res.json();
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? {
                  ...msg,
                  text: data.reply || "Safdar is a Junior Full-Stack Developer specializing in React, Next.js, and Node.js.",
                  actions: data.actions,
                  isStreaming: false,
                }
              : msg
          )
        );
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                text: "Safdar is a Junior Full-Stack Developer with 4+ years of hands-on experience in React, Next.js, Node.js, Express, MySQL, and Supabase. Feel free to contact him directly at safdarrehmaninfo1@gmail.com!",
                actions: [
                  { label: "View Projects", action: "scroll", url: "#projects" },
                  { label: "Contact Safdar", action: "scroll", url: "#contact" },
                ],
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
      setTimeout(() => scrollToBottom(true), 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset-" + Date.now(),
        sender: "ai",
        text: "👋 Chat reset! What else would you like to know about Safdar's projects, experience, or availability?",
        actions: [
          { label: "View Projects", action: "scroll", url: "#projects" },
          { label: "Get In Touch", action: "scroll", url: "#contact" },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Button & First-Time Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
        {/* First-time Tooltip bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center gap-2.5 rounded-2xl border border-primary/40 bg-surface-1/95 p-3 pr-2 text-xs text-foreground shadow-2xl backdrop-blur-xl max-w-xs"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-foreground">
                  Ask about my work &amp; availability!
                </span>
              </div>
              <button
                onClick={dismissTooltip}
                className="rounded-lg p-1 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
                aria-label="Dismiss tooltip"
              >
                <X className="size-3.5" />
              </button>

              {/* Little downward arrow pointer */}
              <div className="absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-primary/40 bg-surface-1" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isOpen ? setIsOpen(false) : handleOpenChat())}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 border border-white/20 backdrop-blur-md transition-all duration-300 group min-h-[44px] min-w-[44px]"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={isOpen ? "Close AI Assistant" : "Ask Safdar AI"}
        >
          {/* Glowing pulse dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>

          <Sparkles className="size-4 text-white/90 animate-pulse" />

          <span className="text-xs font-bold tracking-tight">
            {isOpen ? "Close AI" : "Ask Safdar AI"}
          </span>
        </motion.button>
      </div>

      {/* Floating Chat Panel with data-lenis-prevent to avoid smooth scroll capture */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            data-lenis-prevent="true"
            role="dialog"
            aria-modal="true"
            aria-label="Safdar AI Assistant Chat"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 right-0 sm:bottom-20 sm:right-6 z-50 w-full sm:w-[410px] h-[92vh] sm:h-[600px] sm:max-h-[85vh] flex flex-col rounded-t-3xl sm:rounded-3xl border border-border-subtle bg-surface-1/95 backdrop-blur-2xl shadow-2xl shadow-black/70 overflow-hidden overscroll-contain"
          >
            {/* Window Top Header */}
            <div className="p-3.5 bg-surface-2/80 border-b border-border-subtle flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-teal-400 p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background text-indigo-400">
                    <Bot className="size-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <span>Ask Safdar AI</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </h3>
                  <p className="text-[10px] text-muted-foreground">
                    Grounded on Safdar&apos;s verified credentials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Clear conversation"
                  aria-label="Clear chat history"
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                >
                  <RotateCcw className="size-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  aria-label="Close chat window"
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body with data-lenis-prevent and native scrolling */}
            <div
              ref={chatContainerRef}
              data-lenis-prevent="true"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 text-xs relative overscroll-contain"
              aria-live="polite"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div className="h-6 w-6 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                      <Bot className="size-3.5" />
                    </div>
                  )}

                  <div className="max-w-[85%] flex flex-col space-y-1 group">
                    <div
                      className={`relative rounded-2xl p-3.5 space-y-2.5 leading-relaxed transition-all ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-br-sm shadow-md"
                          : "bg-surface-2/90 text-foreground/95 border border-border-subtle rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {/* Message Text with Markdown */}
                      {msg.text ? (
                        <MarkdownText content={msg.text} />
                      ) : (
                        <div className="flex items-center gap-1.5 text-muted-foreground py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                        </div>
                      )}

                      {/* Action buttons inside AI response */}
                      {msg.actions && msg.actions.length > 0 && !msg.isStreaming && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle/50">
                          {msg.actions.map((act, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 transition-all hover:scale-102"
                            >
                              <span>{act.label}</span>
                              {act.action === "download" ? (
                                <Download className="size-3" />
                              ) : act.action === "link" ? (
                                <ExternalLink className="size-3" />
                              ) : (
                                <ArrowRight className="size-3" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Copy button for AI messages */}
                      {msg.sender === "ai" && !msg.isStreaming && msg.text && (
                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          title="Copy message"
                          aria-label="Copy message text"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded-md bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border-subtle transition-opacity"
                        >
                          {copiedId === msg.id ? (
                            <Check className="size-3 text-emerald-400" />
                          ) : (
                            <Copy className="size-3" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Timestamp on hover */}
                    <span
                      className={`text-[10px] text-muted-foreground/60 px-1 ${
                        msg.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="h-6 w-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="size-3.5" />
                    </div>
                  )}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to Latest floating button */}
            <AnimatePresence>
              {showScrollBottom && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={() => scrollToBottom(true)}
                  className="absolute bottom-24 right-6 z-10 flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-2/95 border border-primary/40 text-primary shadow-lg backdrop-blur-md hover:bg-surface-2 transition-all"
                  aria-label="Scroll to latest message"
                >
                  <span>Latest</span>
                  <ArrowDown className="size-3" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Quick Starter Chips */}
            <div className="px-3 py-2 bg-surface-2/40 border-t border-border-subtle overflow-x-auto scrollbar-none flex gap-1.5 shrink-0">
              {STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  disabled={isTyping}
                  className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-surface-2 hover:bg-primary/15 text-muted-foreground hover:text-primary border border-border-subtle transition-all duration-200 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Text Input Footer */}
            <div className="p-3 bg-surface-2/80 border-t border-border-subtle shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-end gap-2"
              >
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value.slice(0, 500))}
                    onKeyDown={handleKeyDown}
                    disabled={isTyping}
                    rows={1}
                    placeholder="Ask about stack, projects, or hiring..."
                    maxLength={500}
                    className="w-full resize-none bg-background/80 border border-border-subtle rounded-xl px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all max-h-24 disabled:opacity-60"
                  />
                  {input.length > 400 && (
                    <span className="absolute bottom-1 right-2 text-[9px] text-muted-foreground">
                      {500 - input.length}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  size="icon"
                  variant="gradient"
                  disabled={!input.trim() || isTyping}
                  className="h-9 w-9 rounded-xl shrink-0"
                  aria-label="Send message"
                >
                  <Send className="size-3.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
