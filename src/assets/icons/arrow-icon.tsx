type Props = {
  className?: string;
};

export default function ArrowIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 134 82" fill="none" className={className}>
      <path
        d="M1 11.9239C159.5 -29.0761 148.833 57.4239 105.5 72.9239M105.5 72.9239L112.5 47.5M105.5 72.9239L128 81.5"
        stroke="currentColor"
      />
    </svg>
  );
}
