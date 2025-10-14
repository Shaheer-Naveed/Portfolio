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
            height: "100px",
            width: "100%",
            zIndex: 99,  
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
            duration: 0.3,
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
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const projects = [
  {
    title: "Interior Design",
    desc: "A simple and elegant website for an interior design company, built using HTML, CSS, and JavaScript. This project showcases a clean, modern aesthetic with responsive design principles to ensure a seamless experience across all device sizes.",
    link: "https://shaheer-naveed.github.io/Interior-Design/"
  },
  {
    title: "E-Commerce",
    desc: "An interactive e-commerce platform where users can browse products, add them to a virtual shopping cart, and manage their orders. This project demonstrates core web development concepts using HTML, CSS, Java, and PHP, along with a MySQL database for data storage and management.",
    link: "https://art.infinityfree.me/"
  },
  {
    title: "Angular App",
    desc: "This is a simple, static E-Learning platform built using Angular, HTML, and CSS. The platform includes a homepage, course listing, and a basic layout to simulate an educational website. It does not have user authentication or dynamic features at this point, but provides a solid foundation for building more complex features.You can register yourself for listed courses.",
    link: "https://github.com/Shaheer-Naveed/Angular-App"
  },
  {
    title: "Cuberto Clone",
    desc: "A fully responsive landing page inspired by Cuberto, built using HTML, CSS, and JavaScript. It features smooth animations, scroll interactions, and custom UI effects powered by GSAP and Shery.js.",
    link: "https://shaheer-naveed.github.io/Cuberto-Clone/"
  },
  {
    title: "Two Good Clone",
    desc: "A clean and responsive landing page inspired by the aesthetic and interaction style of Two Good Co.. Designed with a modern UI/UX approach using HTML, CSS, and JavaScript — includes animated custom cursor, hover effects, and flexible layout for all screen sizes.",
    link: "https://shaheer-naveed.github.io/Two-Good-Clone/"
  }
];

// Modal Elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close");

// Get all cards
const cards = document.querySelectorAll(".swiper-slide");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalLink.href = project.link;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
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





