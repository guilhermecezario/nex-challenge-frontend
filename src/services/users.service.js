import instance from './base.service';

class UsersService {
  constructor() {
    this.instance = instance;
  }

  getAll(page) {
    return this.instance.get(`api/posts.json?page=${page}`);
  }
}

export default new UsersService();
