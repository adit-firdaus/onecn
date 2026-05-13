import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<ContextMenuSubTriggerProps>("ContextMenuSubTrigger");
  const mergedClassName = cn(
    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    (inset ?? defaultProps?.inset) && "pl-8",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, inset: _i, children: _ch, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>>(
      "ContextMenuSubContent"
    );
  const mergedClassName = cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:ease-out-expo data-[state=closed]:animate-out data-[state=closed]:ease-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(
      "ContextMenuContent"
    );
  const mergedClassName = cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in ease-out-expo fade-in-80 data-[state=open]:animate-in data-[state=open]:ease-out-expo data-[state=closed]:animate-out data-[state=closed]:ease-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={mergedClassName}
        {...restDefaults}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

interface ContextMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
}

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<ContextMenuItemProps>("ContextMenuItem");
  const mergedClassName = cn(
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    (inset ?? defaultProps?.inset) && "pl-8",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, inset: _i, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.Item ref={ref} className={mergedClassName} {...restDefaults} {...props} />
  );
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>>(
      "ContextMenuCheckboxItem"
    );
  const mergedClassName = cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, children: _ch, checked: _ck, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={mergedClassName}
      checked={checked}
      {...restDefaults}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>>(
      "ContextMenuRadioItem"
    );
  const mergedClassName = cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, children: _ch, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<ContextMenuLabelProps>("ContextMenuLabel");
  const mergedClassName = cn(
    "px-2 py-1.5 text-sm font-semibold text-foreground",
    (inset ?? defaultProps?.inset) && "pl-8",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, inset: _i, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(
      "ContextMenuSeparator"
    );
  const mergedClassName = cn(
    "-mx-1 my-1 h-px bg-border",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLSpanElement>>("ContextMenuShortcut");
  const mergedClassName = cn(
    "ml-auto text-xs tracking-widest text-muted-foreground",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <span className={mergedClassName} {...restDefaults} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
