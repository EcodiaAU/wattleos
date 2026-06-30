"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { Home, Trees, MapPin, Check } from "lucide-react";
import { useHaptics } from "@/lib/hooks/use-haptics";
import { deleteZone } from "@/lib/actions/emergency-coordination";
import type { EmergencyZoneWithWarden } from "@/types/domain";

const ZONE_TYPE_ICON: Record<string, LucideIcon> = {
  indoor: Home,
  outdoor: Trees,
  assembly_point: MapPin,
};

export function ZoneListClient({
  zones,
  canManage,
}: {
  zones: EmergencyZoneWithWarden[];
  canManage: boolean;
}) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const haptics = useHaptics();
  const router = useRouter();

  const handleDelete = useCallback(
    async (zoneId: string) => {
      haptics.impact("heavy");
      setDeletingId(zoneId);
      await deleteZone(zoneId);
      setDeletingId(null);
      setConfirmDeleteId(null);
      router.refresh();
    },
    [haptics, router],
  );

  if (zones.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <MapPin
          className="h-10 w-10 mb-3"
          style={{ color: "var(--empty-state-icon)" }}
          aria-hidden
        />
        <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
          No zones configured
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
          Set up zones and assembly points before your first emergency.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {zones.map((zone) => {
        const ZoneIcon = ZONE_TYPE_ICON[zone.zone_type] ?? MapPin;
        return (
        <div
          key={zone.id}
          className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-border p-3"
          style={{ backgroundColor: "var(--card)" }}
        >
          <ZoneIcon className="h-5 w-5 shrink-0" aria-hidden />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate" style={{ color: "var(--foreground)" }}>
              {zone.name}
            </p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              {zone.zone_type === "assembly_point"
                ? "Assembly Point"
                : zone.zone_type === "indoor"
                  ? "Indoor"
                  : "Outdoor"}
              {zone.capacity && ` · Cap: ${zone.capacity}`}
              {zone.primary_warden &&
                ` · Warden: ${zone.primary_warden.first_name} ${zone.primary_warden.last_name}`}
            </p>
          </div>
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
              zone.is_active ? "" : "opacity-40"
            }`}
            style={{
              backgroundColor: zone.is_active
                ? "var(--zone-clear)"
                : "var(--muted)",
              color: zone.is_active ? "var(--zone-clear-fg)" : "var(--muted-foreground)",
            }}
          >
            {zone.is_active ? <Check className="h-3.5 w-3.5" aria-hidden /> : "-"}
          </div>
          {canManage && (
            <div className="flex gap-1">
              {confirmDeleteId === zone.id ? (
                <>
                  <button
                    onClick={() => handleDelete(zone.id)}
                    disabled={deletingId === zone.id}
                    className="active-push rounded-[var(--radius)] px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "var(--destructive)",
                      color: "var(--destructive-foreground)",
                    }}
                  >
                    {deletingId === zone.id ? "..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setConfirmDeleteId(null)}
                    className="active-push rounded-[var(--radius)] px-2 py-1 text-xs border border-border"
                    style={{ color: "var(--foreground)" }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    haptics.impact("light");
                    setConfirmDeleteId(zone.id);
                  }}
                  className="active-push rounded-[var(--radius)] px-2 py-1 text-xs border border-border"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  ×
                </button>
              )}
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
}
