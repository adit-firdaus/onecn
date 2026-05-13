import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.HTMLAttributes<HTMLTableElement>>("Table");
    const mergedClassName = cn(
      "w-full caption-bottom text-sm",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return (
      <div className="relative w-full overflow-auto">
        <table ref={ref} className={mergedClassName} {...restDefaults} {...props} />
      </div>
    );
  }
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLTableSectionElement>>("TableHeader");
  const mergedClassName = cn("[&_tr]:border-b", baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <thead ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLTableSectionElement>>("TableBody");
  const mergedClassName = cn(
    "[&_tr:last-child]:border-0",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <tbody ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLTableSectionElement>>("TableFooter");
  const mergedClassName = cn(
    "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <tfoot ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.HTMLAttributes<HTMLTableRowElement>>("TableRow");
    const mergedClassName = cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      baseClassName,
      defaultProps?.className,
      className
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    return <tr ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
  }
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ThHTMLAttributes<HTMLTableCellElement>>("TableHead");
  const mergedClassName = cn(
    "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <th ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.TdHTMLAttributes<HTMLTableCellElement>>("TableCell");
  const mergedClassName = cn(
    "p-4 align-middle [&:has([role=checkbox])]:pr-0",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <td ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLTableCaptionElement>>("TableCaption");
  const mergedClassName = cn(
    "mt-4 text-sm text-muted-foreground",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <caption ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
