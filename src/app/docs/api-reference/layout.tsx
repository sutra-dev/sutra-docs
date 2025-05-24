import type { ReactNode } from "react";

export default function ApiReferenceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[calc(100dvh-64px)] md:h-[calc(100dvh-57px)]"> 
      {children}
    </div>
  );
} 