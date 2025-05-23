import { Icons } from "./icons";
type TechStackIconType = {
  [key: string]: {
    name: string;
    icon: any;
  };
};
export const techStackIcons: TechStackIconType = {
  openai: {
    name: "OpenAI",
    icon: <Icons.openai className="w-10 h-10" />,
  },
  langchain: {
    name: "Langchain",
    icon: <Icons.langchain className="w-10 h-10" />,
  },
  aiSDK: {
    name: "AI SDK",
    icon: <Icons.aiSDK className="w-10 h-10" />,
  },
  nextJs: {
    name: "Next.js",
    icon: <Icons.nextJS className="w-10 h-10" />,
  },
  svelteKit: {
    name: "SvelteKit",
    icon: <Icons.svelteKit className="w-10 h-10" />,
  },
  solidStart: {
    name: "SolidStart",
    icon: <Icons.solidStart className="w-10 h-10" />,
  },
  react: {
    name: "React",
    icon: <Icons.react className="w-10 h-10" />,
  },
};
