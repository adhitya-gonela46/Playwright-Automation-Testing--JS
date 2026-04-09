//@ts-nocheck
export class AppPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.cartIcon = '.shopping_cart_link';
  }

  //Login Action
  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  //Common Navigation
  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  //Reusable Interaction
  async clickElement(selector) {
    await this.page.click(selector);
  }
}