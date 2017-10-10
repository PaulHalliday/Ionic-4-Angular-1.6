export default class UserService {

  constructor($http) {
    this.http = $http;
  }

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data);
  }

}

UserService.$inject = ['$http'];