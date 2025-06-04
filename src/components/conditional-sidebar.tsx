"use client";

import ArticleLayout from "@/components/side-bar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function ConditionalSidebar() {
  const pathname = usePathname();
  
  // Don't render sidebar for API reference pages
  if (pathname.startsWith('/docs/api-reference')) {
    return null;
  }
  
  return (
    <div
      className={cn(
        "[--fd-tocnav-height:36px] md:mr-[286px] xl:[--fd-toc-width:286px] xl:[--fd-tocnav-height:0px] "
      )}
    >
      <ArticleLayout />
    </div>
  );
} 