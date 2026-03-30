type CiCdPipelineIconProps = {
  className?: string;
};

export function CiCdPipelineIcon({ className }: CiCdPipelineIconProps) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 8.5h4v7H5v-7zm5-2h4v11h-4v-11zm5 3h4v5h-4v-5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9 12h1M14 10.5h1M14 13.5h1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
