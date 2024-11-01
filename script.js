function initializeScrollAnimation() {
    const vw = window.innerWidth;  // Get current viewport width
    const vh = window.innerHeight; // Get current viewport height
  
    const mainElement = document.querySelector('.main');
    const parentElement = document.querySelector('.parent');
  
    if (window.matchMedia("(max-width: 600px)").matches) {
      // Calculate scroll distance for mobile (vertical scroll)
      const contentHeight = mainElement.scrollHeight; // Total height of scrolling content
      const scrollDistance = contentHeight - vh; // Total scroll height minus viewport
  
      // Mobile screens (scroll vertically)
      gsap.to(".main", {
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: `+=${scrollDistance}px`, // End based on total content height
          scrub: 1,
          pin: true,
        },
        y: -scrollDistance + "px", // Scroll vertically based on content height
      });
    } else {
      // Calculate scroll distance for larger screens (horizontal scroll)
      const contentWidth = mainElement.scrollWidth; // Total width of scrolling content
      const scrollDistance = contentWidth - vw; // Total scroll width minus viewport
  
      // Larger screens (scroll horizontally)
      gsap.to(".main", {
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: `+=${scrollDistance}px`, // End based on total content width
          scrub: 1,
          pin: true,
        },
        x: -scrollDistance + "px", // Scroll horizontally based on content width
      });
    }
  }
  
  // Call function on page load
  initializeScrollAnimation();
  
  // Cursor tracking animation
  document.querySelectorAll(".work-info").forEach((elem) => {
    const imageCursor = elem.querySelector(".image-cursor");
  
    elem.addEventListener("mousemove", (event) => {
      const rect = elem.getBoundingClientRect();
  
      const mouseX = event.clientX - rect.left; 
      const mouseY = event.clientY - rect.top;
  
      const limitedX = Math.max(
        0,
        Math.min(
          mouseX - imageCursor.offsetWidth / 2,
          rect.width - imageCursor.offsetWidth
        )
      );
      const limitedY = Math.max(
        0,
        Math.min(
          mouseY - imageCursor.offsetHeight / 2,
          rect.height - imageCursor.offsetHeight
        )
      );
  
      gsap.to(imageCursor, {
        opacity: 1,
        ease: "power1.out",
        top: limitedY,
        left: limitedX,
      });
    });
  
    elem.addEventListener("mouseleave", () => {
      gsap.to(imageCursor, {
        opacity: 0,
        ease: "power1.out",
      });
    });
  });
  
  // Menu button toggle animation
  let menubtn = document.querySelector(".ri-menu-line");
  let flag = 0;
  
  menubtn.addEventListener("click", () => {
    if (flag == 0) {
      gsap.to(".menu-info", {
        top: "0%",
      });
      flag = 1;
    } else {
      gsap.to(".menu-info", {
        top: "-100%",
      });
      flag = 0;
    }
  });
  