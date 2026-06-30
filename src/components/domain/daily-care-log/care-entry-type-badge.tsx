"use client";

import type { CareEntryType } from "@/types/domain";
import { CARE_ENTRY_TYPE_CONFIG } from "@/lib/constants/daily-care";

interface CareEntryTypeBadgeProps {
  entryType: CareEntryType;
  size?: "sm" | "md";
}

export function CareEntryTypeBadge({
  entryType,
  size = "sm",
}: CareEntryTypeBadgeProps) {
  const cfg = CARE_ENTRY_TYPE_CONFIG[entryType];
  const Icon = cfg.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
      style={{
        background: cfg.cssVar,
        color: cfg.cssVarFg,
      }}
    >
      <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden />
      <span>{cfg.label}</span>
    </span>
  );
}
