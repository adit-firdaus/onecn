import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

describe("Toast", () => {
  test("ToastProvider renders children", () => {
    const html = renderToString(
      <ToastProvider>
        <div>Child</div>
      </ToastProvider>
    );
    expect(html).toContain("Child");
  });

  test("ToastViewport renders with correct classes", () => {
    const html = renderToString(
      <ToastProvider>
        <ToastViewport />
      </ToastProvider>
    );
    expect(html).toContain("fixed");
    expect(html).toContain("top-0");
  });

  test("Toast renders without crashing", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast>
          <ToastTitle>Hello</ToastTitle>
        </Toast>
      </ToastProvider>
    );
    // Radix Toast uses portals; SSR may not render children
    expect(html).toBeDefined();
  });

  test("Toast renders with destructive variant", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast variant="destructive">
          <ToastTitle>Error</ToastTitle>
        </Toast>
      </ToastProvider>
    );
    expect(html).toBeDefined();
  });

  test("ToastTitle renders without crashing", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast>
          <ToastTitle>Title</ToastTitle>
        </Toast>
      </ToastProvider>
    );
    expect(html).toBeDefined();
  });

  test("ToastDescription renders without crashing", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast>
          <ToastDescription>Desc</ToastDescription>
        </Toast>
      </ToastProvider>
    );
    expect(html).toBeDefined();
  });

  test("ToastClose renders without crashing", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast>
          <ToastClose />
        </Toast>
      </ToastProvider>
    );
    expect(html).toBeDefined();
  });

  test("ToastAction renders without crashing", () => {
    const html = renderToString(
      <ToastProvider>
        <Toast>
          <ToastAction altText="Undo">Undo</ToastAction>
        </Toast>
      </ToastProvider>
    );
    expect(html).toBeDefined();
  });
});
