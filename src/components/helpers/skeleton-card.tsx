import * as React from "react";
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
  return (
    <Card className={cn("w-full", className)}>
      {header && (
        <CardHeader>
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
      )}
      <CardContent className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholders
          <Skeleton key={`skeleton-${i}`} className="h-4 w-full" />
        ))}
      </CardContent>
      {footer && (
        <CardFooter>
          <Skeleton className="h-9 w-24" />
        </CardFooter>
      )}
    </Card>
  );
}
