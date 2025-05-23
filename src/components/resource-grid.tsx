import { cn } from "@/lib/utils";
import { ResourceCard, ResourceCardWithTwoLinks } from "./resource-card";

interface ResourceGridProps {
  resources: {
    title: string;
    description: string;
    href: string;
    tags?: string[];
  }[];
  className?: string;
}

export function ResourceGrid({ resources, className }: ResourceGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {resources.map((resource) => (
        <ResourceCard key={resource.href} {...resource} />
      ))}
    </div>
  );
}

interface ResourceGridWithTwoLinksProps {
  resources: {
    title: string;
    description: string;
    href?: {
      label: string;
      href: string;
    }[];
  }[];
  className?: string;
}

export function ResourceGridWithTwoLinks({
  resources,
  className,
}: ResourceGridWithTwoLinksProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {resources.map((resource) => (
        <ResourceCardWithTwoLinks key={resource.title} {...resource} />
      ))}
    </div>
  );
}
