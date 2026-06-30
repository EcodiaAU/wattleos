"use client";

// src/components/domain/fee-notice-comms/fee-notice-trigger-badge.tsx

import type { LucideIcon } from "lucide-react";
import { Send, AlertTriangle, CheckCircle2, XCircle, Bell, Siren } from "lucide-react";
import type { FeeNoticeTrigger } from "@/types/domain";

const TRIGGER_CONFIG: Record<FeeNoticeTrigger, { label: string; icon: LucideIcon }> =
  {
    invoice_sent: { label: "Invoice Sent", icon: Send },
    invoice_overdue: { label: "Overdue", icon: AlertTriangle },
    payment_received: { label: "Payment Received", icon: CheckCircle2 },
    payment_failed: { label: "Payment Failed", icon: XCircle },
    reminder_1: { label: "Reminder 1", icon: Bell },
    reminder_2: { label: "Reminder 2", icon: Bell },
    reminder_3: { label: "Final Reminder", icon: Siren },
  };

interface Props {
  trigger: FeeNoticeTrigger;
}

export function FeeNoticeTriggerBadge({ trigger }: Props) {
  const cfg = TRIGGER_CONFIG[trigger];
  const Icon = cfg.icon;
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium">
      <Icon className="h-3.5 w-3.5" aria-hidden />
      <span style={{ color: "var(--foreground)" }}>{cfg.label}</span>
    </span>
  );
}
