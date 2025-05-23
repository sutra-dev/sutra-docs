"use client";

import { LockClosedIcon } from "@radix-ui/react-icons";
import {
  ExternalLink,
  Globe2Icon,
  PlugIcon,
  PlugZap2Icon,
  Plus,
  RabbitIcon,
  ShieldCheckIcon,
  Webhook,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubStat } from "./github-stat";
import { Ripple } from "./ripple";
import IntegrationsSection from "./landing/integrations";
const features = [
  {
    id: 1,
    title: "COOKBOOKS",
    description:
      "Explore our collection of cookbooks to kickstart your projects with practical examples and templates.",
    icon: PlugZap2Icon,
    href: "https://github.com/sutra-dev/sutra-cookbook",
  },
  {
    id: 2,
    title: "PLAYGROUND",
    description:
      "Experiment with our tools and features in an interactive playground designed for developers.",
    icon: PlugIcon,
    href: "/docs",
  },
  {
    id: 3,
    title: "API KEY",
    description:
      "Generate and manage your API keys to securely integrate with our services and unlock full functionality.",
    icon: Webhook,
    href: "https://www.two.ai/#platforms-intro",
  },
  {
    id: 4,
    title: "MULTILINGUAL SUPPORT",
    description:
      "Reach a global audience with built-in support for multiple languages in your applications.",
    icon: ShieldCheckIcon,
    href: "/docs",
  },
  {
    id: 5,
    title: "CHATSUTRA",
    description:
      "India’s AI Assistant by TWO AI, supporting 50+ languages for seamless multilingual conversations.",
    icon: LockClosedIcon,
    href: "https://chat.two.ai/",
  },
  {
    id: 6,
    title: "API REFERENCE",
    description:
      "Dive into our comprehensive API reference to understand endpoints, parameters, and responses in detail.",
    icon: RabbitIcon,
    href: "/docs",
  },
];

export default function Features({ stars }: { stars: string | null }) {
  return (
    <div className="md:w-10/12 mt-10 mx-auto font-geist relative md:border-l-0 md:border-b-0 md:border-[1.2px] rounded-none -pr-2 dark:bg-black/[0.95]">
      <div className="w-full md:mx-0">
        <div className="grid grid-cols-1 relative md:grid-rows-2 md:grid-cols-3 border-b-[1.2px]">
          <div className="hidden md:grid top-1/2 left-0 -translate-y-1/2 w-full grid-cols-3 z-10 pointer-events-none select-none absolute">
            <Plus className="w-8 h-8 text-neutral-300 translate-x-[16.5px] translate-y-[.5px] ml-auto dark:text-neutral-600" />
            <Plus className="w-8 h-8 text-neutral-300 ml-auto translate-x-[16.5px] translate-y-[.5px] dark:text-neutral-600" />
          </div>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                "justify-center border-l-[1.2px] md:min-h-[240px] border-t-[1.2px] md:border-t-0 transform-gpu flex flex-col p-10 hover:bg-muted/50 transition-colors",
                index >= 3 && "md:border-t-[1.2px]"
              )}
            >
              {/* <div className="flex items-center gap-2 my-1">
                <feature.icon className="w-4 h-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.label}
                </p>
              </div> */}
              <div className="mt-2">
                <div className="max-w-full">
                  <div className="flex gap-3 ">
                    <p
                      className="max-w-lg text-xl font-normal tracking-tighter md:text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: feature.title,
                      }}
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-left text-muted-foreground">
                  {feature.description}
                </p>
                <div className="pt-3">
                  <Link
                    href={feature.href}
                    target={feature.href.includes("http") ? "_blank" : "_self"}
                    className="underline mt-3 text-foreground/80 flex items-center gap-2"
                  >
                    Learn more <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <IntegrationsSection />
        <div className="relative col-span-3 border-t-[1.2px] border-l-[1.2px] md:border-b-[1.2px] dark:border-b-0  h-full py-20">
          <div className="w-full h-full p-16 pt-10 md:px-10">
            <div className="flex flex-col items-center justify-center w-full h-full gap-3">
              <div className="flex items-center gap-2">
                <Globe2Icon className="w-4 h-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Own your auth
                </p>
              </div>
              <p className="max-w-md mx-auto mt-4 text-4xl font-normal tracking-tighter text-center md:text-4xl">
                <strong>
                  Power your AI with multilingual capabilities across 50+
                  languages!
                </strong>
              </p>
              <div className="flex mt-[10px] z-20 justify-center items-start">
                {/* <TechStackDisplay skills={["Langchain", "OpenAI", "aiSDK"]} /> */}
              </div>
              <div className="flex items-center gap-2">
                <GithubStat stars={stars} />
              </div>
              <Ripple />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
