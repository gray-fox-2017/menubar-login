const getMenu = (role) => {
  let menu;
  switch (role) {
    case 'admin' :
      menu = ['Products','Logout']
      break;
    case 'spv':
      menu = ['Employees','Logout']
      break;
    case 'cust':
      menu = ['Cart','Logout']
      break;
    default:
      menu = ['Login']
      break;
  }
  return menu;
}

module.exports = {
  getMenu
}