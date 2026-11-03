/* @ds-bundle: {"format":4,"namespace":"PagerDutyDesignSystem_aefad5","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ICONS","sourcePath":"components/core/icon-data.js"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"94e2fd0a9df0","components/core/Badge.jsx":"b07f54f8bfa0","components/core/Button.jsx":"372117f35adc","components/core/Card.jsx":"49903db2f162","components/core/Icon.jsx":"a1a4e5167185","components/core/IconButton.jsx":"85da6192e6ef","components/core/StatusBadge.jsx":"c0517ec26cfe","components/core/Tag.jsx":"1d9f6aae42b6","components/core/icon-data.js":"e0958f3d1d2e","components/feedback/Alert.jsx":"53361c1ea704","components/feedback/ProgressBar.jsx":"c0dc22e8bf9c","components/feedback/Spinner.jsx":"b0e0ab56f797","components/feedback/Toast.jsx":"8953716d4b71","components/feedback/Tooltip.jsx":"bacee058f748","components/forms/Checkbox.jsx":"5ef903642666","components/forms/Input.jsx":"84197b89081d","components/forms/Radio.jsx":"1da66a90442f","components/forms/Select.jsx":"c78e81cae4f8","components/forms/Switch.jsx":"645aa51a8b3e","components/forms/Textarea.jsx":"48f5c3db35ff","components/navigation/Tabs.jsx":"020eda75c77c","components/overlay/Dialog.jsx":"037864fa1acc","ui_kits/operations-cloud/IncidentDetail.jsx":"9ccead40fea0","ui_kits/operations-cloud/IncidentsScreen.jsx":"f6d82d1237d7","ui_kits/operations-cloud/Sidebar.jsx":"3930ed150389","ui_kits/operations-cloud/TopBar.jsx":"0c8c6f3bcbb4","ui_kits/operations-cloud/app.jsx":"71df73ed392a","ui_kits/operations-cloud/data.js":"198411a356e6","ui_kits/operations-cloud/doc-page.js":"f106e1b77ea0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PagerDutyDesignSystem_aefad5 = window.PagerDutyDesignSystem_aefad5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};
// Deterministic brand-palette background from a name.
const PALETTE = ["var(--pd-green)", "var(--pd-ultrateal)", "var(--pd-cosmic-ocean)", "var(--pd-dark-green)", "var(--orange-500)", "var(--blue-500)"];
function hashIndex(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return h % PALETTE.length;
}
function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
}

/** Avatar — user/team monogram or image, with optional on-call status ring. */
function Avatar({
  name = "",
  src,
  size = "md",
  status,
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const ring = status === "oncall" ? "var(--pd-green)" : status === "off" ? "var(--gray-300)" : null;
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto",
      width: px,
      height: px,
      borderRadius: "var(--radius-circle)",
      boxShadow: ring ? `0 0 0 2px var(--surface-card), 0 0 0 4px ${ring}` : undefined,
      ...style
    },
    ...rest
  }, src ? React.createElement("img", {
    src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "inherit"
    }
  }) : React.createElement("span", {
    "aria-label": name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
      background: PALETTE[hashIndex(name)],
      color: "#fff",
      font: `var(--fw-bold) ${Math.round(px * 0.4)}px/1 var(--font-sans)`,
      userSelect: "none"
    }
  }, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--gray-100)",
    fg: "var(--gray-700)"
  },
  brand: {
    bg: "var(--surface-brand-subtle)",
    fg: "var(--pd-dark-green)"
  },
  success: {
    bg: "var(--status-resolved-bg)",
    fg: "var(--green-700)"
  },
  warning: {
    bg: "var(--status-acknowledged-bg)",
    fg: "var(--orange-700)"
  },
  danger: {
    bg: "var(--status-triggered-bg)",
    fg: "var(--red-700)"
  },
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--blue-700)"
  },
  jade: {
    bg: "var(--pd-electric-jade)",
    fg: "var(--green-900)"
  },
  aurum: {
    bg: "var(--pd-aurum)",
    fg: "var(--gray-900)"
  }
};

/** Badge — a small count/status pill. */
function Badge({
  children,
  tone = "neutral",
  size = "md",
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === "sm";
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: sm ? "1px 7px" : "2px 9px",
      font: `var(--fw-bold) ${sm ? "var(--fs-overline)" : "var(--fs-caption)"}/1.5 var(--font-sans)`,
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-pill)",
      letterSpacing: "var(--ls-snug)",
      whiteSpace: "nowrap",
      ...style
    },
    ...rest
  }, dot && React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Card — the base surface container. Optional header, padding, elevation. */
function Card({
  children,
  elevation = "sm",
  padding = "md",
  interactive = false,
  accent,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-6)",
    lg: "var(--space-8)"
  }[padding];
  const shadow = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  }[elevation];
  const [hover, setHover] = React.useState(false);
  return React.createElement("div", {
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderTop: accent ? `3px solid ${accent}` : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : shadow,
      padding: pad,
      transition: "box-shadow .15s ease, transform .15s ease",
      transform: interactive && hover ? "translateY(-1px)" : "none",
      cursor: interactive ? "pointer" : undefined,
      ...style
    },
    ...rest
  }, children);
}

