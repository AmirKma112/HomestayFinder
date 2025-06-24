$(document).ready(function () {
  const p = new URLSearchParams(window.location.search);
  const success = (p.get("success") || "").trim();
  const login = (p.get("login") || "").trim();
  const role = (p.get("role") || "").trim();

  console.log("Debug:", { success, login, role });

  // Save role in sessionStorage
  if (login === "success" && role) {
    sessionStorage.setItem("user_role", role);
  }

  if (success === "1") {
    showPopup("Registration successful! Please log in.");
  }

  if (login === "fail") {
    showPopup("Incorrect email or password!");
  }

  if (login === "success") {
    if (role === "customer") {
      showPopup("You are logged in as a Customer.");
    } else if (role === "homestay_owner") {
      showPopup("You are logged in as a Homestay Owner.");
    } else {
      showPopup("Successful Login.");
    }
  }

  $("#popupClose").click(function () {
    $("#popupBox").removeClass("show");

    if (login === "success") {
      const userRole = sessionStorage.getItem("user_role");

      if (userRole === "homestay_owner") {
        window.location.replace("OwnerDashboardServlet");
      } else if (userRole === "customer") {
        window.location.replace("CustomerDashboardServlet");
      } else {
        window.location.replace("homepage.jsp");
      }
    }
  });

  function showPopup(msg) {
    $("#popupMessage").text(msg);
    $("#popupBox").addClass("show");
  }
});
