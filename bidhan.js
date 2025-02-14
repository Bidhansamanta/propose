
document.addEventListener("contextmenu", (event) => event.preventDefault()); // Disable right-click

document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey && (event.key === "u" || event.key === "U" || 
        event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J" ||
        event.key === "s" || event.key === "S" || event.key === "h" || event.key === "H" ||
        event.key === "c" || event.key === "C") || 
        event.key === "F12"
    ) {
        event.preventDefault();
    }
});

// Disable text selection
document.addEventListener("selectstart", (event) => event.preventDefault());

// Disable copy shortcut
document.addEventListener("copy", (event) => event.preventDefault());

// Disable mouse dragging
document.addEventListener("dragstart", (event) => event.preventDefault());