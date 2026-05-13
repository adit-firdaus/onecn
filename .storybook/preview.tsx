import type { Preview } from "@storybook/react";
import * as React from "react";
import { OneCNProvider } from "../src/components/onecn-provider";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "hsl(0 0% 100%)" },
        { name: "dark", value: "hsl(240 10% 3.9%)" },
      ],
    },
  },
  globalTypes: {
    onecnPreset: {
      name: "OneCN Preset",
      description: "Global preset for onecn components",
      defaultValue: "default",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "default", title: "Default" },
          { value: "modern", title: "Modern" },
          { value: "brutalist", title: "Brutalist" },
          { value: "minimal", title: "Minimal" },
          { value: "corporate", title: "Corporate" },
          { value: "neon", title: "Neon" },
          { value: "retro", title: "Retro" },
          { value: "ios", title: "iOS" },
          { value: "macos", title: "macOS" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const preset = context.globals.onecnPreset;
      return (
        <OneCNProvider config={{ preset: preset === "default" ? undefined : preset }}>
          <div className="bg-background text-foreground">
            <Story />
          </div>
        </OneCNProvider>
      );
    },
  ],
};

export default preview;
