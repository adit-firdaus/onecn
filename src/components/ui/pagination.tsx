import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import { type ButtonProps, buttonVariants } from "./button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<"nav">>("Pagination");
  const mergedClassName = cn(
    "mx-auto flex w-full justify-center",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
};
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.ComponentProps<"ul">>("PaginationContent");
    const mergedClassName = cn(
      "flex flex-row items-center gap-1",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <ul ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
  }
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.ComponentProps<"li">>("PaginationItem");
    const mergedClassName = cn("", baseClassName, defaultProps?.className, className);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <li ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
  }
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => {
  const { defaultProps, variantOverrides, baseClassName } =
    useComponentConfig<PaginationLinkProps>("PaginationLink");
  const mergedSize = size ?? defaultProps?.size ?? "icon";
  const variant = isActive ? "outline" : "ghost";
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, size: _s, ...restDefaults } = defaultProps ?? {};
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant,
          size: mergedSize,
        }),
        variantOverrides?.[variant],
        mergedClassName
      )}
      {...restDefaults}
      {...props}
    />
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<typeof PaginationLink>>("PaginationPrevious");
  const mergedClassName = cn("gap-1 pl-2.5", baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<typeof PaginationLink>>("PaginationNext");
  const mergedClassName = cn("gap-1 pr-2.5", baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={mergedClassName}
      {...restDefaults}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentProps<"span">>("PaginationEllipsis");
  const mergedClassName = cn(
    "flex h-9 w-9 items-center justify-center",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <span aria-hidden className={mergedClassName} {...restDefaults} {...props}>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
