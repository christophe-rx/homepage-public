let searchTheme = typeof determineComputedTheme === "function" ? determineComputedTheme() : "light";
const ninjaKeys = document.querySelector("ninja-keys");

if (ninjaKeys) {
  if (searchTheme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
}

function openSearchModal() {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  if (ninjaKeys) {
    ninjaKeys.open();
  }
}

// Needed because the header uses an inline onclick="openSearchModal()".
window.openSearchModal = openSearchModal;
