import type * as React from "react";
import { Toaster as Sonner } from "sonner";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { defaultProps, baseClassName } = useComponentConfig<ToasterProps>("Toaster");
  const mergedClassName = cn("toaster group", baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, toastOptions: _t, ...restDefaults } = defaultProps ?? {};

  return (
    <Sonner
      className={mergedClassName}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...restDefaults}
      {...props}
    />
  );
};

export { Toaster };
