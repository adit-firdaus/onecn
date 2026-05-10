import { FileQuestion } from "lucide-react";
import type * as React from "react";
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
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && (
        <Button className="mt-4" {...action}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
