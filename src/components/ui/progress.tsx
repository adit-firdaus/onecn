import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, ...props }, ref) => {
    const { defaultProps, baseClassName } = useComponentConfig<ProgressProps>("Progress");
    const mergedClassName = cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return (
      <ProgressPrimitive.Root ref={ref} className={mergedClassName} {...restDefaults} {...props}>
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
