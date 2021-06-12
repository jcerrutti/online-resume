window.onload = () => {
  const darkModePref = localStorage.getItem("dark-mode");
  if (darkModePref === null) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.getElementById("body").classList.add("dark");
    }
  } else {
    if (darkModePref === "Y") {
      document.getElementById("body").classList.add("dark");
    }
  }
};

const toggleDarkMode = () => {
  const body = document.getElementById("body");
  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("dark-mode", isDarkMode ? "N" : "Y");
  body.classList.toggle("dark");
};
