// src/lib/constants/communications.ts
//
// ============================================================
// WattleOS V2 - Communications Display Constants
// ============================================================
// Display config for thread types, announcement priorities,
// and other comms-specific UI constants.
//
// WHY separate file: Comms constants are only used by Module 12
// components. Keeping them out of the main constants barrel
// avoids bloating the shared bundle.
// ============================================================

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  Backpack,
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  Drama,
  GraduationCap,
  Home,
  Info,
  Megaphone,
  MessageSquare,
  PartyPopper,
  Siren,
  TreePalm,
  Users,
} from "lucide-react";

// ============================================================
// Message Thread Types
// ============================================================

/** Union type for thread categories */
export type MessageThreadType = "class_broadcast" | "direct";

export const THREAD_TYPE_CONFIG: Record<
  MessageThreadType,
  { label: string; color: string; bgColor: string; icon: LucideIcon }
> = {
  class_broadcast: {
    label: "Class",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    icon: BookOpen,
  },
  direct: {
    label: "Direct",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    icon: MessageSquare,
  },
};

// ============================================================
// Announcement Priorities
// ============================================================

export type AnnouncementPriority = "low" | "normal" | "high" | "urgent";

export const ANNOUNCEMENT_PRIORITY_CONFIG: Record<
  AnnouncementPriority,
  { label: string; color: string; bgColor: string; icon: LucideIcon }
> = {
  low: {
    label: "Low",
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    icon: Info,
  },
  normal: {
    label: "Normal",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    icon: Megaphone,
  },
  high: {
    label: "High",
    color: "text-orange-700",
    bgColor: "bg-orange-100",
    icon: AlertTriangle,
  },
  urgent: {
    label: "Urgent",
    color: "text-red-700",
    bgColor: "bg-red-100",
    icon: Siren,
  },
};

// ============================================================
// Event Type Display
// ============================================================

export const EVENT_TYPE_ICONS: Record<string, LucideIcon> = {
  general: ClipboardList,
  excursion: Bus,
  parent_meeting: Users,
  performance: Drama,
  sports_day: Activity,
  fundraiser: DollarSign,
  professional_development: GraduationCap,
  public_holiday: TreePalm,
  pupil_free_day: Home,
  term_start: Backpack,
  term_end: PartyPopper,
};