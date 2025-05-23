'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

export default function ScalarApiReference() {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <ApiReferenceReact
        configuration={{
          url: '/api/openapi-spec',
          theme: 'default',
          layout: 'modern',
          showSidebar: true,
        }}
      />
    </div>
  );
} 