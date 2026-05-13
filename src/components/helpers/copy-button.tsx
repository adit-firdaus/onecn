import { Check, Copy } from "lucide-react";
import * as React from "react";
import { useClipboard } from "../../hooks/use-clipboard";
import { useComponentConfig } from "../../lib/config";
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
  const { defaultProps, baseClassName } = useComponentConfig<CopyButtonProps>("CopyButton");
  const { copied, copy } = useClipboard(timeout);

  const mergedVariant = variant ?? defaultProps?.variant ?? "ghost";
  const mergedSize = size ?? defaultProps?.size ?? "icon";
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    className: _c,
    variant: _v,
    size: _s,
    text: _t,
    timeout: _to,
    ...restDefaults
  } = defaultProps ?? {};

  return (
    <Button
      variant={mergedVariant}
      size={mergedSize}
      className={mergedClassName}
      onClick={() => copy(text)}
      {...restDefaults}
      {...props}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
