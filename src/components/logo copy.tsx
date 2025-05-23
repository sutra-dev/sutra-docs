import Image from "next/image";
import { SVGProps } from "react";
export const Logo = (props: SVGProps<any>) => {
  return (
    <Image
      src="/sutra.png"
      alt="SUTRA Logo"
      width={100}
      height={100}
      className="size-8 rounded-xl"
    />
  );
};
