"use client";

import Link from "next/link";

interface CategoryCardProps {
  category: {
    title: string;
    href: string;
    gradient: string;
    textColor: string;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      key={category.title}
      href={category.href}
      className="group block no-underline"
    >
      <div
        className={`
              relative overflow-hidden rounded-2xl p-8 h-36 
              bg-gradient-to-br ${category.gradient}
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-2xl
              cursor-pointer
            `}
      >
        <div className="relative z-10 h-full flex items-center justify-center">
          <span
            className={`
                  text-2xl font-semibold text-center
                  ${category.textColor || "text-white"}
                  group-hover:scale-110 transition-transform duration-300
                `}
          >
            {category.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    </Link>
  );
}
