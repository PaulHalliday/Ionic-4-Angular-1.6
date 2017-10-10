import UserController from './user.controller.js';
import UserService from './user.service.js';

angular
  .module('userApp', [])
  .controller('UserController', UserController)
  .factory('UserService', UserService);