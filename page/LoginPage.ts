import { ILoginPage } from '../factory/ILoginPage';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage implements ILoginPage {
  async getFirstName(): Promise<string> {
    return await this.page.innerText(`xpath=//a[@href='/orders']`);
  }
}
