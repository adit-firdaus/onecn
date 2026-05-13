import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import { Label } from "./label";

const Form = FormProvider;

type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = ({ ...props }: React.ComponentProps<typeof Controller>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { defaultProps, baseClassName } =
      useComponentConfig<React.HTMLAttributes<HTMLDivElement>>("FormItem");
    const mergedClassName = cn("space-y-2", baseClassName, defaultProps?.className, className);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className: _c, ...restDefaults } = defaultProps ?? {};
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={mergedClassName} {...restDefaults} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>("FormLabel");
  const { error, formItemId } = useFormField();
  const mergedClassName = cn(
    error && "text-destructive",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};

  return (
    <Label
      ref={ref}
      className={mergedClassName}
      htmlFor={formItemId}
      {...restDefaults}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof Slot>>("FormControl");
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      className={mergedClassName}
      {...restDefaults}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLParagraphElement>>("FormDescription");
  const { formDescriptionId } = useFormField();
  const mergedClassName = cn(
    "text-sm text-muted-foreground",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};

  return (
    <p ref={ref} id={formDescriptionId} className={mergedClassName} {...restDefaults} {...props} />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.HTMLAttributes<HTMLParagraphElement>>("FormMessage");
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  const mergedClassName = cn(
    "text-sm font-medium text-destructive",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, children: _ch, ...restDefaults } = defaultProps ?? {};

  if (!body) {
    return null;
  }

  return (
    <p ref={ref} id={formMessageId} className={mergedClassName} {...restDefaults} {...props}>
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
