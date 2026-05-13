import type * as React from "react";
import { useComponentConfig } from "../../lib/config";
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
  const { defaultProps, baseClassName } = useComponentConfig<FormGroupProps>("FormGroup");

  const mergedLabel = label ?? defaultProps?.label;
  const mergedError = error ?? defaultProps?.error;
  const mergedHelper = helper ?? defaultProps?.helper;
  const mergedRequired = required ?? defaultProps?.required;
  const mergedClassName = cn("space-y-2", baseClassName, defaultProps?.className, className);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    className: _c,
    label: _l,
    error: _e,
    helper: _h,
    required: _r,
    children: _ch,
    ...restDefaults
  } = defaultProps ?? {};

  return (
    <div className={mergedClassName} {...restDefaults}>
      {mergedLabel && (
        <Label className={cn(mergedError && "text-destructive")}>
          {mergedLabel}
          {mergedRequired && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      {children}
      {mergedError && <p className="text-sm font-medium text-destructive">{mergedError}</p>}
      {mergedHelper && !mergedError && (
        <p className="text-sm text-muted-foreground">{mergedHelper}</p>
      )}
    </div>
  );
}
