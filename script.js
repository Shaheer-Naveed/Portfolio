gsap.registerPlugin(ScrollTrigger);
//=============Navbar=============
let menu = document.querySelector("#menu");
let cross = document.querySelector("#cross");

// Check screen width and apply appropriate animation
function initAnimations() {
    if (window.innerWidth > 770) {
        // Desktop Timeline
        let tl = gsap.timeline();
        tl.from(".nav", {
            y: -30,
            duration: 0.5,
            opacity: 0,
            stagger: 0.3
        });
        tl.from(".nav-links h4", {
            y: -30,
            duration: 0.5,
            opacity: 0,
            stagger: 0.3
        });
        document.addEventListener("DOMContentLoaded", function () {
          gsap.to(".nav", {
              backgroundColor: "#8462fd",
              height:"100px",
              width:"100%",
              zIndex:1,
              duration: 0.5,
              scrollTrigger: {
                  trigger: "body",
                  start: "top 1%",
                  end: "top -30%",
                  scrub: 1,
              }
          });
      });
    } else {
        // Mobile Timeline
        let tl2 = gsap.timeline({paused:true});

        tl2.to(".nav-links", {
            right: 0,
            duration: 0.8,
            ease: "power2.out"
        });
        tl2.from(".nav-links h4", {
            x: 150,
            duration: 0.5,
            opacity: 0,
            stagger: 0.3

        });
        tl2.from(".nav-links i", {
            opacity: 0
        });
        menu.addEventListener("click", function () {
            menu.style.display="none";
            tl2.play();
        });
        cross.addEventListener("click", function () {
            menu.style.display="block";
            tl2.reverse();

        });
    }
}
initAnimations();
window.addEventListener("resize", () => {
    location.reload();
});
//=============Page1=============
let hero=gsap.timeline();
hero.to("#page1 .left-text",{
  y:80,
  duration:0.8,
  opacity:1,
  stagger:0.5
})

hero.fromTo("#page1 .right-text",
  { y: 150, opacity: 0 },
  { y: 80, opacity: 1, duration: 1, ease: "power2.out" },
);
hero.to(".hero-img",{
  opacity:1
})


//==============string==========

let path = `M 10 150 Q 500 150 999 150`;
let finalpath = path;
let string = document.querySelector(".string");
let svg = string.querySelector("svg");

string.addEventListener("mousemove", function (e) {
  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let newPath = `M 10 150 Q ${x} ${y} 999 150`;

  gsap.to("svg path", {
    attr: { d: newPath },
    duration: 0.5,
    ease: "power2.out"
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalpath },
    duration: 1,
    ease: "elastic.out(1, 0.2)"
  });
});

//==============page2==============
gsap.from(".trait-card", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2",
    start: "top 70%",
    end:"bottom 50%",
    toggleActions: "play reverse play reverse"
  }
});

const heading = document.querySelector("#page2 h1");

if (heading) {
  let span = heading.querySelector("span");
  if (!span) {
    span = document.createElement("span");
    span.textContent = heading.getAttribute("data-text") || "";
    heading.appendChild(span);
  }

  gsap.fromTo(heading,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",

      }
    }
  );
  gsap.fromTo(span,
    { width: 0, opacity: 0 },
    {
      width: "100%",
      opacity: 1,
      duration:2,
      delay:1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page2",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
}


//==============page3===============


const Shead = document.querySelector("#page3 #skills h1");

if (Shead) {
  let span =Shead.querySelector("span");
  if (!span) {
    span = document.createElement("span");
    span.textContent = Shead.getAttribute("data-text") || "";
    Shead.appendChild(span);
  }

  gsap.fromTo(Shead,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
    }
  );
  gsap.fromTo(span,
    { width: 0, opacity: 0 },
    {
      width: "100%",
      opacity: 1,
      duration:2,
      delay:1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page3",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",


      }
    }
  );
}

gsap.utils.toArray(".fill").forEach((bar) => {
  gsap.to(bar, {
    width: bar.getAttribute("data-width"),
    scrollTrigger: {
      trigger: bar,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    duration: 1.5,
    ease: "power2.out"
  });
});

let moreSkills=document.querySelector(".more-skills");
let btn=document.getElementById("toggle");
btn.addEventListener("click",()=>{
  if(moreSkills.style.display==="none"){
    moreSkills.style.display="block";
    btn.innerText="View Less";
    gsap.utils.toArray(".fill").forEach((bar) => {
      gsap.to(bar, {
        width: bar.getAttribute("data-width"),
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        },
        duration: 1.5,
        ease: "power2.out"
      });
    });
  }
  else{
    moreSkills.style.display="none";
    btn.innerText="View More";
  }
})


//=================page4=======================

const Phead = document.querySelector("#page4 h1");

if (Phead) {
  let span =Phead.querySelector("span");
  if (!span) {
    span = document.createElement("span");
    span.textContent = Phead.getAttribute("data-text") || "";
    Phead.appendChild(span);
  }

  gsap.fromTo(Phead,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#page4",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
    }
  );
  gsap.fromTo(span,
    { width: 0, opacity: 0 },
    {
      width: "100%",
      opacity: 1,
      duration:2,
      delay:1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page4",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",


      }
    }
  );
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true
});

//================page5===============

const Chead = document.querySelector("#page5 h1");

if (Chead) {
  let span =Chead.querySelector("span");
  if (!span) {
    span = document.createElement("span");
    span.textContent = Chead.getAttribute("data-text") || "";
    Chead.appendChild(span);
  }

  gsap.fromTo(Chead,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#page5",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
    }
  );
  gsap.fromTo(span,
    { width: 0, opacity: 0 },
    {
      width: "100%",
      opacity: 1,
      duration:2,
      delay:1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page5",
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
    }
  );
}





