import { docs, cookbooksCollection } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
});

export const cookbooks = loader({
  baseUrl: "/cookbook",
  source: createMDXSource(cookbooksCollection),
});

export const openapi = createOpenAPI({
  proxyUrl: "/api/proxy",
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
});
