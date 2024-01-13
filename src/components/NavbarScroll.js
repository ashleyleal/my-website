import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const sectionRefs = useRef([]); 
  const navLinkRefs = useRef([]); 

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = "";
      sectionRefs.current.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop) {
          currentSectionId = section.getAttribute("id");
        }
      });
  
      navLinkRefs.current.forEach((navLink, index) => {
        if (navLink.getAttribute('href') === '#' + currentSectionId) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {}
    </div>
  );
}