import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  className?: string;
}

export function ResourceCard({
  title,
  description,
  href,
  tags,
  className,
}: ResourceCardProps) {
  return (
    <div
      className={cn(
        "relative flex justify-between rounded-none flex-col group space-y-1 border transition-colors hover:bg-muted/80",
        className
      )}
    >
      <div>
        <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 group-hover:opacity-100 opacity-80 text-muted-foreground transition-colors group-hover:text-foreground no-underline underline-offset-0" />
        <div className="p-4 py-0 flex items-start justify-between">
          <Link href={href} rel="noopener noreferrer">
            <h3 className="font-semibold tracking-tight no-underline">
              {title}
            </h3>
          </Link>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: `${description}` }}
          className="p-4 py-0 text-sm md:decoration-none text-muted-foreground"
        ></p>
      </div>
      <div>
        {tags && tags.length > 0 && (
          <div className="py-3 border-zinc-700/80 border-t-[1.2px] flex flex-wrap items-end gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-end underline underline-offset-2 rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ResourceCardWithTwoLinksProps {
  title: string;
  description: string;
  href?: {
    label: string;
    href: string;
  }[];
  className?: string;
}

export function ResourceCardWithTwoLinks({
  title,
  description,
  href,
  className,
}: ResourceCardWithTwoLinksProps) {
  return (
    <div
      className={cn(
        "relative flex justify-between rounded-none flex-col group space-y-1 border",
        className
      )}
    >
      <div>
        <div className="p-4 py-0 flex items-start justify-between">
          <h3 className="font-semibold tracking-tight no-underline">{title}</h3>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: `${description}` }}
          className="p-4 py-0 text-sm md:decoration-none text-muted-foreground"
        ></p>
      </div>
      <div>
        {href && href.length > 0 && (
          <div className="border-zinc-700/80 border-t-[1.2px] divide-x grid grid-cols-2">
            {href?.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                target={link.href.includes("http") ? "_blank" : "_self"}
                className="text-sm w-full text-center p-3 hover:bg-muted/80 transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
