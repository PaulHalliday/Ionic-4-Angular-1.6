export default class UserController {

  constructor(userService) {
    this.userService = userService;

    this.people = [];

    this.getUsers();
  }

  getUsers() {
    this.userService.get()
      .then(users => this.people = users);
  }

}

UserController.$inject = ['UserService'];