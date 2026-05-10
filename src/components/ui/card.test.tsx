import { describe, expect, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { ConfigProvider } from "../../lib/config";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

describe("Card", () => {
  test("renders with base classes", () => {
    const html = renderToString(<Card>Content</Card>);
    expect(html).toContain("Content");
    expect(html).toContain("rounded-xl");
    expect(html).toContain("border");
  });

  test("applies custom className", () => {
    const html = renderToString(<Card className="my-card">Content</Card>);
    expect(html).toContain("my-card");
  });

  test("CardHeader renders with correct classes", () => {
    const html = renderToString(<CardHeader>Header</CardHeader>);
    expect(html).toContain("flex");
    expect(html).toContain("flex-col");
    expect(html).toContain("p-6");
  });

  test("CardTitle renders with correct classes", () => {
    const html = renderToString(<CardTitle>Title</CardTitle>);
    expect(html).toContain("font-semibold");
    expect(html).toContain("Title");
  });

  test("CardDescription renders with correct classes", () => {
    const html = renderToString(<CardDescription>Desc</CardDescription>);
    expect(html).toContain("text-sm");
    expect(html).toContain("Desc");
  });

  test("CardContent renders with correct classes", () => {
    const html = renderToString(<CardContent>Body</CardContent>);
    expect(html).toContain("p-6");
    expect(html).toContain("pt-0");
  });

  test("CardFooter renders with correct classes", () => {
    const html = renderToString(<CardFooter>Footer</CardFooter>);
    expect(html).toContain("flex");
    expect(html).toContain("items-center");
  });

  test("full card composition renders correctly", () => {
    const html = renderToString(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Body</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );
    expect(html).toContain("Card Title");
    expect(html).toContain("Card Description");
    expect(html).toContain("Card Body");
    expect(html).toContain("Card Footer");
  });

  test("applies config defaults when inside ConfigProvider", () => {
    const html = renderToString(
      <ConfigProvider config={{ components: { Card: { className: "config-card" } } }}>
        <Card>Content</Card>
      </ConfigProvider>
    );
    expect(html).toContain("config-card");
  });
});
