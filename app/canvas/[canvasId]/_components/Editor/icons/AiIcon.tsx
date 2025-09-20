import { ComponentProps } from "react";

export function AiIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Brain-like outline */}
      <path d="M8 4C6 5 5 7 5 9v6c0 2 1 4 3 5" />
      <path d="M16 4c2 1 3 3 3 5v6c0 2-1 4-3 5" />

      {/* Circuit nodes */}
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="9" cy="15" r="0.5" fill="currentColor" />
      <circle cx="15" cy="9" r="0.5" fill="currentColor" />
      <circle cx="15" cy="15" r="0.5" fill="currentColor" />

      {/* Spark/star for "intelligence" */}
      <path d="M12 2v2M12 20v2M20 12h2M2 12h2" />
    </svg>
  );
}
