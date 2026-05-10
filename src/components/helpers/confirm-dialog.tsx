import type * as React from "react";
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
}: ConfirmDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger ?? <Button variant="outline">{triggerLabel}</Button>}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className={confirmVariant ? undefined : undefined}>
            <Button variant={confirmVariant} asChild>
              <span>{confirmLabel}</span>
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