/** CardHeader — title/subtitle/actions row for a Card. */
function CardHeader({
  title,
  subtitle,
  actions,
  style,
  ...rest
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-4)",
      ...style
    },
    ...rest
  }, React.createElement("div", null, title && React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-h4)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, subtitle)), actions && React.createElement("div", {
    style: {
      flex: "0 0 auto"
    }
  }, actions));
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/icon-data.js
try { (() => {
// Auto-generated from PagerDuty PDIcons SVGs. Inner markup per glyph (50x50 viewBox).
const ICONS = {
  "Alarm1": "<path d=\"M37,17c0-6.63-5.37-12-12-12s-12,5.37-12,12c0,14-6,18-6,18h36.01s-6-4-6-18\"></path> <path d=\"M28.46,43.01c-1.11,1.91-3.56,2.56-5.47,1.45-.6-.35-1.1-.85-1.45-1.45\"></path>",
  "Bell": "<path d=\"M5,40.56h40M25,16.11v-6.67M25,16.11h-4.44c-6.14,0-11.11,4.97-11.11,11.11v6.67h31.11v-6.67c0-6.14-4.97-11.11-11.11-11.11h-4.44ZM25,9.44h-4.44M25,9.44h4.44\"></path>",
  "Brain": "<path d=\"M16.97,31.82c-1.04,0-1.89-.85-1.89-1.89s.85-1.89,1.89-1.89,1.89.85,1.89,1.89-.85,1.89-1.89,1.89Z\"></path> <path d=\"M13.19,20.21c-1.04,0-1.89-.85-1.89-1.89s.85-1.89,1.89-1.89,1.89.85,1.89,1.89-.85,1.89-1.89,1.89Z\"></path> <path d=\"M34.91,35.92c-1.04,0-1.89-.85-1.89-1.89s.85-1.89,1.89-1.89,1.89.85,1.89,1.89-.85,1.89-1.89,1.89Z\"></path> <path d=\"M35.82,24c-1.04,0-1.89-.85-1.89-1.89s.85-1.89,1.89-1.89,1.89.85,1.89,1.89-.85,1.89-1.89,1.89Z\"></path> <path d=\"M31.37,16.84c-1.04,0-1.89-.85-1.89-1.89s.85-1.89,1.89-1.89,1.89.85,1.89,1.89-.85,1.89-1.89,1.89Z\"></path> <path d=\"M41.48,24.65c.86,1.03,1.38,2.35,1.38,3.8,0,1.96-.95,3.7-2.41,4.78.19.58.3,1.21.3,1.85,0,3.28-2.66,5.93-5.94,5.93-.11,0-.22,0-.33,0-.8,2.32-3.01,3.99-5.61,3.99-1.24,0-2.4-.38-3.35-1.04-.18-.12-.35-.25-.51-.39V6.67c1.07-1.03,2.52-1.67,4.13-1.67,2.81,0,5.16,1.95,5.78,4.56,4.55,1.03,7.95,5.1,7.95,9.97,0,1.87-.5,3.62-1.38,5.12Z\"></path> <path d=\"M8.52,24.65c-.86,1.03-1.38,2.35-1.38,3.8,0,1.96.95,3.7,2.41,4.78-.19.58-.3,1.21-.3,1.85,0,3.28,2.66,5.93,5.94,5.93.11,0,.22,0,.33,0,.8,2.32,3.01,3.99,5.61,3.99,1.24,0,2.4-.38,3.35-1.04.18-.12.35-.25.51-.39V6.67c-1.07-1.03-2.52-1.67-4.13-1.67-2.81,0-5.16,1.95-5.78,4.56-4.55,1.03-7.95,5.1-7.95,9.97,0,1.87.5,3.62,1.38,5.12Z\"></path> <polyline points=\"15.08 18.32 20.04 18.32 20.04 22.1 25 22.1 33.93 22.1\"></polyline> <polyline points=\"33.02 34.03 29.01 34.03 29.01 29.93 25 29.93 18.87 29.93\"></polyline> <line x1=\"29.48\" y1=\"14.95\" x2=\"25\" y2=\"14.95\"></line>",
  "Calendar": "<path d=\"M11,9h28s4,0,4,4v28s0,4-4,4H11s-4,0-4-4V13s0-4,4-4\"></path> <path d=\"M33,5v8\"></path> <path d=\"M17,5v8\"></path> <path d=\"M7,21h36\"></path>",
  "Caution": "<polyline points=\"11.55 6.89 38.45 6.89 31.9 43.11 24.69 43.11\"></polyline> <line x1=\"11.55\" y1=\"6.89\" x2=\"5\" y2=\"43.11\"></line> <line x1=\"12.21\" y1=\"43.11\" x2=\"5\" y2=\"43.11\"></line> <line x1=\"26.07\" y1=\"36.4\" x2=\"24.69\" y2=\"43.11\"></line> <line x1=\"13.6\" y1=\"36.4\" x2=\"12.21\" y2=\"43.11\"></line> <line x1=\"13.6\" y1=\"36.37\" x2=\"26.07\" y2=\"36.37\"></line> <line x1=\"45\" y1=\"43.11\" x2=\"38.45\" y2=\"6.89\"></line> <polyline points=\"36.4 36.4 37.79 43.11 45 43.11\"></polyline> <line x1=\"36.4\" y1=\"36.37\" x2=\"33.3\" y2=\"36.37\"></line> <g> <path d=\"M31.08,21.85c-.19.43-.63.71-1.12.67l-2.48-.17c-.68-.05-1.35.17-1.86.62l-1.55,1.34.62.71c.52.6.77,1.36.72,2.15l-.23,3.26c-.04.63-.59,1.1-1.22,1.06-.63-.04-1.1-.59-1.06-1.22l.17-2.48c.05-.68-.17-1.35-.62-1.86l-4.43-5.09-.57.49c-.52.45-.83,1.08-.88,1.76l-.09,1.3c-.04.63-.59,1.1-1.22,1.06-.3-.02-.58-.16-.78-.39-.2-.23-.3-.52-.28-.83l.15-2.08c.05-.79.41-1.51,1.01-2.03l2.29-1.99c.68-.59,1.52-.87,2.39-.81l.97.07c.68.05,1.35-.17,1.86-.62l.98-.85h0c.48-.41,1.2-.36,1.61.11.2.23.3.52.28.83-.02.3-.16.58-.39.78l-1.57,1.37c-.6.52-1.36.77-2.15.72l-.66-.05,2.13,2.45,1.61-1.4c.6-.52,1.36-.77,2.15-.72l3.26.23c.3.02.58.16.78.39.2.23.3.52.28.83,0,.14-.04.27-.1.39Z\"></path> <path d=\"M16.92,17.29c.86-.75.96-2.06.2-2.93-.36-.42-.87-.67-1.42-.71-.55-.04-1.09.14-1.51.5-.86.75-.96,2.06-.2,2.93.36.42.87.67,1.42.71s1.09-.14,1.51-.5h0Z\"></path> </g>",
  "Chart1": "<polyline points=\"35.48 12.77 42.06 12.74 42.1 19.32\"></polyline> <line x1=\"47.5\" y1=\"37.65\" x2=\"2.5\" y2=\"37.65\"></line> <polyline points=\"5.62 31.18 14.21 22.13 23.58 17.23 32.96 21.06 42.06 12.74\"></polyline>",
  "Chat1": "<path d=\"M7.93,34.66c-2.93-2.34-2.93-4.11-2.93-11.66s0-11.31,2.93-13.66c2.93-2.34,7.64-2.34,17.07-2.34s14.14,0,17.07,2.34c2.93,2.34,2.93,6.11,2.93,13.66s0,9.31-2.93,11.66c-2.93,2.34-7.64,2.34-17.07,2.34-5.02,0-7.6,3.48-12,6v-6.42c-2.19-.33-3.8-.9-5.07-1.92\"></path>",
  "Check1": "<path d=\"M45,11.25l-27.5,27.5-12.5-12.5\"></path>",
  "Chevron_down": "<path d=\"M5,15l20,20,20-20\"></path>",
  "Chevron_left": "<path d=\"M35,5L15,25l20,20\"></path>",
  "Chevron_right": "<path d=\"M15,45l20-20L15,5\"></path>",
  "Chevron_up": "<path d=\"M45,35L25,15,5,35\"></path>",
  "Circle-Alert": "<path d=\"M20.12,9.52L3.91,36.58c-1.06,1.83-.43,4.17,1.4,5.23.57.33,1.21.51,1.87.51h32.43c2.11-.02,3.81-1.76,3.79-3.87,0-.66-.18-1.3-.51-1.87L26.67,9.52c-1.1-1.81-3.45-2.38-5.26-1.29-.53.32-.97.76-1.29,1.29Z\"></path> <path d=\"M23.4,19.36v7.66\"></path> <path d=\"M23.4,34.67h.02\"></path>",
  "Clock1": "<path d=\"M5,25c0,11.05,8.95,20,20,20s20-8.95,20-20S36.05,5,25,5,5,13.95,5,25\"></path> <path d=\"M25,13v12l8,4\"></path>",
  "Cloud1": "<path d=\"M5,29.68c0,3.86,3.14,7,7.01,7h24.69c4.58,0,8.3-3.72,8.3-8.3,0-8.96-10.9-9.06-11.03-9.33-1.99-4.03-5.22-5.75-9.69-5.75-5.39,0-10.05,3.66-11.34,8.89.3.37-7.93.37-7.93,7.48Z\"></path>",
  "Dots": "<line x1=\"12.14\" y1=\"5\" x2=\"12.14\" y2=\"5\"></line> <line x1=\"20.71\" y1=\"5\" x2=\"20.71\" y2=\"5\"></line> <line x1=\"29.29\" y1=\"5\" x2=\"29.29\" y2=\"5\"></line> <line x1=\"37.86\" y1=\"5\" x2=\"37.86\" y2=\"5\"></line> <line x1=\"12.14\" y1=\"10.71\" x2=\"12.14\" y2=\"10.71\"></line> <line x1=\"20.71\" y1=\"10.71\" x2=\"20.71\" y2=\"10.71\"></line> <line x1=\"29.29\" y1=\"10.71\" x2=\"29.29\" y2=\"10.71\"></line> <line x1=\"37.86\" y1=\"10.71\" x2=\"37.86\" y2=\"10.71\"></line> <line x1=\"12.14\" y1=\"16.43\" x2=\"12.14\" y2=\"16.43\"></line> <line x1=\"20.71\" y1=\"16.43\" x2=\"20.71\" y2=\"16.43\"></line> <line x1=\"29.29\" y1=\"16.43\" x2=\"29.29\" y2=\"16.43\"></line> <line x1=\"37.86\" y1=\"16.43\" x2=\"37.86\" y2=\"16.43\"></line> <line x1=\"12.14\" y1=\"22.14\" x2=\"12.14\" y2=\"22.14\"></line> <line x1=\"20.71\" y1=\"22.14\" x2=\"20.71\" y2=\"22.14\"></line> <line x1=\"29.29\" y1=\"22.14\" x2=\"29.29\" y2=\"22.14\"></line> <line x1=\"37.86\" y1=\"22.14\" x2=\"37.86\" y2=\"22.14\"></line> <line x1=\"12.14\" y1=\"27.86\" x2=\"12.14\" y2=\"27.86\"></line> <line x1=\"20.71\" y1=\"27.86\" x2=\"20.71\" y2=\"27.86\"></line> <line x1=\"29.29\" y1=\"27.86\" x2=\"29.29\" y2=\"27.86\"></line> <line x1=\"37.86\" y1=\"27.86\" x2=\"37.86\" y2=\"27.86\"></line> <line x1=\"12.14\" y1=\"33.57\" x2=\"12.14\" y2=\"33.57\"></line> <line x1=\"20.71\" y1=\"33.57\" x2=\"20.71\" y2=\"33.57\"></line> <line x1=\"29.29\" y1=\"33.57\" x2=\"29.29\" y2=\"33.57\"></line> <line x1=\"37.86\" y1=\"33.57\" x2=\"37.86\" y2=\"33.57\"></line> <line x1=\"12.14\" y1=\"39.29\" x2=\"12.14\" y2=\"39.29\"></line> <line x1=\"20.71\" y1=\"39.29\" x2=\"20.71\" y2=\"39.29\"></line> <line x1=\"29.29\" y1=\"39.29\" x2=\"29.29\" y2=\"39.29\"></line> <line x1=\"37.86\" y1=\"39.29\" x2=\"37.86\" y2=\"39.29\"></line> <line x1=\"12.14\" y1=\"45\" x2=\"12.14\" y2=\"45\"></line> <line x1=\"20.71\" y1=\"45\" x2=\"20.71\" y2=\"45\"></line> <line x1=\"29.29\" y1=\"45\" x2=\"29.29\" y2=\"45\"></line> <line x1=\"37.86\" y1=\"45\" x2=\"37.86\" y2=\"45\"></line>",
  "Eye": "<path d=\"M5,25s7.27-14.55,20-14.55,20,14.55,20,14.55c0,0-7.27,14.55-20,14.55S5,25,5,25Z\"></path> <path d=\"M19.55,25c0,3.01,2.44,5.45,5.45,5.45s5.45-2.44,5.45-5.45-2.44-5.45-5.45-5.45-5.45,2.44-5.45,5.45\"></path>",
  "Fire": "<path d=\"M37.52,44.25s4.78-4.16,4.78-11.69-6.35-10.98-10.9-15.2-4.07-12.36-4.07-12.36c0,0-6.37,5.5-8.48,11.54-2.91,8.35-1.58,13.09-1.58,13.09,0,0-1.95-1.35-3.29-3.89-1.34-2.54-1.39-6.69-1.39-6.69,0,0-4.53,6.83-4.84,11.67-.31,4.84.77,13.53,9.37,13.53s9.98-10.85,9.9-13c-.08-2.15-1-5.68-1-5.68,0,0,6.42,3.76,6.73,8.91.31,5.14-3.76,10.52-3.76,10.52\"></path>",
  "Flag": "<path d=\"M9,31s2-2,8-2,10,4,16,4,8-2,8-2V7s-2,2-8,2-10-4-16-4-8,2-8,2v24Z\"></path> <path d=\"M9,45v-14\"></path>",
  "Funnel": "<path d=\"M47.5,4.75H2.5l18,21.28v14.72l9,4.5v-19.22L47.5,4.75Z\"></path>",
  "Gear1": "<path d=\"M29.48,8.95c1.19.36,2.39.84,3.58,1.43l4.89-3.58c.36-.24.84-.12,1.07.12l3.82,3.94c.36.24.36.6.12.95l-3.46,5.01c.6,1.07,1.07,2.15,1.43,3.58l5.85.95c.48,0,.72.36.72.72v5.49c0,.36-.24.72-.72.72l-5.85,1.19c-.36,1.19-.84,2.39-1.43,3.58l3.58,4.89c.12.36.12.84-.12,1.07l-3.94,3.7c-.24.36-.72.36-.95.12l-5.01-3.34c-1.07.6-2.27,1.07-3.58,1.43l-1.07,5.85c0,.48-.36.72-.72.72h-5.49c-.36,0-.72-.24-.72-.72l-.95-5.85c-1.31-.36-2.51-.84-3.7-1.43l-4.89,3.46c-.36.24-.72.24-.95-.12l-3.94-3.82c-.24-.24-.36-.72-.12-1.07l3.58-4.89c-.6-1.07-1.07-2.27-1.43-3.58l-5.85-1.07c-.48,0-.72-.36-.72-.72v-5.49c0-.36.24-.72.72-.72l5.85-.95c.36-1.31.84-2.51,1.43-3.7l-3.46-4.89c-.24-.36-.24-.72.12-.95l3.82-3.94c.24-.24.72-.36,1.07-.12l4.89,3.58c1.07-.6,2.27-1.07,3.58-1.43l.95-5.85c0-.48.36-.72.72-.72h5.49c.36,0,.72.24.72.72l1.07,5.73ZM24.94,16.47c-4.7,0-8.47,3.77-8.47,8.47s3.77,8.47,8.47,8.47,8.47-3.77,8.47-8.47-3.68-8.47-8.47-8.47Z\"></path>",
  "Group1": "<path d=\"M34.09,41.36v-3.64c0-4.02-3.26-7.27-7.27-7.27h-14.55c-4.02,0-7.27,3.26-7.27,7.27v3.64\"></path> <path d=\"M12.27,15.91c0,4.02,3.26,7.27,7.27,7.27s7.27-3.26,7.27-7.27-3.26-7.27-7.27-7.27-7.27,3.26-7.27,7.27\"></path> <path d=\"M45,41.36v-3.64c0-3.31-2.25-6.21-5.45-7.04\"></path> <path d=\"M32.27,8.87c3.89,1,6.24,4.96,5.24,8.85-.66,2.57-2.67,4.58-5.24,5.24\"></path>",
  "Health": "<path d=\"M45,25h-8l-6,18L19,7l-6,18h-8\"></path>",
  "House": "<polygon points=\"45 45 5 45 5 25 25.47 5 45 25 45 45\"></polygon> <line x1=\"25\" y1=\"45\" x2=\"25\" y2=\"25\"></line>",
  "Magnify": "<path d=\"M5,22.78c0,9.82,7.96,17.78,17.78,17.78s17.78-7.96,17.78-17.78S32.6,5,22.78,5,5,12.96,5,22.78\"></path> <path d=\"M45,45l-9.67-9.67\"></path>",
  "Mail": "<path d=\"M9,9h32c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H9c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4Z\"></path> <path d=\"M45,13l-20,14L5,13\"></path>",
  "Plus": "<circle cx=\"25\" cy=\"25\" r=\"20\"></circle> <line x1=\"25\" y1=\"39.66\" x2=\"25\" y2=\"10.34\"></line> <line x1=\"10.34\" y1=\"25\" x2=\"39.66\" y2=\"25\"></line>",
  "Server1": "<path d=\"M9,5h32s4,0,4,4v8s0,4-4,4H9s-4,0-4-4v-8s0-4,4-4\"></path> <path d=\"M9,29h32s4,0,4,4v8s0,4-4,4H9s-4,0-4-4v-8s0-4,4-4\"></path> <path d=\"M13,13h.02\"></path> <path d=\"M13,37h.02\"></path>",
  "Slack": "<path d=\"M30,21c-1.66,0-3-1.34-3-3V8c0-1.66,1.34-3,3-3s3,1.34,3,3v10c0,1.66-1.34,3-3,3Z\"></path> <path d=\"M42,21h-3v-3c0-1.66,1.34-3,3-3s3,1.34,3,3-1.34,3-3,3Z\"></path> <path d=\"M20,29c1.66,0,3,1.34,3,3v10c0,1.66-1.34,3-3,3s-3-1.34-3-3v-10c0-1.66,1.34-3,3-3Z\"></path> <path d=\"M8,29h3v3c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3Z\"></path> <path d=\"M29,30c0-1.66,1.34-3,3-3h10c1.66,0,3,1.34,3,3s-1.34,3-3,3h-10c-1.66,0-3-1.34-3-3Z\"></path> <path d=\"M32,39h-3v3c0,1.66,1.34,3,3,3s3-1.34,3-3-1.34-3-3-3Z\"></path> <path d=\"M21,20c0-1.66-1.34-3-3-3H8c-1.66,0-3,1.34-3,3s1.34,3,3,3h10c1.66,0,3-1.34,3-3Z\"></path> <path d=\"M18,11h3v-3c0-1.66-1.34-3-3-3s-3,1.34-3,3,1.34,3,3,3Z\"></path>",
  "Sparkle": "<path d=\"M31.16,45c2.5-10.33,5.52-13.55,13.84-16.36-8.74-2.95-11.47-6.53-13.84-16.36-2.5,10.33-5.53,13.55-13.85,16.36,8.73,2.95,11.47,6.56,13.85,16.36M12.69,23.18c1.14-5.38,3.34-7.8,7.69-9.09-4.35-1.29-6.55-3.71-7.69-9.09-1.09,5.14-3.14,7.74-7.69,9.09,4.35,1.29,6.56,3.72,7.69,9.09\"></path>",
  "Triage": "<g> <circle cx=\"30.23\" cy=\"30.44\" r=\"14.56\"></circle> <line x1=\"40.37\" y1=\"40.57\" x2=\"44.8\" y2=\"45\"></line> </g> <path d=\"M18.92,38.52h19.37v-15.67h-20.08M15.67,28.97H5.2v7.27h12.02\"></path> <path d=\"M24.66,16.98H5.2v7.27h11.52\"></path> <path d=\"M5.2,12.27h31.08v-7.27H5.2v7.27Z\"></path>",
  "User1": "<path d=\"M42.78,45v-4.44c0-4.91-3.98-8.89-8.89-8.89h-17.78c-4.91,0-8.89,3.98-8.89,8.89v4.44\"></path> <path d=\"M16.11,13.89c0,4.91,3.98,8.89,8.89,8.89s8.89-3.98,8.89-8.89-3.98-8.89-8.89-8.89-8.89,3.98-8.89,8.89\"></path>",
  "Workflow": "<circle cx=\"9.3\" cy=\"39.15\" r=\"4.3\"></circle> <circle cx=\"40.7\" cy=\"39.15\" r=\"4.3\"></circle> <g> <circle cx=\"25\" cy=\"39.15\" r=\"4.3\"></circle> <line x1=\"25\" y1=\"34.85\" x2=\"25\" y2=\"6.89\"></line> </g> <polyline points=\"9.3 34.85 9.3 25.39 40.27 25.39 40.27 34.85\"></polyline> <polyline points=\"19.82 11.69 24.97 6.55 30.12 11.69\"></polyline>",
  "X": "<path d=\"M45,5L5,45\"></path> <path d=\"M5,5l40,40\"></path>",
  "Zap_on": "<polygon points=\"24.02 29.94 10.37 29.94 29.97 2.5 26.05 20.14 39.63 20.14 20.1 47.5 24.02 29.94\"></polygon>"
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icon-data.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — renders a PagerDuty PDIcons glyph as an inline, currentColor SVG.
 * All glyphs are line-art on a 50×50 viewBox; strokes inherit `color`.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2.5,
  title,
  style,
  className,
  ...rest
}) {
  const inner = __ds_scope.ICONS[name];
  const base = {
    display: "inline-block",
    flex: "0 0 auto",
    verticalAlign: "middle",
    ...style
  };
  if (!inner) {
    if (typeof console !== "undefined") console.warn(`Icon: unknown glyph "${name}"`);
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 50 50",
      style: base,
      className
    });
  }
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 50 50",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    style: base,
    role: title ? "img" : "presentation",
    "aria-hidden": title ? undefined : true,
    "aria-label": title || undefined,
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : "") + inner
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(__ds_scope.ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 32,
    padding: "0 12px",
    font: "var(--fs-body-sm)",
    icon: 16,
    gap: 6
  },
  md: {
    height: 40,
    padding: "0 16px",
    font: "var(--fs-body-sm)",
    icon: 18,
    gap: 8
  },
  lg: {
    height: 48,
    padding: "0 22px",
    font: "var(--fs-body)",
    icon: 20,
    gap: 8
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--text-on-brand)",
    border: "1px solid var(--action-primary)",
    "--hover-bg": "var(--action-primary-hover)",
    "--hover-bd": "var(--action-primary-hover)",
    "--active-bg": "var(--action-primary-active)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--pd-dark-green)",
    border: "1px solid var(--border-default)",
    "--hover-bg": "var(--surface-brand-subtle)",
    "--hover-bd": "var(--border-brand)",
    "--active-bg": "var(--green-100)"
  },
  tertiary: {
    background: "transparent",
    color: "var(--pd-dark-green)",
    border: "1px solid transparent",
    "--hover-bg": "var(--surface-brand-subtle)",
    "--hover-bd": "transparent",
    "--active-bg": "var(--green-100)"
  },
  danger: {
    background: "var(--status-triggered)",
    color: "#fff",
    border: "1px solid var(--status-triggered)",
    "--hover-bg": "var(--red-700)",
    "--hover-bd": "var(--red-700)",
    "--active-bg": "var(--red-700)"
  }
};

