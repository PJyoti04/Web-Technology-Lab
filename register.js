const login = document.getElementById("login");
const register = document.getElementById("register");
const entry = document.querySelector(".entry");

login.addEventListener("mouseenter", () => {
  login.style.background = "#f47439fb";
  register.style.background = "transparent";
});

register.addEventListener("mouseenter", () => {
  register.style.background = "#f47439fb";
  login.style.background = "transparent";
});

register.addEventListener("mouseleave", () => {
  register.style.background = "transparent";
  login.style.background = "#f47439fb";
});


//gsap animations

// const logo = document.querySelector(".logo")

let t1 = gsap.timeline()

t1.from(".nav",{
  y : -100,
  opacity : 0,
  duration : 1,
})


t1.from(".nav > *",{
  y : -100,
  opacity : 0,
  duration : 1,
  stagger : 0.2,
})


// t1.from(".logo",{
//   y : -100,
//   opacity : 0,
//   duration : 1,
// })

t1.from(".nav-list a",{
  y : -100,
  opacity : 0,
  duration : 1,
  stagger : 0.2,
})

// t1.from(".entry",{
//   y : -100,
//   opacity : 0,
//   duration : 0.5,
// })


// t1.from("marquee",{
//   x : -1000,
//   opacity : 0,
//   duration : 1,
// })

t1.from(".content",{
  x : 1000,
  opacity : 0,
  duration : 1,
})

// t1.from(".content .header",{
//   x : 500,
//   opacity : 0,
//   duration : 1.5,
// })

gsap.to(".header .head_cv",{
  transform:"translateX(-150%)",
  // x: "100vw",
  duration : 2,
  // opacity : 1,
  scrollTrigger : {
    trigger : ".content",
    scroller : "body",
    pin : true,
    // markers : true,
    scrub : 1,
    start : "top 10%",
    end :"top -120%",
  }
})
