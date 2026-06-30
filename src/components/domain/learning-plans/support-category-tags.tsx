"use client";

import type { IlpSupportCategory } from "@/types/domain";
import { SUPPORT_CATEGORY_CONFIG } from "@/lib/constants/ilp";

interface SupportCategoryTagsProps {
  categories: IlpSupportCategory[];
}

export function SupportCategoryTags({ categories }: SupportCategoryTagsProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {categories.map((cat) => {
        const cfg = SUPPORT_CATEGORY_CONFIG[cat];
        const Icon = cfg.icon;
        return (
          <span
            key={cat}
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              background: "var(--muted)",
              color: "var(--muted-foreground)",
            }}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {cfg.label}
          </span>
        );
      })}
    </div>
  );
}