/** Button — primary brand action. */
function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  style,
  onClick,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isDisabled = disabled || loading;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = isDisabled ? undefined : active ? v["--active-bg"] : hover ? v["--hover-bg"] : v.background;
  const bd = isDisabled ? undefined : hover ? `1px solid ${v["--hover-bd"]}` : v.border;
  return React.createElement("button", {
    type,
    disabled: isDisabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : undefined,
      font: `var(--fw-medium) ${s.font}/1 var(--font-sans)`,
      letterSpacing: "var(--ls-snug)",
      borderRadius: "var(--radius-md)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      background: isDisabled ? "var(--gray-100)" : bg,
      color: isDisabled ? "var(--text-disabled)" : v.color,
      border: isDisabled ? "1px solid var(--gray-200)" : bd,
      transition: "background .13s ease, border-color .13s ease, box-shadow .13s ease",
      whiteSpace: "nowrap",
      userSelect: "none",
      transform: active && !isDisabled ? "translateY(0.5px)" : "none",
      ...style
    },
    ...rest
  }, loading && React.createElement(__ds_scope.Icon, {
    name: "Clock1",
    size: s.icon,
    style: {
      animation: "pd-spin 0.8s linear infinite"
    }
  }), !loading && leftIcon && React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: s.icon
  }), children != null && React.createElement("span", null, children), !loading && rightIcon && React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZES = {
  sm: {
    box: 32,
    icon: 18
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 24
  }
};
const VARIANTS = {
  solid: {
    bg: "var(--action-primary)",
    fg: "#fff",
    hover: "var(--action-primary-hover)",
    bd: "transparent"
  },
  outline: {
    bg: "var(--surface-card)",
    fg: "var(--text-secondary)",
    hover: "var(--surface-brand-subtle)",
    bd: "var(--border-default)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-secondary)",
    hover: "var(--gray-100)",
    bd: "transparent"
  }
};

