"use client";

import type { ShiftRole } from "@/types/domain";
import { SHIFT_ROLE_CONFIG } from "@/lib/constants/rostering";

export function ShiftRoleBadge({ role }: { role: ShiftRole }) {
  const config = SHIFT_ROLE_CONFIG[role];
  const Icon = config.icon;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs font-medium"
      style={{ color: config.cssVar }}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {config.shortLabel}
    </span>
  );
}
