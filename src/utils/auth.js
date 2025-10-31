export const logout = () => {
  localStorage.removeItem("authToken");
  // Optional: redirect to login page
  window.location.href = "/login";
};
