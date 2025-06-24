$(document).ready(function () {
  const p = new URLSearchParams(window.location.search);
  const success = (p.get("success") || "").trim();
  const login = (p.get("login") || "").trim();
  const role = (p.get("role") || "").trim();

  console.log("Debug:", { success, login, role });

  // Simpan role dalam sessionStorage jika login berjaya
  if (login === "success" && role) {
    sessionStorage.setItem("user_role", role);
  }

  // ✅ Popup jika daftar berjaya
  if (success === "1") {
    showPopup("Registration successful! Please log in.");
  }

  // ✅ Popup jika login gagal
  if (login === "fail") {
    showPopup("Incorrect email or password!");
  }

  // ✅ Popup jika login berjaya
  if (login === "success") {
    let message = "";
    if (role === "customer") {
      message = "You are logged in as a Customer.";
    } else if (role === "homestay_owner") {
      message = "You are logged in as a Homestay Owner.";
    } else {
      message = "Successful Login.";
    }

    showPopup(message);

    // Auto redirect after 2.5 seconds
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

  function showPopup(msg) {
    $("#popupMessage").text(msg);
    $("#popupBox").fadeIn();
  }
});
