import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

const BentoCard = ({ children, className, glow = false }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-card p-6 border border-border transition-all duration-300 hover:border-ember/40 hover:glow-ember",
        glow && "border-glow glow-ember",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
