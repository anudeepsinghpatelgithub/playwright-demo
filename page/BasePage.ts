import { Page } from '@playwright/test';
import { IHomePage } from '../factory/IHomePage';
import { ILoginPage } from '../factory/ILoginPage';

export class BasePage {
  constructor(protected page: Page) {}
}
