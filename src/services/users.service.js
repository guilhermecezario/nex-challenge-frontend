import instance from './base.service';

class UsersService {
  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('users');
  }
}

export default new UsersService();
