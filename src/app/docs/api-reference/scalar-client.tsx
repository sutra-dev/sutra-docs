'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

export default function ScalarApiReference() {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <ApiReferenceReact
        configuration={{
          url: '/api/openapi-spec',
          layout: 'modern',
          theme: 'default',
          showSidebar: true,
          customCss: `
            .scalar-app {
              --scalar-radius: 6px;
              --scalar-border-width: 1px;
              --scalar-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
            }
            .scalar-app.dark-mode {
              --scalar-background-1: hsl(0 0% 3.9%);
              --scalar-background-2: hsl(0 0% 14.9%);
              --scalar-background-3: hsl(0 0% 9.8%);
              --scalar-color-1: hsl(0 0% 98%);
              --scalar-color-2: hsl(0 0% 78.4%);
              --scalar-color-3: hsl(0 0% 56.1%);
              --scalar-border-color: hsl(0 0% 14.9%);
              --scalar-color-accent: hsl(0 0% 98%);
            }
            .scalar-app.light-mode {
              --scalar-background-1: hsl(0 0% 100%);
              --scalar-background-2: hsl(0 0% 96.1%);
              --scalar-background-3: hsl(0 0% 97.3%);
              --scalar-color-1: hsl(0 0% 3.9%);
              --scalar-color-2: hsl(0 0% 39.2%);
              --scalar-color-3: hsl(0 0% 45.1%);
              --scalar-border-color: hsl(0 0% 89.8%);
              --scalar-color-accent: hsl(0 0% 3.9%);
            }
            .sidebar {
              --scalar-background-1: blue;
              width: 280px;
              height: 100%;
              overflow: scroll;
              position: fixed;
              top: 0;
              left: 0;
            }
          `,
        }}
      />
    </div>
  );
} 