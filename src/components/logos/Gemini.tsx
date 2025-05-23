import { type SVGProps } from "react";
import { useTheme } from "next-themes";

export default function Gemini(props: SVGProps<SVGSVGElement>) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <svg
      height="1em"
      style={{
        flex: "none",
        lineHeight: 1,
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      {...props}
    >
      <title>{"Gemini"}</title>
      {isDark ? (
        <>
          <defs>
            <linearGradient
              id="lobe-icons-gemini-fill-dark"
              x1="0%"
              x2="68.73%"
              y1="100%"
              y2="30.395%"
            >
              <stop offset="0%" stopColor="#1C7DFF" />
              <stop offset="52.021%" stopColor="#1C69FF" />
              <stop offset="100%" stopColor="#F0DCD6" />
            </linearGradient>
          </defs>
          <path
            d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
            fill="url(#lobe-icons-gemini-fill-dark)"
            fillRule="nonzero"
          />
        </>
      ) : (
        <>
          <defs>
            <linearGradient
              id="lobe-icons-gemini-fill-light"
              x1="0%"
              x2="68.73%"
              y1="100%"
              y2="30.395%"
            >
              <stop offset="0%" stopColor="#0F62FE" />
              <stop offset="52.021%" stopColor="#1456DC" />
              <stop offset="100%" stopColor="#E0CCC6" />
            </linearGradient>
          </defs>
          <path
            d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
            fill="url(#lobe-icons-gemini-fill-light)"
            fillRule="nonzero"
          />
        </>
      )}
    </svg>
  );
}
