import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<ScrollAreaProps>("ScrollArea");
  const mergedClassName = cn(
    "relative overflow-hidden",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <ScrollAreaPrimitive.Root ref={ref} className={mergedClassName} {...restDefaults} {...props}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

type ScrollBarProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = "vertical", ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<ScrollBarProps>("ScrollBar");
  const mergedClassName = cn(
    "flex touch-none select-none transition-colors",
    orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
    orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
