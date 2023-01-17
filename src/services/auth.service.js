import instance from './base.service';

class AuthService {
  constructor() {
    this.instance = instance;
  }

  session(user) {
    return this.instance.post('sessions', user);
  }
}

export default new AuthService();
