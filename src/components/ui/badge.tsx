import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const { defaultProps, variantOverrides, baseClassName } = useComponentConfig<BadgeProps>("Badge");

  const mergedVariant = variant ?? defaultProps?.variant ?? "default";
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, variant: _v, ...restDefaults } = defaultProps ?? {};

  return (
    <div
      className={cn(
        badgeVariants({ variant: mergedVariant }),
        variantOverrides?.[mergedVariant as string],
        mergedClassName
      )}
      {...restDefaults}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
