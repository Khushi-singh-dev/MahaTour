const openSignup = document.getElementById("openSignup");
const signupModal = document.getElementById("signupModal");
const closeSignup = document.getElementById("closeSignup");
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

// Open modal
openSignup.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

// Close modal (X button)
closeSignup.addEventListener("click", () => {
  signupModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});

// Form validation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    formMessage.style.color = "red";
    formMessage.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.style.color = "red";
    formMessage.textContent = "Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    formMessage.style.color = "red";
    formMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Account created successfully! 🎉";

  signupForm.reset();
});