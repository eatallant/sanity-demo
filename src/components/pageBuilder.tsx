import type { PAGE_QUERYResult, PageBuilder } from "@/sanity/types";
import { TextWithImage } from "./blocks/text-with-image";
import { Hero } from "./blocks/hero";

interface PageBuilderProps {
  content: NonNullable<PAGE_QUERYResult>["content"];
}

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "textWithImage":
            return <TextWithImage key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div>Block not found: {block}</div>;
        }
      })}
    </main>
  );
}