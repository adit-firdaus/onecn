import type * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../ui/label";

export interface FormGroupProps {
  label?: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export function FormGroup({ label, error, helper, children, className, required }: FormGroupProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label className={cn(error && "text-destructive")}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      {children}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
      {helper && !error && <p className="text-sm text-muted-foreground">{helper}</p>}
    </div>
  );
}
