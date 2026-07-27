import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <h1 className="font-display text-4xl text-ink">nothing here</h1>
      <Link
        href="/"
        className="mt-6 inline-block text-[15px] text-ink underline decoration-rule underline-offset-[5px] transition-colors hover:decoration-ink"
      >
        Back home
      </Link>
    </main>
  );
}
