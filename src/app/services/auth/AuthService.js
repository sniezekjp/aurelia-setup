class AuthService {
  constructor() {
    this.authKey = "token";
  }

  login(user, pass, cb) {
    localStorage.setItem(this.authKey, true);
    cb();
  }

  logout(cb) {
    localStorage.removeItem(this.authKey);
    cb();
  }
}

// AuthService is a singleton
export default new AuthService();