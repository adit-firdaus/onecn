import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } = useComponentConfig<LabelProps>("Label");
    const mergedClassName = cn(labelVariants(), baseClassName, defaultProps?.className, className);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return (
      <LabelPrimitive.Root ref={ref} className={mergedClassName} {...restDefaults} {...props} />
    );
  }
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
