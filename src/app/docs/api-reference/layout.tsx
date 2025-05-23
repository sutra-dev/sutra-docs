import type { ReactNode } from "react";

export default function ApiReferenceLayout({ children }: { children: ReactNode }) {
  return (
    // temporarily manual size adjustment
    <div className="w-full h-[calc(100dvh-56px)]"> 
      {children}
    </div>
  );
} 