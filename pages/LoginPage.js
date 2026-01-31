import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = '#username';
    this.password = '#password';
    this.loginButton = 'button[type="submit"]';
    this.message = '#flash';
    this.logoutButton = 'a[href="/logout"]';
  }
 
  async openLogin() {
    await this.open('/login');
  }

  async login(username, password) {
    await this.type(this.username, username);
    await this.type(this.password, password);
    await this.click(this.loginButton);
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}
