import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<SeparatorProps>("Separator");
  const mergedClassName = cn(
    "shrink-0 bg-border",
    orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
