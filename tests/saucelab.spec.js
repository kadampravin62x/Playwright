import { test, expect } from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';

test ('test1', async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await InvalidLogin(page);
    await login(page);
    //await expect(page).toHaveTitle("Swag Labs");
    //await AddToCart(page)
    //await Checkout(page)
    //await expect(page).toHaveTitle("Swag Labs");
    /*await page.getByPlaceholder("Username").fill('standard_user')
    await page.getByPlaceholder("Password").fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()*/
}
);

    async function login(page){
    await page.getByPlaceholder("Username").type('standard_user',{delay:200});
    await page.getByPlaceholder("Password").type('secret_sauce',{delay:100});
    await page.getByRole('button',{name:'Login'}).click();
    }

    async function AddToCart(page){
        //await page.locator('.item_4_title_link').first().click();
        await page.getByRole('link',{name:'Sauce Labs Backpack'}).first().click();
        await page.getByRole('button',{name:'Add to cart'}).click();
        await expect(page.locator('#remove')).toHaveText("Remove");
        await page.locator('[data-test="back-to-products"]').click();
        //await expect(page).toHaveTitle("Remove");
        await expect(page).toHaveTitle("Swag Labs");

    }
    async function Checkout(page){
        await page.locator('.shopping_cart_link').click();
        await page.getByRole('button',{name:'checkout'}).click();
        await expect(page.locator('[data-test="title"]')).toHaveText("Checkout: Your Information");
        await page.getByPlaceholder("First Name").type('Pravin',{delay:200});
        await page.getByPlaceholder("Last Name").type('kadam',{dealy:200});
        await page.getByPlaceholder("Zip/Postal Code").type('411040',{delay:200});
        await page.getByRole('button',{name:'continue'}).click();
        await expect(page.locator('[data-test="total-label"]')).toHaveText("Total: $32.39")
        await page.getByRole('button',{name:'finish'}).click();
        await expect(page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!")
        await page.locator('[data-test="back-to-products"]').click();

    }

    async function InvalidLogin(page){
        await page.getByPlaceholder("Username").type('standard_user',{delay:200});
        await page.getByPlaceholder("Password").fill('',{delay:100});
        await page.getByRole('button',{name:'Login'}).click();
        await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Password is required")
        await page.getByPlaceholder("Username").clear();
        await page.getByPlaceholder("Password").clear();
    }


