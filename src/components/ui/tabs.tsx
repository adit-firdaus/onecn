import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>("TabsList");
  const mergedClassName = cn(
    "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <TabsPrimitive.List ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>("TabsTrigger");
  const mergedClassName = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <TabsPrimitive.Trigger ref={ref} className={mergedClassName} {...restDefaults} {...props} />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>("TabsContent");
  const mergedClassName = cn(
    "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <TabsPrimitive.Content ref={ref} className={mergedClassName} {...restDefaults} {...props} />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
