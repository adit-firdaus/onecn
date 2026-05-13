import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<
    React.ComponentPropsWithoutRef<"nav"> & {
      separator?: React.ReactNode;
    }
  >("Breadcrumb");
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.ComponentPropsWithoutRef<"ol">>("BreadcrumbList");
    const mergedClassName = cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <ol ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
  }
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.ComponentPropsWithoutRef<"li">>("BreadcrumbItem");
    const mergedClassName = cn(
      "inline-flex items-center gap-1.5",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <li ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<
    React.ComponentPropsWithoutRef<"a"> & {
      asChild?: boolean;
    }
  >("BreadcrumbLink");
  const mergedAsChild = asChild ?? defaultProps?.asChild ?? false;
  const mergedClassName = cn(
    "transition-colors hover:text-foreground",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, asChild: _a, ...restDefaults } = defaultProps ?? {};
  const Comp = mergedAsChild ? Slot : "a";
  return <Comp ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.ComponentPropsWithoutRef<"span">>("BreadcrumbPage");
    const mergedClassName = cn(
      "font-normal text-foreground",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return (
      <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={mergedClassName}
        {...restDefaults}
        {...props}
      />
    );
  }
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<"li">>("BreadcrumbSeparator");
  const mergedClassName = cn(
    "[&>svg]:w-3.5 [&>svg]:h-3.5",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<"span">>("BreadcrumbEllipsis");
  const mergedClassName = cn(
    "flex h-9 w-9 items-center justify-center",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
