import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { defaultProps, baseClassName } = useComponentConfig<InputProps>("Input");
    const mergedClassName = cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      baseClassName,
      defaultProps?.className,
      className
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, type: _t, ...restDefaults } = defaultProps ?? {};

    return <input type={type} className={mergedClassName} ref={ref} {...restDefaults} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
