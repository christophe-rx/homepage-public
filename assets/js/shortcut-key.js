// Search chip: show the platform's modifier key.
// The markup lives in _includes/header.liquid; this only swaps the label so the
// styling in _sass/_refined.scss applies identically on both platforms.
document.addEventListener("readystatechange", () => {
  if (document.readyState !== "interactive") return;
  const modifier = document.querySelector("#search-toggle .nav-link [data-shortcut-mod]");
  if (!modifier) return;
  const isApple = /MAC|IPHONE|IPAD|IPOD/.test((navigator.platform || "").toUpperCase());
  if (isApple) {
    modifier.textContent = "\u2318"; // command
  }
});
