import Image from "next/image";
import { type SVGProps } from "react";

export default function LlamaIndex(props: SVGProps<SVGSVGElement>) {
  return (
    <Image
      src="/logos/llamaindex.png"
      alt="Llamaindex"
      width={24}
      height={24}
    />
  );
}
