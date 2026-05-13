import type * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  const { defaultProps, baseClassName } = useComponentConfig<PageHeaderProps>("PageHeader");

  const mergedTitle = title ?? defaultProps?.title ?? "";
  const mergedDescription = description ?? defaultProps?.description;
  const mergedActions = actions ?? defaultProps?.actions;
  const mergedClassName = cn(
    "flex flex-col gap-1 pb-6 md:flex-row md:items-start md:justify-between",
    baseClassName,
    defaultProps?.className,
    className
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    className: _c,
    title: _t,
    description: _d,
    actions: _a,
    ...restDefaults
  } = defaultProps ?? {};

  return (
    <div className={mergedClassName} {...restDefaults}>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">{mergedTitle}</h1>
        {mergedDescription && <p className="text-muted-foreground">{mergedDescription}</p>}
      </div>
      {mergedActions && <div className="flex items-center gap-2 md:mt-0 mt-2">{mergedActions}</div>}
    </div>
  );
}
