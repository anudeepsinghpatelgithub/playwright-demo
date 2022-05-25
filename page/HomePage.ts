import { IHomePage } from '../factory/IHomePage';
import { BasePage } from './BasePage';

export class HomePage extends BasePage implements IHomePage {
  async getFirstName2(): Promise<string> {
    return await this.page.innerText(`xpath=//a[@href='/login']`);
  }
}
