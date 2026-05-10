import { Check, Copy } from "lucide-react";
import * as React from "react";
import { useClipboard } from "../../hooks/use-clipboard";
import { cn } from "../../lib/utils";
import { Button, type ButtonProps } from "../ui/button";

export interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
  text: string;
  timeout?: number;
}

export function CopyButton({
  text,
  timeout = 2000,
  className,
  variant = "ghost",
  size = "icon",
  ...props
}: CopyButtonProps) {
  const { copied, copy } = useClipboard(timeout);

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => copy(text)}
      {...props}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
