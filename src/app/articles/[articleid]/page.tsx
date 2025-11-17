"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleid } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article #{articleid}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div className="language-options">
        <Link href={`/articles/iphone-blast?lang=en`}>English</Link> |
        <Link href={`/articles/iphone-blast?lang=es`}>Español</Link> |
        <Link href={`/articles/iphone-blast?lang=fr`}>Français</Link>
      </div>
    </div>
  );
}
