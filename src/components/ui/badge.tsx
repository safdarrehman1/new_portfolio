import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
        secondary:
          "border-border bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-rose-500/30 bg-rose-500/10 text-rose-400",
        outline: "text-foreground border-border/80 bg-muted/40",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        gradient:
          "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-semibold",
        core: "border-indigo-500/30 bg-indigo-500/15 text-indigo-300 font-medium",
        proficient:
          "border-cyan-500/30 bg-cyan-500/15 text-cyan-300 font-medium",
        familiar:
          "border-slate-500/30 bg-slate-500/15 text-slate-300 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