/** IconButton — a square, icon-only action. Always pass an accessible label. */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  shape = "rounded",
  style,
  onClick,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: shape === "circle" ? "var(--radius-circle)" : "var(--radius-md)",
      background: disabled ? "var(--gray-100)" : hover ? v.hover : v.bg,
      color: disabled ? "var(--text-disabled)" : v.fg,
      border: `1px solid ${disabled ? "var(--gray-200)" : v.bd}`,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background .13s ease, color .13s ease",
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const STATUS = {
  triggered: {
    label: "Triggered",
    icon: "Fire",
    fg: "var(--status-triggered)",
    bg: "var(--status-triggered-bg)",
    bd: "var(--red-500)"
  },
  acknowledged: {
    label: "Acknowledged",
    icon: "Alarm1",
    fg: "var(--orange-700)",
    bg: "var(--status-acknowledged-bg)",
    bd: "var(--orange-500)"
  },
  resolved: {
    label: "Resolved",
    icon: "Check1",
    fg: "var(--green-700)",
    bg: "var(--status-resolved-bg)",
    bd: "var(--pd-green)"
  },
  healthy: {
    label: "Healthy",
    icon: "Health",
    fg: "var(--green-700)",
    bg: "var(--status-resolved-bg)",
    bd: "var(--pd-green)"
  }
};

