module.exports = {
  assignMenu(role) {
    let menu = [];
    switch (role){
      case "admin":
        menu = ['Dashboard', 'Initiate Nuclear War', 'Help Syrian Refugees'];
        break;
      case "supervisor":
        menu = ['Dashboard', 'Trump\'s Talk', 'Destroy Russia'];
        break;
      default:
        menu = ['Suffer in Life'];
    };
    return menu;
  }
};
