import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  const { defaultProps, baseClassName } = useComponentConfig<SkeletonProps>("Skeleton");
  const mergedClassName = cn(
    "animate-pulse rounded-md bg-primary/10",
    baseClassName,
    defaultProps?.className,
    className
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, ...restDefaults } = defaultProps ?? {};
  return <div className={mergedClassName} {...restDefaults} {...props} />;
}

export { Skeleton };
