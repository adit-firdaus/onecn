import * as React from "react";
import { cn } from "../../lib/utils";
import { Badge, type BadgeProps } from "../ui/badge";

export type Status = "success" | "warning" | "error" | "info" | "default";

export interface StatusBadgeProps extends Omit<BadgeProps, "variant"> {
  status?: Status;
}

const statusVariantMap: Record<Status, BadgeProps["variant"]> = {
  success: "default",
  warning: "secondary",
  error: "destructive",
  info: "outline",
  default: "default",
};

const statusClassMap: Record<Status, string> = {
  success: "bg-green-100 text-green-800 hover:bg-green-100 border-green-200",
  warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200",
  error: "", // destructive variant handles this
  info: "bg-blue-50 text-blue-800 hover:bg-blue-50 border-blue-200",
  default: "",
};

export function StatusBadge({
  status = "default",
  className,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <Badge
      variant={statusVariantMap[status]}
      className={cn(statusClassMap[status], className)}
      {...props}
    >
      {children}
    </Badge>
  );
}
