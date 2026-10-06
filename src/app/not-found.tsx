import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl font-extrabold text-primary mb-6">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
        Page Not Found
      </h1>

      <p className="text-muted-foreground max-w-md mb-8 text-sm sm:text-base">
        The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Button asChild variant="gradient" className="rounded-xl">
          <Link href="/" className="flex items-center gap-2">
            <Home className="size-4" />
            <span>Return Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
