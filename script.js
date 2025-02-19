const target = document.getElementById('target');
function moveTarget(){
    const maxWidth=400;
    const maxHeight=400;
    
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

target.addEventListener('mouseenter',function(){
    moveTarget();
});


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










