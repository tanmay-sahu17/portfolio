import clsx from "clsx";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function UnderlineLink({
  href,
  children,
  className,
  external,
  active = false,
  onClick,
}: UnderlineLinkProps) {
  const classes = clsx(
    "group relative inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase transition-colors duration-300",
    active ? "text-zinc-50" : "text-zinc-300 hover:text-zinc-100",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <span className="relative inline-block h-px w-8 overflow-hidden bg-zinc-700">
        <span
          className={clsx(
            "absolute inset-y-0 left-0 w-full origin-left bg-zinc-100 transition-transform duration-500 ease-out",
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
      </span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </Link>
  );
}
