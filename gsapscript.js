// GSAP animation template

// Incoming animation for anchor tags
gsap.from("a", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.15
});

// Animation for paragraphs
gsap.from("p", {
    opacity: 0,
    x: -100,
    duration: 1.8,
    ease: "power3.out"
});

// Alternative paragraph animations
gsap.from(".elem", {
    opacity: 0,
    y: 100,
    duration: 1.8,
    ease: "power3.out"
});

gsap.from("button, #back", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    ease: "elastic.out(1, 0.75)"
});

// Animation for image moving from back to front along the z-axis
// gsap.from("#back", {
//     opacity: 0,
//     z: -500,
//     duration: 1,
//     ease: "power3.out"
// });

// Animation for images
gsap.from(".logo", {
    opacity: 0,
    scale: 0.8,
    duration: 2.2,
    ease: "back.out(1.5)"
});

// Animation for image container
gsap.from("#imagediv", {
    opacity: 0,
    y: -100,
    duration: 2.5,
    ease: "power4.out"
});
