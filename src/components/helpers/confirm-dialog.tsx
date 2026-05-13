import type * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button, type ButtonProps } from "../ui/button";

export interface ConfirmDialogProps {
  trigger?: React.ReactNode;
  triggerLabel?: string;
  title?: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmVariant?: ButtonProps["variant"];
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export function ConfirmDialog({
  trigger,
  triggerLabel = "Open",
  title = "Are you sure?",
  description = "This action cannot be undone.",
  cancelLabel = "Cancel",
  confirmLabel = "Continue",
  confirmVariant = "default",
  onConfirm,
  onCancel,
  className,
}: ConfirmDialogProps) {
  const { defaultProps, baseClassName } = useComponentConfig<ConfirmDialogProps>("ConfirmDialog");

  const mergedTrigger = trigger ?? defaultProps?.trigger;
  const mergedTriggerLabel = triggerLabel ?? defaultProps?.triggerLabel ?? "Open";
  const mergedTitle = title ?? defaultProps?.title ?? "Are you sure?";
  const mergedDescription =
    description ?? defaultProps?.description ?? "This action cannot be undone.";
  const mergedCancelLabel = cancelLabel ?? defaultProps?.cancelLabel ?? "Cancel";
  const mergedConfirmLabel = confirmLabel ?? defaultProps?.confirmLabel ?? "Continue";
  const mergedConfirmVariant = confirmVariant ?? defaultProps?.confirmVariant ?? "default";
  const mergedOnConfirm = onConfirm ?? defaultProps?.onConfirm;
  const mergedOnCancel = onCancel ?? defaultProps?.onCancel;
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    className: _c,
    trigger: _t,
    triggerLabel: _tl,
    title: _ti,
    description: _d,
    cancelLabel: _cl,
    confirmLabel: _col,
    confirmVariant: _cv,
    onConfirm: _oc,
    onCancel: _oca,
    ...restDefaults
  } = defaultProps ?? {};

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {mergedTrigger ?? <Button variant="outline">{mergedTriggerLabel}</Button>}
      </AlertDialogTrigger>
      <AlertDialogContent className={mergedClassName} {...restDefaults}>
        <AlertDialogHeader>
          <AlertDialogTitle>{mergedTitle}</AlertDialogTitle>
          <AlertDialogDescription>{mergedDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={mergedOnCancel}>{mergedCancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={mergedOnConfirm}
            className={mergedConfirmVariant ? undefined : undefined}
          >
            <Button variant={mergedConfirmVariant} asChild>
              <span>{mergedConfirmLabel}</span>
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
