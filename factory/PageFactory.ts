import { IHomePage } from './IHomePage';
import { HomePage } from '../page/HomePage';
import { ILoginPage } from './ILoginPage';
import { IFactory } from './IFactory';
import { Page } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { BasePage } from '../page/BasePage';

export class PageFactory implements IFactory {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  LoginPage(): ILoginPage {
    return new LoginPage(this.page);
  }
  HomePage(): IHomePage {
    return new HomePage(this.page);
  }
}
