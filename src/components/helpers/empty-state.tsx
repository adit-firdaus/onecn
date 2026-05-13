import { FileQuestion } from "lucide-react";
import type * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import { Button, type ButtonProps } from "../ui/button";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: ButtonProps & { label: string };
  className?: string;
}

export function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filters to find what you're looking for.",
  icon = <FileQuestion className="h-10 w-10 text-muted-foreground" />,
  action,
  className,
}: EmptyStateProps) {
  const { defaultProps, baseClassName } = useComponentConfig<EmptyStateProps>("EmptyState");

  const mergedTitle = title ?? defaultProps?.title ?? "No results found";
  const mergedDescription =
    description ??
    defaultProps?.description ??
    "Try adjusting your search or filters to find what you're looking for.";
  const mergedIcon = icon ?? defaultProps?.icon ?? (
    <FileQuestion className="h-10 w-10 text-muted-foreground" />
  );
  const mergedAction = action ?? defaultProps?.action;
  const mergedClassName = cn(
    "flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center",
    baseClassName,
    defaultProps?.className,
    className
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    className: _c,
    title: _t,
    description: _d,
    icon: _i,
    action: _a,
    ...restDefaults
  } = defaultProps ?? {};

  return (
    <div className={mergedClassName} {...restDefaults}>
      <div className="mb-4">{mergedIcon}</div>
      <h3 className="text-lg font-semibold">{mergedTitle}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{mergedDescription}</p>
      {mergedAction && (
        <Button className="mt-4" {...mergedAction}>
          {mergedAction.label}
        </Button>
      )}
    </div>
  );
}
