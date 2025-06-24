$(document).ready(function () {
  const p = new URLSearchParams(window.location.search);
  const success = (p.get("success") || "").trim();
  const login = (p.get("login") || "").trim();
  const role = (p.get("role") || "").trim();

  // Store role in sessionStorage
  if (login === "success" && role) {
    sessionStorage.setItem("user_role", role);
  }

  // Show popup based on login or registration status
  if (success === "1") {
    showPopup("Registration successful! Please log in.");
  } else if (login === "fail") {
    showPopup("Incorrect email or password!");
  } else if (login === "success") {
    if (role === "customer") {
      showPopup("You are logged in as a Customer.");
    } else if (role === "homestay_owner") {
      showPopup("You are logged in as a Homestay Owner.");
    } else {
      showPopup("Login successful.");
    }

    // Auto-close and redirect after 2.5 seconds
    setTimeout(() => {
      const userRole = sessionStorage.getItem("user_role");

      if (userRole === "homestay_owner") {
        window.location.replace("OwnerDashboardServlet");
      } else if (userRole === "customer") {
        window.location.replace("CustomerDashboardServlet");
      } else {
        window.location.replace("homepage.jsp");
      }
    }, 2500);
  }

  // Show popup function
  function showPopup(msg) {
    $("#popupMessage").text(msg);
    $("#popupBox").fadeIn();
  }
});
