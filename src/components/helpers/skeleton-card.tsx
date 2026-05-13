import * as React from "react";
import { useComponentConfig } from "../../lib/config";
import { cn } from "../../lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface SkeletonCardProps {
  header?: boolean;
  footer?: boolean;
  lines?: number;
  className?: string;
}

export function SkeletonCard({
  header = true,
  footer = true,
  lines = 3,
  className,
}: SkeletonCardProps) {
  const { defaultProps, baseClassName } = useComponentConfig<SkeletonCardProps>("SkeletonCard");

  const mergedHeader = header ?? defaultProps?.header ?? true;
  const mergedFooter = footer ?? defaultProps?.footer ?? true;
  const mergedLines = lines ?? defaultProps?.lines ?? 3;
  const mergedClassName = cn("w-full", baseClassName, defaultProps?.className, className);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className: _c, header: _h, footer: _f, lines: _l, ...restDefaults } = defaultProps ?? {};

  return (
    <Card className={mergedClassName} {...restDefaults}>
      {mergedHeader && (
        <CardHeader>
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
      )}
      <CardContent className="space-y-2">
        {Array.from({ length: mergedLines }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholders
          <Skeleton key={`skeleton-${i}`} className="h-4 w-full" />
        ))}
      </CardContent>
      {mergedFooter && (
        <CardFooter>
          <Skeleton className="h-9 w-24" />
        </CardFooter>
      )}
    </Card>
  );
}