/** StatusBadge — incident lifecycle state, the core product status token. */
function StatusBadge({
  status = "triggered",
  label,
  showIcon = true,
  variant = "soft",
  size = "md",
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.triggered;
  const sm = size === "sm";
  const solid = variant === "solid";
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: sm ? 4 : 6,
      padding: sm ? "2px 8px" : "3px 10px",
      font: `var(--fw-bold) ${sm ? "var(--fs-overline)" : "var(--fs-caption)"}/1.4 var(--font-sans)`,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      borderRadius: "var(--radius-sm)",
      background: solid ? s.bd : s.bg,
      color: solid ? "#fff" : s.fg,
      border: solid ? "1px solid transparent" : `1px solid color-mix(in srgb, ${s.bd} 30%, transparent)`,
      whiteSpace: "nowrap",
      ...style
    },
    ...rest
  }, showIcon && React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: sm ? 12 : 14,
    strokeWidth: 3
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Tag — a removable/selectable label chip for filters and metadata. */
function Tag({
  children,
  icon,
  onRemove,
  selected = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 10px",
      font: `var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)`,
      background: selected ? "var(--surface-brand-subtle)" : "var(--gray-50)",
      color: selected ? "var(--pd-dark-green)" : "var(--text-secondary)",
      border: `1px solid ${selected ? "var(--border-brand)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    },
    ...rest
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: -3,
      marginLeft: 1,
      padding: 2,
      border: "none",
      cursor: "pointer",
      background: hover ? "var(--gray-200)" : "transparent",
      borderRadius: "var(--radius-circle)",
      color: "inherit",
      lineHeight: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 11,
    strokeWidth: 3.5
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const KINDS = {
  info: {
    icon: "Circle-Alert",
    fg: "var(--blue-700)",
    bg: "var(--status-info-bg)",
    bd: "var(--blue-500)"
  },
  success: {
    icon: "Check1",
    fg: "var(--green-700)",
    bg: "var(--status-resolved-bg)",
    bd: "var(--pd-green)"
  },
  warning: {
    icon: "Caution",
    fg: "var(--orange-700)",
    bg: "var(--status-acknowledged-bg)",
    bd: "var(--orange-500)"
  },
  danger: {
    icon: "Fire",
    fg: "var(--red-700)",
    bg: "var(--status-triggered-bg)",
    bd: "var(--status-triggered)"
  }
};

/** Alert — inline contextual message banner. */
function Alert({
  kind = "info",
  title,
  children,
  onClose,
  action,
  style,
  ...rest
}) {
  const k = KINDS[kind] || KINDS.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 14px",
      background: k.bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `3px solid ${k.bd}`,
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 20,
    strokeWidth: 2.5,
    style: {
      color: k.fg,
      marginTop: 1
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, title), children && React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-secondary)",
      marginTop: title ? 2 : 0
    }
  }, children), action && React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      lineHeight: 0,
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 14,
    strokeWidth: 3
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
const TONES = {
  brand: "var(--pd-green)",
  success: "var(--pd-green)",
  warning: "var(--orange-500)",
  danger: "var(--status-triggered)",
  info: "var(--blue-500)"
};

/** ProgressBar — determinate horizontal progress / meter. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "brand",
  size = "md",
  label,
  showValue = false,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const h = size === "sm" ? 4 : size === "lg" ? 12 : 8;
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    },
    ...rest
  }, (label || showValue) && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--fw-medium) var(--fs-caption)/1.3 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, label && React.createElement("span", null, label), showValue && React.createElement("span", null, `${Math.round(pct)}%`)), React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      width: "100%",
      height: h,
      background: "var(--gray-200)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: TONES[tone] || TONES.brand,
      borderRadius: "var(--radius-pill)",
      transition: "width .3s var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Spinner — indeterminate loading indicator. */
function Spinner({
  size = 24,
  thickness = 3,
  color = "var(--pd-green)",
  label = "Loading",
  style,
  ...rest
}) {
  return React.createElement("span", {
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "50%",
      border: `${thickness}px solid var(--gray-200)`,
      borderTopColor: color,
      animation: "pd-spin .7s linear infinite",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const KINDS = {
  info: {
    icon: "Circle-Alert",
    fg: "var(--blue-500)"
  },
  success: {
    icon: "Check1",
    fg: "var(--pd-green)"
  },
  warning: {
    icon: "Caution",
    fg: "var(--orange-500)"
  },
  danger: {
    icon: "Fire",
    fg: "var(--status-triggered)"
  }
};

/** Toast — a transient notification card (render inside a corner stack). */
function Toast({
  kind = "info",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const k = KINDS[kind] || KINDS.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: 360,
      maxWidth: "90vw",
      padding: "12px 14px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "pd-pop-in .22s var(--ease-out) both",
      ...style
    },
    ...rest
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      borderRadius: "var(--radius-circle)",
      background: "var(--gray-50)",
      flex: "0 0 auto"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 17,
    strokeWidth: 2.6,
    style: {
      color: k.fg
    }
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, title), children && React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)",
      color: "var(--text-secondary)",
      marginTop: 1
    }
  }, children)), onClose && React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      lineHeight: 0,
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 13,
    strokeWidth: 3
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — hover/focus label. Wraps a single child trigger. */
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocusCapture: () => setShow(true),
    onBlurCapture: () => setShow(false),
    ...rest
  }, children, show && React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      padding: "5px 9px",
      background: "var(--gray-900)",
      color: "#fff",
      font: "var(--fw-medium) var(--fs-caption)/1.3 var(--font-sans)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      animation: "pd-fade-in .12s ease both",
      ...pos,
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox — controlled/uncontrolled checkbox with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  const boxOn = on || indeterminate;
  return React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-sm)",
      background: boxOn ? "var(--action-primary)" : "var(--surface-card)",
      border: `1.5px solid ${boxOn ? "var(--action-primary)" : "var(--border-strong)"}`,
      transition: "background .12s ease, border-color .12s ease",
      flex: "0 0 auto"
    }
  }, indeterminate ? React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: "#fff",
      borderRadius: 1
    }
  }) : on && React.createElement(__ds_scope.Icon, {
    name: "Check1",
    size: 13,
    strokeWidth: 4,
    style: {
      color: "#fff"
    }
  })), label && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Input — single-line text field with optional icon, label, and error. */
function Input({
  label,
  hint,
  error,
  leftIcon,
  size = "md",
  required = false,
  id,
  style,
  containerStyle,
  disabled,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 34 : size === "lg" ? 46 : 40;
  const borderColor = error ? "var(--status-triggered)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label, required && React.createElement("span", {
    style: {
      color: "var(--status-triggered)",
      marginLeft: 2
    }
  }, "*")), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--gray-50)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color .13s ease, box-shadow .13s ease"
    }
  }, leftIcon && React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: 18,
    style: {
      color: "var(--text-tertiary)"
    }
  }), React.createElement("input", {
    id: inputId,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)",
      minWidth: 0,
      ...style
    },
    ...rest
  })), error ? React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--status-triggered)"
    }
  }, error) : hint && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio — single radio input with label. Group via shared `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(true);
    onChange?.(e);
  };
  return React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, React.createElement("input", {
    id: inputId,
    type: "radio",
    name,
    value,
    checked: isControlled ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-circle)",
      background: "var(--surface-card)",
      border: `1.5px solid ${on ? "var(--action-primary)" : "var(--border-strong)"}`,
      transition: "border-color .12s ease",
      flex: "0 0 auto"
    }
  }, on && React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--action-primary)"
    }
  })), label && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select — native single-select styled to match Input. */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = "md",
  required = false,
  id,
  style,
  containerStyle,
  disabled,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 34 : size === "lg" ? 46 : 40;
  const borderColor = error ? "var(--status-triggered)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label, required && React.createElement("span", {
    style: {
      color: "var(--status-triggered)",
      marginLeft: 2
    }
  }, "*")), React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, React.createElement("select", {
    id: inputId,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 38px 0 12px",
      background: disabled ? "var(--gray-50)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)",
      transition: "border-color .13s ease, box-shadow .13s ease",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    },
    ...rest
  }, placeholder && React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), React.createElement(__ds_scope.Icon, {
    name: "Chevron_down",
    size: 16,
    strokeWidth: 3,
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      color: "var(--text-tertiary)"
    }
  })), error ? React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--status-triggered)"
    }
  }, error) : hint && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — on/off toggle. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, React.createElement("input", {
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: isControlled ? checked : undefined,
    defaultChecked,
    disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement("span", {
    style: {
      position: "relative",
      width: 38,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--action-primary)" : "var(--gray-300)",
      transition: "background .16s ease",
      flex: "0 0 auto"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left .16s var(--ease-standard)"
    }
  })), label && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/** Textarea — multi-line text field with label, hint, and error. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  required = false,
  id,
  style,
  containerStyle,
  disabled,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--status-triggered)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label, required && React.createElement("span", {
    style: {
      color: "var(--status-triggered)",
      marginLeft: 2
    }
  }, "*")), React.createElement("textarea", {
    id: inputId,
    rows,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      resize: "vertical",
      padding: "10px 12px",
      background: disabled ? "var(--gray-50)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-primary)",
      transition: "border-color .13s ease, box-shadow .13s ease",
      ...style
    },
    ...rest
  }), error ? React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--status-triggered)"
    }
  }, error) : hint && React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)",
      color: "var(--text-tertiary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — horizontal underline tab bar (controlled or uncontrolled). */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };
  return React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    },
    ...rest
  }, tabs.map(t => {
    const on = t.id === active;
    return React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => select(t.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "10px 14px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        font: `${on ? "var(--fw-bold)" : "var(--fw-medium)"} var(--fs-body-sm)/1 var(--font-sans)`,
        color: on ? "var(--pd-dark-green)" : "var(--text-secondary)",
        boxShadow: on ? "inset 0 -2px 0 0 var(--pd-green)" : "none",
        marginBottom: -1,
        transition: "color .12s ease"
      }
    }, t.icon && React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label, t.count != null && React.createElement("span", {
      style: {
        padding: "1px 7px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--surface-brand-subtle)" : "var(--gray-100)",
        color: on ? "var(--pd-dark-green)" : "var(--text-tertiary)",
        font: "var(--fw-bold) var(--fs-overline)/1.5 var(--font-sans)"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/** Dialog — modal overlay with header, body, and footer. */
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose?.();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "rgba(8,43,86,0.45)",
      backdropFilter: "blur(2px)",
      animation: "pd-fade-in .15s ease both"
    }
  }, React.createElement("div", {
    style: {
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      animation: "pd-pop-in .2s var(--ease-out) both",
      ...style
    },
    ...rest
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: "var(--space-6) var(--space-6) 0"
    }
  }, React.createElement("div", null, title && React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-h3)/1.25 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, title), description && React.createElement("p", {
    style: {
      margin: "6px 0 0",
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, description)), onClose && React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 4,
      lineHeight: 0,
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 18,
    strokeWidth: 2.5
  }))), React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-6)",
      font: "var(--fw-regular) var(--fs-body-sm)/1.6 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, children), footer && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "0 var(--space-6) var(--space-6)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/IncidentDetail.jsx
