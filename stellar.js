var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrb.style.left = dets.x - 130 + "px";
  crsrb.style.top = dets.y - 130 + "px";
});

gsap.to("#nav", {
  height: "60px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scoller: "body",
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -10%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-us-in", {
  scale: 0.8,
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 90%",
    end: "top 30%",
    scrub: 1,
  },
});
// gsap.from(".card", {
//   scale: 0.8,
//   // opacity:0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // markers:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });
