module.exports = {
  menuBar(role) {
    let option = []
    switch (role) {
      case 'admin':
        option = [{
          'menuName': 'Profile',
          'link': '/profile',
          'icon': ''
        }, {
          'menuName': 'All Transaction',
          'link': '/transaction/all',
          'icon': ''
        }, {
          'menuName': 'This Month Transaction',
          'link': '/transaction/this-month',
          'icon': ''
        }, {
          'menuName': 'Categories',
          'link': '/categories',
          'icon': ''
        }]
        return option
        break;
      default:
        option = [{
          'menuName': 'My Profile',
          'link': '/profile',
          'icon': ''
        }, {
          'menuName': 'My Transaction',
          'link': '/transaction/all',
          'icon': ''
        }, {
          'menuName': 'This Month Transaction',
          'link': '/transaction/this-month',
          'icon': ''
        }]
        return option
    }
  }

}
