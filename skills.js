document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills-section");
  
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsSection.classList.add("active");
          observer.unobserve(skillsSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
  }
});