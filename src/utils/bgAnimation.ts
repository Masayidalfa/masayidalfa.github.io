// utils/bgAnimation.ts
export function initializeBgAnimation(): void {
    const bgAnimation = document.getElementById("bgAnimation");
    if (!bgAnimation) return; // Pastikan elemen ditemukan

    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        bgAnimation.appendChild(colorBox);
    }
}
