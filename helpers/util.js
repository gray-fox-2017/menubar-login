module.exports = {
  roleManager(role) {
    let option = [];
    switch (role) {
      case "admin":
        option = ["Home", "Dashboard", "Create User", "Delete User"]
        return option
        break;
      case "supervisor":
        option = ["Home", "Dashboard", "View Report Card"]
        return option
        break;
      case "customer":
        option = ["Home", "Dashboard"]
        return option
        break;
      default:
        return "Home"
    }
  }
};