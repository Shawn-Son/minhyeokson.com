import Link from "next/link";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The link may be out of date. The projects index is probably what you
        were looking for.
      </p>
      <div className="mt-8 flex gap-6">
        <Link
          href="/"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-text transition-opacity hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="self-center font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          Projects
        </Link>
      </div>
    </Container>
  );
}
