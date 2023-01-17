import instance from './base.service';

class UsersService {
  constructor() {
    this.instance = instance;
  }

  getAll() {
    return this.instance.get('users');
  }

  findOne(id) {
    return this.instance.get(`users/${id}`);
  }

  create(user) {
    return this.instance.post('users', user);
  }

  update(id, user) {
    return this.instance.put(`users/${id}`, user);
  }
}

export default new UsersService();
