import { source, cookbooks } from "@/lib/source";
import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    enabled: false,
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Cookbooks",
      url: "/cookbooks",
      active: "nested-url",
    },
  ],
};

export const docsOptions = {
  ...baseOptions,
  tree: source.pageTree,
};

export const cookbooksOptions = {
  ...baseOptions,
  tree: cookbooks.pageTree,
};