try { (() => {
// IncidentDetail — modal detail view with timeline and lifecycle actions.
const {
  Dialog,
  Button,
  StatusBadge,
  Badge,
  Avatar,
  Tag,
  Icon,
  Alert
} = window.PagerDutyDesignSystem_aefad5;
function Field({
  label,
  children
}) {
  return React.createElement("div", null, React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-overline)/1 var(--font-sans)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)",
      marginBottom: 6
    }
  }, label), React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, children));
}
function IncidentDetail({
  incident: i,
  onClose,
  onAck,
  onResolve
}) {
  if (!i) return null;
  const timeline = [{
    icon: "Fire",
    color: "var(--status-triggered)",
    text: `Triggered — ${i.alerts} alerts grouped`,
    time: i.created
  }, {
    icon: "Group1",
    color: "var(--text-tertiary)",
    text: `Assigned to ${i.assignee}`,
    time: i.created
  }, i.status !== "triggered" && {
    icon: "Alarm1",
    color: "var(--orange-500)",
    text: `Acknowledged by ${i.assignee}`,
    time: "just now"
  }, i.status === "resolved" && {
    icon: "Check1",
    color: "var(--pd-green)",
    text: "Resolved",
    time: "just now"
  }].filter(Boolean);
  return React.createElement(Dialog, {
    width: 620,
    onClose,
    title: i.title,
    description: React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, i.id, React.createElement("span", null, "·"), i.service),
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "tertiary",
      leftIcon: "Slack"
    }, "Post to Slack"), i.status !== "resolved" && i.status !== "acknowledged" && React.createElement(Button, {
      variant: "secondary",
      leftIcon: "Alarm1",
      onClick: () => onAck([i.id])
    }, "Acknowledge"), i.status !== "resolved" && React.createElement(Button, {
      variant: "primary",
      leftIcon: "Check1",
      onClick: () => onResolve([i.id])
    }, "Resolve"))
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 18
    }
  }, React.createElement(StatusBadge, {
    status: i.status
  }), React.createElement(Badge, {
    tone: i.priority === "P1" ? "danger" : i.priority === "P2" ? "warning" : "neutral"
  }, i.priority + " priority"), React.createElement(Badge, {
    tone: "neutral"
  }, i.urgency === "high" ? "High urgency" : "Low urgency")), i.status === "triggered" && React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement(Alert, {
    kind: "danger",
    title: "Active — escalating"
  }, i.note)), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      padding: "16px 0",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      marginBottom: 18
    }
  }, React.createElement(Field, {
    label: "Service"
  }, React.createElement(Tag, {
    icon: "Server1"
  }, i.service)), React.createElement(Field, {
    label: "Assignee"
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, React.createElement(Avatar, {
    name: i.assignee,
    size: "xs"
  }), i.assignee)), React.createElement(Field, {
    label: "Alerts grouped"
  }, String(i.alerts))), React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-overline)/1 var(--font-sans)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)",
      marginBottom: 12
    }
  }, "Timeline"), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, timeline.map((t, idx) => React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      gap: 12,
      paddingBottom: idx === timeline.length - 1 ? 0 : 16,
      position: "relative"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--gray-50)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: t.color,
      flex: "0 0 auto"
    }
  }, React.createElement(Icon, {
    name: t.icon,
    size: 15,
    strokeWidth: 2.6
  })), idx !== timeline.length - 1 && React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: "var(--border-subtle)",
      marginTop: 2
    }
  })), React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, t.text), React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.3 var(--font-sans)",
      color: "var(--text-tertiary)",
      marginTop: 1
    }
  }, t.time))))));
}
Object.assign(window, {
  IncidentDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/IncidentDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/IncidentsScreen.jsx
try { (() => {
// IncidentsScreen — stat cards, tabs, bulk toolbar, and the incident table.
const {
  Icon,
  Button,
  IconButton,
  Badge,
  StatusBadge,
  Avatar,
  Tabs,
  Checkbox,
  Tag
} = window.PagerDutyDesignSystem_aefad5;
const URGENCY = {
  high: {
    label: "High",
    color: "var(--status-triggered)"
  },
  low: {
    label: "Low",
    color: "var(--text-tertiary)"
  }
};
function StatCard({
  label,
  value,
  tone,
  icon
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: tone.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: tone.fg,
      flex: "0 0 auto"
    }
  }, React.createElement(Icon, {
    name: icon,
    size: 20,
    strokeWidth: 2.5
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      font: "var(--fw-black) var(--fs-h2)/1 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, value), React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-caption)/1.2 var(--font-sans)",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, label)));
}
function IncidentsScreen({
  incidents,
  filter,
  onFilter,
  selected,
  onToggle,
  onToggleAll,
  onOpen,
  onAck,
  onResolve
}) {
  const counts = {
    triggered: incidents.filter(i => i.status === "triggered").length,
    acknowledged: incidents.filter(i => i.status === "acknowledged").length,
    resolved: incidents.filter(i => i.status === "resolved").length
  };
  const shown = incidents.filter(i => filter === "all" ? true : filter === "open" ? i.status !== "resolved" : i.status === filter);
  const allSelected = shown.length > 0 && shown.every(i => selected.includes(i.id));
  const someSelected = selected.length > 0 && !allSelected;
  return React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      height: "100%",
      boxSizing: "border-box",
      overflow: "auto"
    }
  },
  // Stat cards
  React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, React.createElement(StatCard, {
    label: "Triggered",
    value: counts.triggered,
    icon: "Fire",
    tone: {
      bg: "var(--status-triggered-bg)",
      fg: "var(--status-triggered)"
    }
  }), React.createElement(StatCard, {
    label: "Acknowledged",
    value: counts.acknowledged,
    icon: "Alarm1",
    tone: {
      bg: "var(--status-acknowledged-bg)",
      fg: "var(--orange-700)"
    }
  }), React.createElement(StatCard, {
    label: "Resolved today",
    value: counts.resolved,
    icon: "Check1",
    tone: {
      bg: "var(--status-resolved-bg)",
      fg: "var(--green-700)"
    }
  }), React.createElement(StatCard, {
    label: "MTTA",
    value: "3m",
    icon: "Clock1",
    tone: {
      bg: "var(--gray-100)",
      fg: "var(--gray-600)"
    }
  })),
  // Tabs + toolbar
  React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, React.createElement(Tabs, {
    value: filter,
    onChange: onFilter,
    tabs: [{
      id: "open",
      label: "Open",
      count: counts.triggered + counts.acknowledged
    }, {
      id: "triggered",
      label: "Triggered",
      count: counts.triggered,
      icon: "Fire"
    }, {
      id: "acknowledged",
      label: "Acknowledged",
      count: counts.acknowledged
    }, {
      id: "resolved",
      label: "Resolved"
    }, {
      id: "all",
      label: "All"
    }]
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      paddingBottom: 6
    }
  }, React.createElement(Button, {
    variant: "tertiary",
    size: "sm",
    leftIcon: "Funnel"
  }, "Filter"), React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    leftIcon: "User1"
  }, "Assigned to me")))),
  // Bulk action bar
  selected.length > 0 && React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      background: "var(--surface-brand-subtle)",
      border: "1px solid var(--border-brand)",
      borderRadius: "var(--radius-md)"
    }
  }, React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-body-sm)/1 var(--font-sans)",
      color: "var(--pd-dark-green)"
    }
  }, `${selected.length} selected`), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginLeft: "auto"
    }
  }, React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    leftIcon: "Alarm1",
    onClick: () => onAck(selected)
  }, "Acknowledge"), React.createElement(Button, {
    variant: "primary",
    size: "sm",
    leftIcon: "Check1",
    onClick: () => onResolve(selected)
  }, "Resolve"))),
  // Table
  React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--surface-card)"
    }
  }, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "40px 1fr 130px 120px 96px 90px 44px",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--gray-25)",
      font: "var(--fw-bold) var(--fs-overline)/1 var(--font-sans)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, React.createElement(Checkbox, {
    checked: allSelected,
    indeterminate: someSelected,
    onChange: () => onToggleAll(shown.map(i => i.id))
  }), React.createElement("span", null, "Incident"), React.createElement("span", null, "Status"), React.createElement("span", null, "Service"), React.createElement("span", null, "Urgency"), React.createElement("span", null, "Assignee"), React.createElement("span", null, "")), shown.map(i => React.createElement(IncidentRow, {
    key: i.id,
    incident: i,
    checked: selected.includes(i.id),
    onToggle: () => onToggle(i.id),
    onOpen: () => onOpen(i.id)
  })), shown.length === 0 && React.createElement("div", {
    style: {
      padding: "48px 16px",
      textAlign: "center",
      color: "var(--text-tertiary)",
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)"
    }
  }, "No incidents in this view. Nice and quiet.")));
}
function IncidentRow({
  incident: i,
  checked,
  onToggle,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  const u = URGENCY[i.urgency];
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "40px 1fr 130px 120px 96px 90px 44px",
      alignItems: "center",
      gap: 8,
      padding: "12px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      background: hover ? "var(--gray-25)" : "transparent",
      cursor: "pointer"
    },
    onClick: onOpen
  }, React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, React.createElement(Checkbox, {
    checked,
    onChange: onToggle
  })), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-body-sm)/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, i.title)), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 3
    }
  }, React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--fs-overline)/1 var(--font-mono)",
      color: "var(--text-tertiary)"
    }
  }, i.id), React.createElement(Badge, {
    tone: i.priority === "P1" ? "danger" : i.priority === "P2" ? "warning" : "neutral",
    size: "sm"
  }, i.priority), React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-overline)/1 var(--font-sans)",
      color: "var(--text-tertiary)"
    }
  }, i.created))), React.createElement(StatusBadge, {
    status: i.status,
    size: "sm"
  }), React.createElement(Tag, null, i.service), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      font: "var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)",
      color: u.color
    }
  }, React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: u.color
    }
  }), u.label), React.createElement(Avatar, {
    name: i.assignee,
    size: "sm"
  }), React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, React.createElement(IconButton, {
    icon: "Chevron_right",
    label: "Open",
    variant: "ghost",
    size: "sm"
  })));
}
Object.assign(window, {
  IncidentsScreen,
  IncidentRow,
  StatCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/IncidentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/Sidebar.jsx
try { (() => {
// Sidebar — dark-green product nav rail.
const {
  Icon,
  Avatar
} = window.PagerDutyDesignSystem_aefad5;
function Sidebar({
  active,
  onSelect
}) {
  const nav = window.PD_DATA.nav;
  return React.createElement("aside", {
    style: {
      width: 232,
      flex: "0 0 232px",
      background: "var(--surface-nav)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement("img", {
    src: "../../assets/logos/p-mark/P-WhiteRGB.svg",
    alt: "PagerDuty",
    style: {
      height: 26
    }
  }), React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-h4)/1 var(--font-sans)",
      letterSpacing: "var(--ls-snug)"
    }
  }, "PagerDuty")), React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "8px 12px",
      flex: 1
    }
  }, nav.map(n => {
    const on = n.id === active;
    return React.createElement("button", {
      key: n.id,
      onClick: () => onSelect(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 12px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        textAlign: "left",
        background: on ? "rgba(255,255,255,0.14)" : "transparent",
        color: on ? "#fff" : "rgba(255,255,255,0.82)",
        font: `${on ? "var(--fw-bold)" : "var(--fw-medium)"} var(--fs-body-sm)/1 var(--font-sans)`,
        transition: "background .12s ease"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, React.createElement(Icon, {
      name: n.icon,
      size: 18,
      strokeWidth: 2.4
    }), n.label);
  })), React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement(Avatar, {
    name: window.PD_DATA.user.name,
    size: "sm",
    status: "oncall"
  }), React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--fs-body-sm)/1.2 var(--font-sans)",
      color: "#fff"
    }
  }, window.PD_DATA.user.name), React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-overline)/1.2 var(--font-sans)",
      color: "var(--pd-electric-jade)"
    }
  }, "On-call · " + window.PD_DATA.user.team))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/TopBar.jsx
