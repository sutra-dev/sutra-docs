"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export const NavLink = ({ href, children, className, external }: Props) => {
  const path = usePathname();
  const isActive = (() => {
    if (href === "/") {
      return path === "/";
    }
    if (href === "/docs") {
      return path.startsWith("/docs") && !path.startsWith("/docs/cookbooks");
    }
    if (href === "/docs/cookbooks") {
      return path.startsWith("/docs/cookbooks");
    }
    if (href === "/docs/api-reference") {
      return path.startsWith("/docs/api-reference");
    }
    if (href === "/community") {
      return path === "/community";
    }
    return false;
  })();

  return (
    <li className={cn("relative group", className)}>
      <Link
        href={href}
        className={cn(
          "w-full h-full block py-4 px-5 transition-colors",
          "group-hover:text-foreground",
          isActive ? "text-foreground" : "text-muted-foreground"
        )}
        target={external ? "_blank" : "_parent"}
      >
        {children}
      </Link>
      <div
        className={cn(
          "absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500",
          "group-hover:opacity-100 group-hover:w-full",
          isActive ? "opacity-100 w-full" : "w-0"
        )}
      />
    </li>
  );
};
