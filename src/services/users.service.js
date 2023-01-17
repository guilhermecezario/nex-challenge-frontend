import instance from './base.service';

class UsersService {
  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('users');
  }

  create(user) {
    return this.instance.post('users', user);
  }
}

export default new UsersService();