try { (() => {
// TopBar — page title, global search, notifications, new-incident action.
const {
  Icon,
  IconButton,
  Button,
  Input,
  Badge
} = window.PagerDutyDesignSystem_aefad5;
function TopBar({
  title,
  onNew
}) {
  return React.createElement("header", {
    style: {
      height: 64,
      flex: "0 0 64px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-h3)/1 var(--font-sans)",
      color: "var(--text-primary)",
      flex: "0 0 auto"
    }
  }, title), React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, React.createElement(Input, {
    leftIcon: "Magnify",
    placeholder: "Search incidents, services, people…",
    size: "sm"
  })), React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, React.createElement(IconButton, {
    icon: "Bell",
    label: "Notifications",
    variant: "ghost"
  }), React.createElement("span", {
    style: {
      position: "absolute",
      top: 5,
      right: 5,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--status-triggered)",
      border: "2px solid var(--surface-card)"
    }
  })), React.createElement(IconButton, {
    icon: "Gear1",
    label: "Settings",
    variant: "ghost"
  }), React.createElement(Button, {
    variant: "primary",
    leftIcon: "Plus",
    size: "sm",
    onClick: onNew
  }, "New incident")));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/app.jsx
try { (() => {
// App — login → Operations Cloud incidents console with live interactions.
const DS = window.PagerDutyDesignSystem_aefad5;
const {
  Button,
  Input,
  Icon,
  Toast,
  Dialog,
  Select,
  Textarea
} = DS;
function LoginScreen({
  onLogin
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-card)"
    }
  }, React.createElement("div", {
    style: {
      flex: "0 0 46%",
      background: "var(--pd-green)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 44,
      position: "relative",
      overflow: "hidden"
    }
  }, React.createElement("img", {
    src: "../../assets/logos/corporate/PagerDuty-WhiteRGB.svg",
    alt: "PagerDuty",
    style: {
      width: 190
    }
  }), React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, React.createElement("div", {
    style: {
      font: "var(--fw-black) var(--fs-display-md)/1.05 var(--font-sans)",
      letterSpacing: "var(--ls-tight)"
    }
  }, "Operations, resolved."), React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-lg)/1.5 var(--font-sans)",
      color: "rgba(255,255,255,0.9)",
      maxWidth: 380,
      marginTop: 14
    }
  }, "The AI-first operations platform for mission-critical work. Mobilize the right responder the moment something breaks.")), React.createElement("img", {
    src: "../../assets/imagery/waveforms/PD_refresh_waveform_rd1-12.svg",
    alt: "",
    style: {
      position: "absolute",
      right: -40,
      bottom: -30,
      width: 360,
      opacity: 0.35,
      filter: "brightness(0) invert(1)"
    }
  })), React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-h2)/1.1 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, "Sign in"), React.createElement("p", {
    style: {
      margin: "6px 0 0",
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, "Welcome back to your Operations Cloud.")), React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    defaultValue: "alex@acme.io",
    required: true
  }), React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    defaultValue: "demo",
    required: true
  }), React.createElement(Button, {
    variant: "primary",
    type: "submit",
    fullWidth: true,
    rightIcon: "Chevron_right"
  }, "Sign in"), React.createElement("div", {
    style: {
      textAlign: "center",
      font: "var(--fw-medium) var(--fs-body-sm)/1 var(--font-sans)",
      color: "var(--text-link)"
    }
  }, "Use single sign-on (SSO)"))));
}
function NewIncidentDialog({
  onClose,
  onCreate
}) {
  const [title, setTitle] = React.useState("");
  const [service, setService] = React.useState("payments-api");
  return React.createElement(Dialog, {
    width: 500,
    onClose,
    title: "Create incident",
    description: "Manually trigger a new incident and page the on-call responder.",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "Cancel"), React.createElement(Button, {
      variant: "primary",
      leftIcon: "Fire",
      onClick: () => onCreate({
        title: title || "Manually triggered incident",
        service
      })
    }, "Trigger incident"))
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, React.createElement(Input, {
    label: "Title",
    placeholder: "Describe what's happening…",
    value: title,
    onChange: e => setTitle(e.target.value),
    required: true
  }), React.createElement(Select, {
    label: "Impacted service",
    value: service,
    onChange: e => setService(e.target.value),
    options: ["payments-api", "checkout-web", "cache-cluster", "gateway", "postgres-db"]
  }), React.createElement(Select, {
    label: "Urgency",
    options: ["High", "Low"]
  }), React.createElement(Textarea, {
    label: "Details",
    rows: 2,
    placeholder: "Optional context for responders"
  })));
}
function App() {
  const [loggedIn, setLoggedIn] = React.useState(!!window.PD_START_LOGGED_IN);
  const [active, setActive] = React.useState("incidents");
  const [filter, setFilter] = React.useState("open");
  const [selected, setSelected] = React.useState([]);
  const [openId, setOpenId] = React.useState(null);
  const [showNew, setShowNew] = React.useState(false);
  const [incidents, setIncidents] = React.useState(window.PD_DATA.incidents);
  const [toast, setToast] = React.useState(null);
  const seq = React.useRef(4900);
  const flash = (msg, kind = "success") => {
    setToast({
      msg,
      kind
    });
    clearTimeout(flash._t);
    flash._t = setTimeout(() => setToast(null), 3200);
  };
  const setStatus = (ids, status, verb) => {
    setIncidents(prev => prev.map(i => ids.includes(i.id) ? {
      ...i,
      status
    } : i));
    setSelected([]);
    flash(`${ids.length > 1 ? ids.length + " incidents" : ids[0]} ${verb}.`);
  };
  const ack = ids => setStatus(ids, "acknowledged", "acknowledged");
  const resolve = ids => {
    setStatus(ids, "resolved", "resolved");
    setOpenId(null);
  };
  const toggle = id => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const toggleAll = ids => setSelected(s => ids.every(i => s.includes(i)) ? s.filter(x => !ids.includes(x)) : [...new Set([...s, ...ids])]);
  const createIncident = ({
    title,
    service
  }) => {
    seq.current += 1;
    const inc = {
      id: "INC-" + seq.current,
      title,
      service,
      status: "triggered",
      urgency: "high",
      priority: "P2",
      assignee: window.PD_DATA.user.name,
      created: "just now",
      note: "Manually triggered.",
      alerts: 1
    };
    setIncidents(prev => [inc, ...prev]);
    setShowNew(false);
    setFilter("open");
    flash(inc.id + " triggered — paging on-call.", "danger");
  };
  const openInc = incidents.find(i => i.id === openId) || null;
  if (!loggedIn) return React.createElement(LoginScreen, {
    onLogin: () => setLoggedIn(true)
  });
  return React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-page)"
    }
  }, React.createElement(window.Sidebar, {
    active,
    onSelect: setActive
  }), React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, React.createElement(window.TopBar, {
    title: window.PD_DATA.nav.find(n => n.id === active)?.label || "Incidents",
    onNew: () => setShowNew(true)
  }), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, active === "incidents" ? React.createElement(window.IncidentsScreen, {
    incidents,
    filter,
    onFilter: setFilter,
    selected,
    onToggle: toggle,
    onToggleAll: toggleAll,
    onOpen: setOpenId,
    onAck: ack,
    onResolve: resolve
  }) : React.createElement(Placeholder, {
    name: window.PD_DATA.nav.find(n => n.id === active)?.label,
    icon: window.PD_DATA.nav.find(n => n.id === active)?.icon
  }))), openInc && React.createElement(window.IncidentDetail, {
    incident: openInc,
    onClose: () => setOpenId(null),
    onAck: ack,
    onResolve: resolve
  }), showNew && React.createElement(NewIncidentDialog, {
    onClose: () => setShowNew(false),
    onCreate: createIncident
  }), toast && React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, React.createElement(Toast, {
    kind: toast.kind,
    title: toast.kind === "danger" ? "Incident triggered" : "Done",
    onClose: () => setToast(null)
  }, toast.msg)));
}
function Placeholder({
  name,
  icon
}) {
  return React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      color: "var(--text-tertiary)"
    }
  }, React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-xl)",
      background: "var(--surface-brand-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pd-green)"
    }
  }, React.createElement(Icon, {
    name: icon || "Server1",
    size: 32,
    strokeWidth: 2.2
  })), React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-h3)/1 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, name), React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1 var(--font-sans)"
    }
  }, "This surface is part of the full product — not mocked in this kit."));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/data.js
