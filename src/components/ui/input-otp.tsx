import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<typeof OTPInput>>("InputOTP");
  const mergedClassName = cn(
    "disabled:cursor-not-allowed",
    baseClassName,
    defaultProps?.className,
    className
  );
  const mergedContainerClassName = cn(
    "flex items-center gap-2 has-[:disabled]:opacity-50",
    defaultProps?.containerClassName,
    containerClassName
  );
  return (
    <OTPInput
      ref={ref}
      containerClassName={mergedContainerClassName}
      className={mergedClassName}
      {...props}
    />
  );
});
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<"div">>("InputOTPGroup");
  const mergedClassName = cn(
    "flex items-center",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <div ref={ref} className={mergedClassName} {...restDefaults} {...props} />;
});
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { defaultProps, baseClassName } = useComponentConfig<
    React.ComponentPropsWithoutRef<"div"> & { index: number }
  >("InputOTPSlot");
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];
  if (!slot) return null;
  const { char, hasFakeCaret, isActive } = slot;

  const mergedClassName = cn(
    "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
    isActive && "z-10 ring-1 ring-ring",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <div ref={ref} className={mergedClassName} {...restDefaults} {...props}>
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  const { defaultProps, baseClassName } =
    useComponentConfig<React.ComponentPropsWithoutRef<"div">>("InputOTPSeparator");
  const mergedClassName = cn(baseClassName, defaultProps?.className, className);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return (
    <div ref={ref} className={mergedClassName} role="separator" {...restDefaults} {...props}>
      <Dot />
    </div>
  );
});
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
