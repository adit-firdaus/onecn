import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } = useComponentConfig<TextareaProps>("Textarea");
    const mergedClassName = cn(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <textarea className={mergedClassName} ref={ref} {...restDefaults} {...props} />;
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