try { (() => {
// Mock incident data for the Operations Cloud UI kit.
window.PD_DATA = {
  user: {
    name: "Alex Chen",
    team: "SRE"
  },
  nav: [{
    id: "incidents",
    label: "Incidents",
    icon: "Fire"
  }, {
    id: "services",
    label: "Services",
    icon: "Server1"
  }, {
    id: "oncall",
    label: "On-Call",
    icon: "Alarm1"
  }, {
    id: "automation",
    label: "Automation",
    icon: "Workflow"
  }, {
    id: "analytics",
    label: "Analytics",
    icon: "Chart1"
  }, {
    id: "ai",
    label: "AIOps",
    icon: "Sparkle"
  }],
  incidents: [{
    id: "INC-4821",
    title: "Elevated 5xx errors on payments-api",
    service: "payments-api",
    status: "triggered",
    urgency: "high",
    priority: "P1",
    assignee: "Priya Rao",
    created: "2m ago",
    note: "Error rate 8.4% in us-east-1. Latency p99 3.2s.",
    alerts: 14
  }, {
    id: "INC-4820",
    title: "Checkout latency above SLO",
    service: "checkout-web",
    status: "triggered",
    urgency: "high",
    priority: "P2",
    assignee: "Sam Ortiz",
    created: "9m ago",
    note: "p95 latency 1.8s, SLO 800ms.",
    alerts: 6
  }, {
    id: "INC-4819",
    title: "Redis connection pool exhausted",
    service: "cache-cluster",
    status: "acknowledged",
    urgency: "high",
    priority: "P2",
    assignee: "Alex Chen",
    created: "21m ago",
    note: "Scaling replicas; monitoring recovery.",
    alerts: 3
  }, {
    id: "INC-4817",
    title: "Nightly ETL job failed",
    service: "data-pipeline",
    status: "acknowledged",
    urgency: "low",
    priority: "P3",
    assignee: "Dana Lee",
    created: "48m ago",
    note: "Retry scheduled 03:00 UTC.",
    alerts: 1
  }, {
    id: "INC-4814",
    title: "Certificate expiring in 72h",
    service: "gateway",
    status: "resolved",
    urgency: "low",
    priority: "P4",
    assignee: "Priya Rao",
    created: "3h ago",
    note: "Cert rotated via automation runbook.",
    alerts: 1
  }, {
    id: "INC-4809",
    title: "Disk usage 92% on db-primary",
    service: "postgres-db",
    status: "resolved",
    urgency: "high",
    priority: "P2",
    assignee: "Sam Ortiz",
    created: "5h ago",
    note: "Old WAL segments purged; usage 61%.",
    alerts: 2
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/data.js", error: String((e && e.message) || e) }); }

// ui_kits/operations-cloud/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * On screen the document renders as a single continuous sheet on a desk
 * background (Google Docs' pageless view): you scroll one tall page card.
 * There is no manual page-splitting — write the whole document as normal
 * flow inside <doc-page> and the browser's print engine paginates it at
 * export.
 *
 * At print the component injects `@page { size: …; margin: 0 }` (which
 * leaves Chrome no margin box to draw its date/URL/page-count header in)
 * and moves the visual margin onto the sheet's own padding, so the printed
 * page has the same inset you see on screen. Standard break-hygiene rules
 * (`break-inside: avoid` on figures, code blocks, images and table rows;
 * `orphans/widows: 3`) are applied so paragraphs and groups split cleanly.
 * On screen and at print, headings default to `text-wrap: balance` and
 * body text (p, li, blockquote, figcaption) to `text-wrap: pretty`, so
 * the document avoids widowed/orphaned words; the defaults have zero
 * specificity, so any text-wrap you declare on those elements wins.
 * The component also marks the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page size="letter" margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 *
 * Attributes:
 *   size    — letter | a4 | legal (default letter)
 *   orientation — portrait (default) | landscape. For documents built to
 *           export, always set it explicitly. landscape swaps the named
 *           size's dimensions (letter landscape prints 11in × 8.5in).
 *   width / height — explicit CSS lengths, override `size` and
 *           `orientation`: the page IS the design's size (a poster
 *           printed at its true dimensions). With both set, the component
 *           also declares the page box as the preview size (a
 *           `meta[name="omelette-fixed-size"]` it injects at runtime,
 *           never overriding one you author), so the in-app preview
 *           scales the whole sheet into view.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the named
 *           paper: content lays out at exactly this size, and the
 *           component scales it to fit the printable area (centered
 *           horizontally, top-aligned), so e.g. a 960px-wide poster lands
 *           on one Letter page. Both must be set; they do not change the
 *           page box — `size`/`orientation` (or `width`/`height`)
 *           still name the paper. For pages WITHOUT running
 *           header/footer slots — the fit box fills the printable area
 *           and does not subtract slot heights.
 *   margin  — printable inset on every page (default 0.75in); margin="0"
 *           makes pages full-bleed (content then owns its own insets)
 *
 * Running header/footer (optional): give an element `slot="header"` or
 * `slot="footer"` and it repeats on every printed page via
 * `position: fixed`. To keep body text from sliding under it, the
 * component prints inside a single-cell table whose <thead>/<tfoot> are
 * spacers sized to the header/footer height — browsers repeat thead/tfoot
 * on every page, so each sheet's content starts below the header and ends
 * above the footer. On screen the header/footer render once at the
 * top/bottom of the sheet.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks: `break-before: page` on an element that must start
 *   a new page (a chapter, an appendix). Add your own kept-together
 *   blocks (callouts, stat tiles, cards) to a `break-inside: avoid`
 *   rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #ece8dd;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 14px rgba(20, 20, 19, 0.12);
      border-radius: 2px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
      } else if (typeof survivor._syncFixedSizeMeta === 'function') {
        // A departed true-size owner hands the page-global preview meta
        // to whatever true-size page remains (or it's removed).
        survivor._syncFixedSizeMeta();
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      this._vars.textContent = ':host{' + fitVars + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      tag.textContent = '@page { size: ' + this.pageWidth + ' ' + this.pageHeight + '; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-cloud/doc-page.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
