import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
      VariantProps<typeof toggleVariants>
  >("ToggleGroup");
  const mergedClassName = cn(
    "flex items-center justify-center gap-1",
    baseClassName,
    defaultProps?.className,
    className
  );
  const mergedVariant = variant ?? defaultProps?.variant;
  const mergedSize = size ?? defaultProps?.size;
  return (
    <ToggleGroupPrimitive.Root ref={ref} className={mergedClassName} {...props}>
      <ToggleGroupContext.Provider value={{ variant: mergedVariant, size: mergedSize }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const { defaultProps, variantOverrides, baseClassName } = useComponentConfig<
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
      VariantProps<typeof toggleVariants>
  >("ToggleGroupItem");
  const context = React.useContext(ToggleGroupContext);
  const mergedVariant = context.variant || variant || defaultProps?.variant || "default";
  const mergedSize = context.size || size || defaultProps?.size || "default";
  const mergedClassName = cn(
    toggleVariants({
      variant: mergedVariant,
      size: mergedSize,
    }),
    variantOverrides?.[mergedVariant as string],
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, variant: _v, size: _s, ...restDefaults } = defaultProps ?? {};
  return (
    <ToggleGroupPrimitive.Item ref={ref} className={mergedClassName} {...restDefaults} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
