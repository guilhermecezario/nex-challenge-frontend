import instance from './base.service';

class UsersService {
  constructor() {
    this.instance = instance;
  }

  getAll(name, email) {
    return this.instance.get('users', {
      params: {
        name, email,
      },
    });
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
