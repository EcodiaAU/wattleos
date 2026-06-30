// src/lib/constants/daily-care.ts
//
// ============================================================
// WattleOS V2 - Daily Care Log Constants (Module O, Reg 162)
// ============================================================
// Configuration records for care entry types, nappy/meal/bottle
// subtypes, sleep positions, wellbeing moods, and status labels.
// These drive UI rendering (badges, forms, select options) and
// validation logic.
// ============================================================

import type {
  CareEntryType,
  NappyType,
  MealType,
  FoodConsumed,
  BottleType,
  SleepPosition,
  SleepManner,
  WellbeingMood,
  DailyCareLogStatus,
} from "@/types/domain";
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Utensils,
  Milk,
  Moon,
  Sun,
  Heart,
  CheckCircle2,
  ThumbsUp,
  Hand,
  ThumbsDown,
  XCircle,
  Smile,
  Meh,
  Frown,
  Thermometer,
} from "lucide-react";

// ── Status Config ────────────────────────────────────────────

export interface CareStatusConfig {
  label: string;
  cssVar: string;
  cssVarFg: string;
  cssVarBg: string;
}

export const DAILY_CARE_LOG_STATUS_CONFIG: Record<
  DailyCareLogStatus,
  CareStatusConfig
> = {
  in_progress: {
    label: "In Progress",
    cssVar: "var(--care-in-progress)",
    cssVarFg: "var(--care-in-progress-fg)",
    cssVarBg: "var(--care-in-progress-bg)",
  },
  shared: {
    label: "Shared",
    cssVar: "var(--care-shared)",
    cssVarFg: "var(--care-shared-fg)",
    cssVarBg: "var(--care-shared-bg)",
  },
};

// ── Entry Type Config ────────────────────────────────────────

export interface CareEntryTypeConfig {
  label: string;
  icon: LucideIcon;
  cssVar: string;
  cssVarFg: string;
  cssVarBg: string;
}

export const CARE_ENTRY_TYPE_CONFIG: Record<
  CareEntryType,
  CareEntryTypeConfig
> = {
  nappy_change: {
    label: "Nappy Change",
    icon: Baby,
    cssVar: "var(--care-nappy)",
    cssVarFg: "var(--care-nappy-fg)",
    cssVarBg: "var(--care-nappy-bg)",
  },
  meal: {
    label: "Meal",
    icon: Utensils,
    cssVar: "var(--care-meal)",
    cssVarFg: "var(--care-meal-fg)",
    cssVarBg: "var(--care-meal-bg)",
  },
  bottle: {
    label: "Bottle",
    icon: Milk,
    cssVar: "var(--care-bottle)",
    cssVarFg: "var(--care-bottle-fg)",
    cssVarBg: "var(--care-bottle-bg)",
  },
  sleep_start: {
    label: "Sleep",
    icon: Moon,
    cssVar: "var(--care-sleep)",
    cssVarFg: "var(--care-sleep-fg)",
    cssVarBg: "var(--care-sleep-bg)",
  },
  sleep_end: {
    label: "Woke Up",
    icon: Sun,
    cssVar: "var(--care-sleep)",
    cssVarFg: "var(--care-sleep-fg)",
    cssVarBg: "var(--care-sleep-bg)",
  },
  sunscreen: {
    label: "Sunscreen",
    icon: Sun,
    cssVar: "var(--care-sunscreen)",
    cssVarFg: "var(--care-sunscreen-fg)",
    cssVarBg: "var(--care-sunscreen-bg)",
  },
  wellbeing_note: {
    label: "Wellbeing",
    icon: Heart,
    cssVar: "var(--care-wellbeing)",
    cssVarFg: "var(--care-wellbeing-fg)",
    cssVarBg: "var(--care-wellbeing-bg)",
  },
};

// ── Nappy Type Config ────────────────────────────────────────

export const NAPPY_TYPE_CONFIG: Record<NappyType, { label: string }> = {
  wet: { label: "Wet" },
  soiled: { label: "Soiled" },
  dry: { label: "Dry" },
};

// ── Meal Type Config ─────────────────────────────────────────

export const MEAL_TYPE_CONFIG: Record<MealType, { label: string }> = {
  breakfast: { label: "Breakfast" },
  morning_tea: { label: "Morning Tea" },
  lunch: { label: "Lunch" },
  afternoon_tea: { label: "Afternoon Tea" },
  late_snack: { label: "Late Snack" },
};

// ── Food Consumed Config ─────────────────────────────────────

export const FOOD_CONSUMED_CONFIG: Record<
  FoodConsumed,
  { label: string; icon: LucideIcon }
> = {
  all: { label: "All", icon: CheckCircle2 },
  most: { label: "Most", icon: ThumbsUp },
  some: { label: "Some", icon: Hand },
  little: { label: "Little", icon: ThumbsDown },
  none: { label: "None", icon: XCircle },
};

// ── Bottle Type Config ───────────────────────────────────────

export const BOTTLE_TYPE_CONFIG: Record<BottleType, { label: string }> = {
  breast_milk: { label: "Breast Milk" },
  formula: { label: "Formula" },
  water: { label: "Water" },
  other: { label: "Other" },
};

// ── Sleep Position Config ────────────────────────────────────

export const SLEEP_POSITION_CONFIG: Record<
  SleepPosition,
  { label: string; safe: boolean }
> = {
  back: { label: "Back", safe: true },
  side: { label: "Side", safe: false },
  front: { label: "Front", safe: false },
};

// ── Sleep Manner Config ──────────────────────────────────────

export const SLEEP_MANNER_CONFIG: Record<SleepManner, { label: string }> = {
  self_settled: { label: "Self-settled" },
  patted: { label: "Patted" },
  rocked: { label: "Rocked" },
  held: { label: "Held" },
  fed_to_sleep: { label: "Fed to Sleep" },
};

// ── Wellbeing Mood Config ────────────────────────────────────

export const WELLBEING_MOOD_CONFIG: Record<
  WellbeingMood,
  { label: string; icon: LucideIcon }
> = {
  happy: { label: "Happy", icon: Smile },
  settled: { label: "Settled", icon: Meh },
  unsettled: { label: "Unsettled", icon: Frown },
  tired: { label: "Tired", icon: Moon },
  unwell: { label: "Unwell", icon: Thermometer },
};

// ── Timing Constants ─────────────────────────────────────────

/** Sunscreen reapplication interval in minutes */
export const SUNSCREEN_REAPPLY_MINUTES = 120;

/** Sleep check interval for infants under 12 months (minutes) */
export const SLEEP_CHECK_INTERVAL_INFANT_MINUTES = 10;

/** Sleep check interval for toddlers 12 months+ (minutes) */
export const SLEEP_CHECK_INTERVAL_TODDLER_MINUTES = 15;

/** Default preschool age cutoff in years (Reg 162 applies under this) */
export const PRESCHOOL_AGE_CUTOFF_YEARS = 3;
