import type { ReactNode } from "react";

export type BrandIconName = "factory" | "reform" | "maintenance" | "parts" | "municipality" | "sanitation" | "industry" | "mining" | "construction" | "rental" | "tank" | "pump" | "motor" | "layout" | "controls" | "application";

const paths: Record<BrandIconName, ReactNode> = {
  factory: <><path d="M3 20V10l6 3V9l6 4V6h4v14z"/><path d="M16 6V3h3v3M6 17h2m3 0h2m3 0h2"/></>,
  reform: <><path d="M4 20l5-5m-2-3a5 5 0 0 0 7-7l-3 3-3-3 3-3a5 5 0 0 0-7 7z"/><path d="M14 14l6 6"/></>,
  maintenance: <><path d="M14 6a5 5 0 0 0-6 6l-5 5a2 2 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3z"/><path d="M16 15l4 4"/></>,
  parts: <><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/><path d="M9 15a3 3 0 0 0 3 3"/></>,
  municipality: <><path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6"/><path d="M9 10h.01M15 10h.01"/></>,
  sanitation: <><path d="M4 14h16l-2-5H7zM6 14v4m12-4v4M8 18h8"/><path d="M11 4c0 2-2 2-2 4m6-5c0 2-2 2-2 4"/></>,
  industry: <><path d="M3 20V10l6 3V9l6 4V6h4v14z"/><path d="M6 17h2m3 0h2m3 0h2"/></>,
  mining: <><path d="M4 20 19 5m-3-2 5 5M3 8l6 2m-5-5 2 6"/><path d="M14 14l6 6"/></>,
  construction: <><path d="M4 20h16M7 20V7h2v13M6 7h10M10 10h9m-3-3v9m0 0 3 4m-3-4-3 4"/><path d="M16 5h3"/></>,
  rental: <><path d="M3 8h11v9H3zM14 11h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
  tank: <><path d="M5 7h14v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM5 11h14M8 4h8v3M9 15h.01M15 15h.01"/><path d="M8 20v1m8-1v1"/></>,
  pump: <><circle cx="12" cy="12" r="5"/><path d="M12 7V3m0 18v-4M7 12H3m18 0h-4M8.5 8.5l-3-3m13 13-3-3m0-7 3-3m-13 13 3-3"/><path d="M12 10v4l2 1"/></>,
  motor: <><path d="M4 9h12a3 3 0 0 1 3 3v4H4zM7 9V6h7v3M19 11h2v5h-2M8 16v3m8-3v3M7 12h2m3 0h2"/></>,
  layout: <><path d="M4 5h16v14H4zM4 10h7v9m0-5h9M15 10V5"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="15" r="1"/></>,
  controls: <><path d="M5 4v16m7-16v16m7-16v16M3 8h4m3 7h4m3-6h4"/><circle cx="5" cy="8" r="1.5"/><circle cx="12" cy="15" r="1.5"/><circle cx="19" cy="9" r="1.5"/></>,
  application: <><path d="M4 18h16M6 18V9l6-5 6 5v9M9 18v-5h6v5"/><path d="m3 7 2-2m16 2-2-2"/></>,
};

export function BrandIcon({name,size=26}:{name:BrandIconName;size?:number}) {
  return <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
