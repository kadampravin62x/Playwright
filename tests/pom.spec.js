import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


test('POM Test', async ({page}) =>{

    await page.goto("https://www.saucedemo.com/");

    const Log= new LoginPage(page);

    await Log.login();


});
