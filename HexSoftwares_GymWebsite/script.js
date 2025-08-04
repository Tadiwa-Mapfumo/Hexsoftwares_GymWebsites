// Function to smoothly scroll to a section by its ID
function scrollToSection(id) {
  // Get the DOM element by the given ID
  const el = document.getElementById(id);
  if (el) {
    // Scroll to the element with a smooth animation
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Wait until the DOM content is fully loaded before executing animations
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'animate-on-scroll'
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Create a new IntersectionObserver to watch when elements come into view
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      // Check if the element is currently visible in the viewport
      if (entry.isIntersecting) {
        // Add the 'in-view' class to trigger a CSS animation
        entry.target.classList.add("in-view");
        // Stop observing the element once it has been animated
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe each animated element using the IntersectionObserver
  animatedElements.forEach(el => observer.observe(el));
});
