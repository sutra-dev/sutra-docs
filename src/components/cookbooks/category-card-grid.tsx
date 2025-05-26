"use client";

import { CategoryCard } from "./category-card";

interface CategoryCardGridProps {
  categories: {
    title: string;
    href: string;
    gradient: string;
    textColor: string;
  }[];
}

export default function CategoryCardGrid({
  categories,
}: CategoryCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category: any) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}
