import React from "react";
import { openapi, cookbooks as source } from "@/lib/source";
import { DocsPage, DocsBody, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/utils";
import DatabaseTable from "@/components/mdx/database-tables";
import { cn } from "@/lib/utils";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { AnimatePresence } from "@/components/ui/fade-in";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Features } from "@/components/blocks/features";
import { ForkButton } from "@/components/fork-button";
import Link from "next/link";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { AutoTypeTable, createTypeTable } from "fumadocs-typescript/ui";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Card, Cards } from "fumadocs-ui/components/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { contents } from "@/components/sidebar-content";
import { Endpoint } from "@/components/endpoint";
import { DividerText } from "@/components/divider-text";
import {
  ResourceCard,
  ResourceCardWithTwoLinks,
} from "@/components/resource-card";
import {
  ResourceGrid,
  ResourceGridWithTwoLinks,
} from "@/components/resource-grid";
import { APIPage } from "fumadocs-openapi/ui";
import CategoryCardGrid from "@/components/cookbooks/category-card-grid";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const { nextPage, prevPage } = getPageLinks(page.url);

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      // editOnGithub={{
      //   owner: "sutra-dev",
      //   repo: "sutra-cookbook",
      //   sha: "main",
      //   // path: `/${page.file.path.split("/").slice(1).join("/").replace(".mdx", ".")}`,
      //   path: `/${page.file.path.split("/").slice(1, -1)}`,
      // }}
      tableOfContent={{
        style: "clerk",
        header: <div className="w-10 h-4"></div>,
      }}
      footer={{
        enabled: true,
        component: <div className="w-10 h-4" />,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Link: ({
              className,
              ...props
            }: React.ComponentProps<typeof Link>) => (
              <Link
                className={cn(
                  "font-medium underline underline-offset-4",
                  className
                )}
                {...props}
              />
            ),
            APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
            CategoryCardGrid: (props) => <CategoryCardGrid {...props} />,
            Step,
            Steps,
            File,
            Folder,
            Files,
            Tab,
            Tabs,
            AutoTypeTable,
            AnimatePresence,
            TypeTable,
            Features,
            ForkButton,
            DatabaseTable,
            Accordion,
            ResourceCard,
            ResourceGridWithTwoLinks,
            ResourceCardWithTwoLinks,
            ResourceGrid,
            Accordions,
            Endpoint,
            Callout: ({ children, ...props }) => (
              <defaultMdxComponents.Callout
                {...props}
                className={cn(
                  props,
                  "bg-none rounded-none border-dashed border-border",
                  props.type === "info" && "border-l-blue-500/50",
                  props.type === "warn" && "border-l-amber-700/50",
                  props.type === "error" && "border-l-red-500/50"
                )}
              >
                {children}
              </defaultMdxComponents.Callout>
            ),
            DividerText,
            iframe: (props) => (
              <iframe {...props} className="w-full h-[500px]" />
            ),
          }}
        />

        <Cards className="mt-16">
          {prevPage ? (
            <Card
              href={prevPage.url}
              className="[&>p]:ml-1 [&>p]:truncate [&>p]:w-full"
              description={<>{prevPage.data.description}</>}
              title={
                <div className="flex items-center gap-1">
                  <ChevronLeft className="size-4" />
                  {prevPage.data.title}
                </div>
              }
            />
          ) : (
            <div></div>
          )}
          {nextPage ? (
            <Card
              href={nextPage.url}
              description={<>{nextPage.data.description}</>}
              title={
                <div className="flex items-center gap-1">
                  {nextPage.data.title}
                  <ChevronRight className="size-4" />
                </div>
              }
              className="flex flex-col items-end text-right [&>p]:ml-1 [&>p]:truncate [&>p]:w-full"
            />
          ) : (
            <div></div>
          )}
        </Cards>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

function getPageLinks(path: string) {
  const current_category_index = contents.findIndex(
    (x) => x.list?.find((x) => x.href === path)!
  )!;
  const current_category = contents[current_category_index];
  if (!current_category) return { nextPage: undefined, prevPage: undefined };

  // user's current page.
  const current_page = current_category.list?.find((x) => x.href === path)!;

  // the next page in the array.
  let next_page = current_category.list?.filter((x) => !x.group)[
    current_category.list
      .filter((x) => !x.group)
      .findIndex((x) => x.href === current_page.href) + 1
  ];
  //if there isn't a next page, then go to next cat's page.
  if (!next_page) {
    // get next cat
    let next_category = contents[current_category_index + 1];
    // if doesn't exist, return to first cat.
    if (!next_category) next_category = contents[0];

    next_page = next_category?.list?.[0];
    if (next_page?.group) {
      next_page = next_category?.list?.[1];
    }
  }
  // the prev page in the array.
  let prev_page = current_category?.list?.filter((x) => !x.group)[
    current_category.list
      .filter((x) => !x.group)
      .findIndex((x) => x.href === current_page.href) - 1
  ];
  // if there isn't a prev page, then go to prev cat's page.
  if (!prev_page) {
    // get prev cat
    let prev_category = contents[current_category_index - 1];
    // if doesn't exist, return to last cat.
    if (!prev_category) prev_category = contents[contents.length - 1];
    prev_page = prev_category.list?.[prev_category?.list?.length - 1];
    if (prev_page?.group) {
      prev_page = prev_category.list?.[prev_category.list.length - 2];
    }
  }

  const pages = source.getPages();
  let next_page2 = pages.find((x) => x.url === next_page?.href);
  let prev_page2 = pages.find((x) => x.url === prev_page?.href);
  if (path === "/docs/introduction") prev_page2 = undefined;
  return { nextPage: next_page2, prevPage: prev_page2 };
}
