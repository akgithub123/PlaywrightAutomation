const {test, expect} = require('@playwright/test')
//import { LoginPage } from '../Pageobjects/LoginPage';
const {LoginPage} = require ('../Pageobjects/LoginPage')
const loginPage = new LoginPage(page)

test('first playwright test for browser context', async ({browser})=>{

    
    //this we use when user wants to open fresh browser page without coockies
   const newVar = await browser.newContext();
   const page = await newVar.newPage();
   const userName = page.locator("input#username")
   const cardTitle = page.locator('h4.card-title a')
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await page.locator("input#username").fill("rahulshetty")
   await page.locator('[type="password"]').fill("learning")
   await page.locator('#signInBtn').click()
   console.log(await page.locator("[style*='block']").textContent())  // here textContent method will extract / Grab a text from that element 
   await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.")

   //signIn with valid cred and get first element title text 
   loginPage.validLogin('rahulshettyacademy', 'learning')
   console.log(await cardTitle.first().textContent())
   console.log(await cardTitle.nth(1).textContent())
   // to get text of all tiltles 
   console.log(await cardTitle.allTextContents()) 

   await page.pause()
})

test.skip('test 2', async({page})=>{
    await page.goto("https://google.com/")
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
})

test.only('radio buttons and dropdowns', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("input#username").fill("rahulshettyacademy")
    await page.locator('[type="password"]').fill("learning")
    //await page.locator('#signInBtn').click()
    await page.locator("select.form-control").selectOption("teach")
    await page.locator('span.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await expect(page.locator('span.radiotextsty').last()).toBeChecked()    // This is assertion to check if it is checked or not
    console.log(await page.locator('span.radiotextsty').last().isChecked())         //this will return boolean value
    await page.locator('#terms').click()
    await expect(page.locator('#terms')).toBeChecked()
    await page.locator('#terms').uncheck()
    expect(await page.locator('#terms').isChecked()).toBeFalsy()
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')

    await page.pause()

})

test('Handling child windows', async({browser})=>{



})