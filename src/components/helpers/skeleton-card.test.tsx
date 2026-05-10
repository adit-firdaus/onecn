import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { SkeletonCard } from "./skeleton-card";

describe("SkeletonCard", () => {
  test("renders skeleton placeholders", () => {
    const html = renderToString(<SkeletonCard />);
    expect(html).toContain("animate-pulse");
  });

  test("applies custom className", () => {
    const html = renderToString(<SkeletonCard className="custom-class" />);
    expect(html).toContain("custom-class");
  });
});
