import { ConditionalSidebar } from "@/components/conditional-sidebar";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...docsOptions}
      sidebar={{
        component: <ConditionalSidebar />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
