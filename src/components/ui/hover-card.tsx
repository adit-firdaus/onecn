import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>(
      "HoverCardContent"
    );
  const mergedAlign = align ?? defaultProps?.align ?? "center";
  const mergedSideOffset = sideOffset ?? defaultProps?.sideOffset ?? 4;
  const mergedClassName = cn(
    "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=open]:ease-out-expo data-[state=closed]:animate-out data-[state=closed]:ease-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, align: _a, sideOffset: _so, ...restDefaults } = defaultProps ?? {};
  return (
    <HoverCardPrimitive.Content
      ref={ref}
      align={mergedAlign}
      sideOffset={mergedSideOffset}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
