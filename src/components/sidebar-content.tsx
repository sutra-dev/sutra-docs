import {
  Album,
  Blocks,
  BookTextIcon,
  Boxes,
  BoxIcon,
  CpuIcon,
  LanguagesIcon,
  LayoutListIcon,
  LucideIcon,
  Presentation,
  Rocket,
} from "lucide-react";
import { ReactNode, SVGProps } from "react";
import { Icons } from "./icons";
import { Langgraph } from "./logo";

interface Content {
  title: string;
  href?: string;
  Icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
  isNew?: boolean;
  list?: {
    title: string;
    href: string;
    icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
    group?: boolean;
    isNew?: boolean;
  }[];
  isPage?: boolean;
}

export const contents: Content[] = [
  {
    title: "Get Started",
    Icon: () => <Album className="size-4" />,
    list: [
      {
        title: "Introduction",
        href: "/docs",
        icon: () => <Presentation className="size-4" />,
      },
      {
        title: "Getting Started",
        href: "/docs/getting-started",
        icon: () => <Rocket className="size-4" />,
      },
    ],
  },
  {
    title: "Models",
    Icon: () => <Boxes className="size-4" />,
    list: [
      {
        title: "Overview",
        href: "/docs/models/overview",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "SUTRA R0 Guide",
        href: "/docs/models/sutra-r0-guide",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "SUTRA V2 Guide",
        href: "/docs/models/sutra-v2-guide",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "Model Pricing",
        href: "/docs/models/model-pricing",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: "Model Deprications",
        href: "/docs/models/model-deprications",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Integrations",
    Icon: () => <Blocks className="size-4" />,
    list: [
      {
        title: "Langchain",
        icon: Icons.langchain,
        href: "/docs/integrations/langchain",
      },

      {
        title: "LiteLLM",
        icon: Icons.liteLLM,
        href: "/docs/integrations/litellm",
      },
      {
        title: "Portkey",
        icon: Icons.portkey,
        href: "/docs/integrations/portkey",
      },
      {
        title: "LlamaIndex",
        icon: Icons.llamaIndex,
        href: "/docs/integrations/llamaindex",
      },
      {
        title: "LangGraph",
        icon: () => <Langgraph />,
        href: "/docs/integrations/langgraph",
      },
      {
        title: "Haystack",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 2h18c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1m1 2v16h16V4zm7 3l8 4.7V13h-2v-2.7l-6 3.5l-6-3.5V13H3v-1.3z"
            />
          </svg>
        ),
        href: "/docs/integrations/haystack",
      },
      {
        title: "FastAPI",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1.9 16c-2.1 0-3.8-1.8-3.8-4s1.7-4 3.8-4c1.5 0 2.4.5 3.1 1.2l-1.5 1.5c-.4-.4-.8-.6-1.6-.6c-1.1 0-1.9.9-1.9 1.9s.8 1.9 1.9 1.9c.8 0 1.2-.3 1.7-.7l1.5 1.5c-.7.7-1.6 1.3-3.2 1.3m8.5-3h-2.2l-2.2 2.2l-1.6-1.6l2.2-2.2V11l3.8 3.8z"
            />
          </svg>
        ),
        href: "/docs/integrations/fastapi",
      },
    ],
  },
  {
    title: "Supported SDKs",
    Icon: () => <CpuIcon className="size-4" />,
    list: [
      {
        title: "Python",
        href: "/docs/supported-sdks/python",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.21 4.93 7.21 4.93l.007 2.031h4.82v.672H4.965s-2.539-.221-2.539 3.043c0 3.264 2.224 3.15 2.224 3.15h1.33v-2.697s-.108-2.638 2.93-2.638zm-.39-1.143a.838.838 0 0 1-.834-.834.83.83 0 0 1 .834-.834.83.83 0 0 1 .834.834.83.83 0 0 1-.834.834"
            />
            <path
              fill="currentColor"
              d="M14.3 12.33H9.973s-2.432-.039-2.432 2.35v3.951s.367 2.392 5.145 2.392c4.575 0 4.726-1.93 4.726-1.93l-.007-2.031h-4.82v-.672h7.072s2.539.221 2.539-3.043c0-3.264-2.224-3.15-2.224-3.15h-1.33v2.697s.108 2.638-2.93 2.638zm.39 1.143a.838.838 0 0 1 .834.834.83.83 0 0 1-.834.834.83.83 0 0 1-.834-.834.83.83 0 0 1 .834-.834"
            />
          </svg>
        ),
      },
      {
        title: "Node.js",
        href: "/docs/supported-sdks/nodejs",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8Z"
            />
          </svg>
        ),
      },
      {
        title: "Java",
        href: "/docs/supported-sdks/java",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211c0 0 .552.346 1.321.646c-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308c0 0 .384.389.987.602c-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688c0-.001-8.216 2.051-4.292 6.573M19.95 20.5s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033c-.856-.373.75-.89 1.254-.998c.527-.114.828-.93.828-.093c-.953-.671-6.156 1.317-2.643 1.887c9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062c1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568c2.082-1.006 3.776-.892 3.776-.892m7.825 4.374c4.5-2.339 2.421-4.589.967-4.286c-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562c0 .001.07-.062.091-.117M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836c-2.274-2.053-3.943-3.858-2.824-5.539c1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198c0 0-.302.775-3.572 1.391c-3.688.694-8.239.613-10.937.168c0 0 .553.457 3.393.639"
            />
          </svg>
        ),
      },
      {
        title: "Go",
        href: "/docs/supported-sdks/go",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.023-.035-.059l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514c-.176.046-.187.058-.34-.117c-.174-.199-.303-.327-.548-.444c-.737-.362-1.45-.257-2.115.175c-.795.514-1.204 1.274-1.192 2.22c.011.935.654 1.706 1.577 1.835c.795.105 1.46-.175 1.987-.77c.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35c.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986c-1.145.152-2.209-.07-3.143-.77c-.865-.655-1.356-1.52-1.484-2.595c-.152-1.274.222-2.419.993-3.424c.83-1.086 1.928-1.776 3.272-2.02c1.098-.2 2.15-.07 3.096.571c.62.41 1.063.97 1.356 1.648c.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 0 1-1.262-2.255c-.21-1.32.152-2.489.947-3.529c.853-1.122 1.881-1.706 3.272-1.95c1.192-.21 2.314-.095 3.33.595c.923.63 1.496 1.484 1.648 2.605c.198 1.578-.257 2.863-1.344 3.962c-.771.783-1.718 1.273-2.805 1.495c-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387c-.21-1.157-1.274-1.81-2.384-1.554c-1.087.245-1.788.935-2.045 2.033c-.21.912.234 1.835 1.075 2.21c.643.28 1.285.244 1.905-.07c.923-.48 1.425-1.228 1.484-2.233z"
            />
          </svg>
        ),
      },
      {
        title: "Ruby",
        href: "/docs/supported-sdks/ruby",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h-.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zm0 0"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Features",
    Icon: () => <LayoutListIcon className="size-4" />,
    list: [
      {
        title: "Overview",
        href: "/docs/features/overview",
        icon: Icons.book,
      },
      {
        title: "Reasoning",
        href: "/docs/features/sutra-reasoning",
        icon: Icons.book,
      },
      {
        title: "Streaming",
        href: "/docs/features/sutra-streaming",
        icon: Icons.book,
      },
      {
        title: "Multilingual",
        href: "/docs/features/sutra-multilingual",
        icon: Icons.book,
      },
      {
        title: "Upcoming Features",
        href: "/docs/features/upcoming-features",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Multilingual",
    Icon: () => <LanguagesIcon className="size-4" />,
    list: [
      {
        group: true,
        title: "Indian Languages",
        href: "/docs/multilingual/indian-languages",
        icon: Icons.book,
      },
      {
        title: "Hindi",
        href: "/docs/multilingual/indian-languages/hindi",
        icon: Icons.book,
      },
      {
        title: "Gujarati",
        href: "/docs/multilingual/indian-languages/gujrati",
        icon: Icons.book,
      },
      {
        title: "Marathi",
        href: "/docs/multilingual/indian-languages/marathi",
        icon: Icons.book,
      },
      {
        title: "Tamil",
        href: "/docs/multilingual/indian-languages/tamil",
        icon: Icons.book,
      },
      {
        title: "Telugu",
        href: "/docs/multilingual/indian-languages/telugu",
        icon: Icons.book,
      },
      {
        group: true,
        title: "Foreign Languages",
        href: "/docs/multilingual/foreign-languages",
        icon: Icons.book,
      },
      {
        title: "English",
        href: "/docs/multilingual/foreign-languages/english",
        icon: Icons.book,
      },
      {
        title: "French",
        href: "/docs/multilingual/foreign-languages/french",
        icon: Icons.book,
      },
      {
        title: "Korean",
        href: "/docs/multilingual/foreign-languages/korean",
        icon: Icons.book,
      },
      {
        title: "Japanese",
        href: "/docs/multilingual/foreign-languages/japanese",
        icon: Icons.book,
      },
      {
        title: "German",
        href: "/docs/multilingual/foreign-languages/german",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Popular Use Cases",
    Icon: () => <BookTextIcon className="size-4" />,
    list: [
      {
        title: "SUTRA + AGNO Integration",
        href: "/docs/popular-usecases/agno",
        icon: Icons.book,
      },
      {
        title: "Multi-Agent Systems with CrewAI",
        href: "/docs/popular-usecases/crewai",
        icon: Icons.book,
      },
      {
        title: "Function Calling with LangChain",
        href: "/docs/popular-usecases/langchain-toolcalling",
        icon: Icons.book,
      },
      {
        title: "RAG: Chat with PDF",
        href: "/docs/popular-usecases/chat-with-pdf",
        icon: Icons.book,
      },
      {
        title: "FastAPI",
        href: "/docs/popular-usecases/fastapi",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Starter Apps",
    Icon: () => <BoxIcon className="size-4" />,
    list: [
      {
        title: "Overview",
        href: "/docs/starter-apps/starter-apps",
        icon: Icons.book,
      },
      {
        title: "Multilingual Chat App",
        href: "/docs/starter-apps/multilingual-chat",
        icon: Icons.book,
      },
      {
        title: "Chat with PDF App",
        href: "/docs/starter-apps/chat-with-pdf",
        icon: Icons.book,
      },
      {
        title: "MCQ Generator App",
        href: "/docs/starter-apps/mcq-generator",
        icon: Icons.book,
      },
      {
        title: "Multilingual Travel Agent",
        href: "/docs/starter-apps/ai-travel-planner",
        icon: Icons.book,
      },
    ],
  },
];

export const cookbooks: Content[] = [
  {
    title: "Overview",
    href: "/docs/cookbooks",
    Icon: Icons.book,
    isPage: true,
  },
  {
    title: "Get Started",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/get-started",
        icon: Icons.book,
      },
      {
        title: "Starter Guide",
        href: "/docs/cookbooks/get-started/sutra-starter-guide",
        icon: Icons.book,
      },
      {
        title: "Basics of Sutra Streaming",
        href: "/docs/cookbooks/get-started/basics-of-sutra-streaming",
        icon: Icons.book,
      },
      {
        title: "Exploring Sutra Models",
        href: "/docs/cookbooks/get-started/exploring-sutra-models",
        icon: Icons.book,
      },
      {
        title: "Structured Output with Sutra",
        href: "/docs/cookbooks/get-started/structured-output-with-sutra",
        icon: Icons.book,
      },
      {
        title: "Reasoning Quickstart",
        href: "/docs/cookbooks/get-started/sutra-reasoning-quickstart",
        icon: Icons.book,
      },
      {
        title: "Prompting Guide",
        href: "/docs/cookbooks/get-started/sutra-prompting-guide",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Agents",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/agents",
        icon: Icons.book,
      },
      {
        title: "SUTRA with AGNO",
        href: "/docs/cookbooks/agents/agno",
        icon: Icons.book,
      },
      {
        title: "SUTRA with PydanticAI",
        href: "/docs/cookbooks/agents/pydanticai",
        icon: Icons.book,
      },
      {
        title: "SUTRA with OpenAI",
        href: "/docs/cookbooks/agents/openai_agent_sdk",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Integrations",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/integrations",
        icon: Icons.book,
      },
      {
        title: "SUTRA with Portkey",
        href: "/docs/cookbooks/integrations/sutra-with-portkey",
        icon: Icons.book,
      },
      {
        title: "SUTRA with LlamaIndex",
        href: "/docs/cookbooks/integrations/sutra-with-llamaindex",
        icon: Icons.book,
      },
      {
        title: "SUTRA with LangChain",
        href: "/docs/cookbooks/integrations/sutra-with-langchain",
        icon: Icons.book,
      },
      {
        title: "SUTRA with Agno",
        href: "/docs/cookbooks/integrations/sutra-with-agno",
        icon: Icons.book,
      },
      {
        title: "SUTRA with PydanticAI",
        href: "/docs/cookbooks/integrations/sutra-with-litellm",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Examples",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/examples",
        icon: Icons.book,
      },
      {
        title: "SUTRA with OpenAI",
        href: "/docs/cookbooks/examples/sutra-vs-openai-models",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "RAG",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/rag",
        icon: Icons.book,
      },
      {
        title: "Chat with PDF using Pinecone",
        href: "/docs/cookbooks/rag/chat-with-pdf-using-pinecone",
        icon: Icons.book,
      },
      {
        title: "Multilingual Chat with PDF",
        href: "/docs/cookbooks/rag/multilingual-chat-with-pdf",
        icon: Icons.book,
      },
    ],
  },
  {
    title: "Multilingual",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    list: [
      {
        title: "Overview",
        href: "/docs/cookbooks/multilingual",
        icon: Icons.book,
      },
      {
        group: true,
        title: "Indian Languages",
        href: "/docs/cookbooks/multilingual/indian-languages",
        icon: Icons.book,
      },
      {
        title: "Gujarati with SUTRA",
        href: "/docs/cookbooks/multilingual/indian-languages/gujarati-with-sutra",
        icon: Icons.book,
      },
      {
        title: "Telugu with SUTRA",
        href: "/docs/cookbooks/multilingual/indian-languages/telugu-with-sutra",
        icon: Icons.book,
      },
      {
        title: "Hindi with SUTRA",
        href: "/docs/cookbooks/multilingual/indian-languages/hindi-with-sutra",
        icon: Icons.book,
      },
      {
        title: "Marathi with SUTRA",
        href: "/docs/cookbooks/multilingual/indian-languages/marathi-with-sutra",
        icon: Icons.book,
      },
      {
        group: true,
        title: "Foreign Languages",
        href: "/docs/multilingual/foreign-languages",
        icon: Icons.book,
      },
      {
        title: "English with SUTRA",
        href: "/docs/cookbooks/multilingual/foreign-languages/english-with-sutra",
        icon: Icons.book,
      },
      {
        title: "Korean with SUTRA",
        href: "/docs/cookbooks/multilingual/foreign-languages/korean-with-sutra",
        icon: Icons.book,
      },
      {
        title: "French with SUTRA",
        href: "/docs/cookbooks/multilingual/foreign-languages/french-with-sutra",
        icon: Icons.book,
      },
    ],
  },
];
