import { Page } from '@playwright/test';
import { IHomePage } from './IHomePage';
import { ILoginPage } from './ILoginPage';

export interface IFactory {
  LoginPage(): ILoginPage;
  HomePage(): IHomePage;
}
