import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type AspectRatioProps = React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>;

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<AspectRatioProps>("AspectRatio");
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <AspectRatioPrimitive.Root ref={ref} className={mergedClassName} {...restDefaults} {...props} />
  );
});
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };
