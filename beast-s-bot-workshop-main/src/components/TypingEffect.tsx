import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingEffect = ({ text, speed = 120, deleteSpeed = 60, pauseDuration = 10000, className }: TypingEffectProps) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isDeleting && displayed.length < text.length) {
      const timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(timeout);
    }
    if (!isDeleting && displayed.length === text.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && displayed.length > 0) {
      const timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }
  }, [displayed, isDeleting, text, speed, deleteSpeed, pauseDuration]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary transition-opacity duration-100`}>|</span>
    </span>
  );
};

export default TypingEffect;
