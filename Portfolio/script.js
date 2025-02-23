// Function to handle tab switching with animation
function openTabs(evt, tabName) {
    let tabContents = document.querySelectorAll(".tabcontents");
    let tabLinks = document.querySelectorAll(".tablinks");
  
    // Hide all tab contents and remove active class
    tabContents.forEach(tab => {
        tab.style.display = "none";
        tab.classList.remove("active");
    });
  
    // Remove "active" class from all tab links
    tabLinks.forEach(tab => {
        tab.classList.remove("active");
    });
  
    // Show the selected tab with a smooth effect
    let activeTab = document.getElementById(tabName);
    activeTab.style.display = "block"; // Make it visible
    setTimeout(() => {
        activeTab.classList.add("active"); // Add animation
    }, 50);
  
    // Add active class to the clicked tab
    evt.currentTarget.classList.add("active");
  }
  
  // Typing effect for changing text
  const roles = [
      "a Designer",
     "an AI Analyst", 
     "a Data Analyst", 
     "a Full Stack Developer"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const textElement = document.getElementById("changing-text");
    let currentText = roles[index];
  
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
  
    textElement.innerHTML = currentText.substring(0, charIndex);
  
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }
  
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
  
  // Start typing effect
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  
    // Navigation indicator effect
    const navLinks = document.querySelectorAll("nav ul li a");
    const navIndicator = document.createElement("div");
    navIndicator.classList.add("nav-indicator");
    document.querySelector("nav ul").appendChild(navIndicator);
  
    function moveIndicator(link) {
        const { left, width } = link.getBoundingClientRect();
        const parentLeft = document.querySelector("nav ul").getBoundingClientRect().left;
        navIndicator.style.width = `${width}px`;
        navIndicator.style.transform = `translateX(${left - parentLeft}px)`;
    }
  
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
  
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
  
            // Add active class to the clicked link
            this.classList.add("active");
  
            // Move the indicator to the active tab
            moveIndicator(this);
        });
    });
  
    // Initialize the indicator position on page load
    const activeLink = document.querySelector("nav ul li a.active");
    if (activeLink) {
        moveIndicator(activeLink);
    }
  });
  