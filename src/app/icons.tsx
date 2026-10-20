type IconName = "mail" | "arrow" | "file" | "path" | "square";

const paths: Record<IconName, React.ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 7 9-7" />
    </>
  ),
  arrow: (
    <>
      <path d="M6 18L18 6" />
      <path d="M9 6h9v9" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3z" />
      <path d="M14 3v4h4" />
    </>
  ),
  path: (
    <>
      <path d="M4 16h6l4-8h6" />
      <path d="M16 6l4 2-4 2" />
    </>
  ),
  square: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </>
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
