import LoginPage from '../pages/login.page.js';
import MainPage from '../pages/main.page.js';
import LoginInvalidPage from '../pages/loginInvalid.page.js';
import ShoppingCartPage from '../pages/shoppingCart.page';
import CheckoutPage from '../pages/checkout.page';
import OverviewPage from '../pages/overview.page.js';

const STANDARD_USER = 'standard_user';
const PASSWORD = 'secret_sauce';
const WRONG_PASSWORD = 'wrongPassword';
const FIRST_NAME = 'First Name';
const LAST_NAME = 'Last Name';
const ZIP_CODE = '12345';

fixture('Login Tests').page('https://www.saucedemo.com/');

test.skip('Successful login', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await t.expect(await MainPage.isMainPageLoaded()).ok();
});

test.skip('Invalid login', async t =>{
    await LoginInvalidPage.loginInvalid(STANDARD_USER, WRONG_PASSWORD);
    await t.expect(await LoginInvalidPage.isErrorDisplayed()).ok();
});

test.skip('Log out from main page', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.logout();
    t.expect(await LoginPage.loginButton.exists);
});

test.skip('Go to Cart Page', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await ShoppingCartPage.goShoppingCart();
    await t.expect(await ShoppingCartPage.isShoppingCartPageLoaded()).ok();
});

test.skip('Add one item to cart', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAnItem();
    await t.expect(await ShoppingCartPage.isAnItemInCart()).ok(); 
});

test.skip('Add all items to cart', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAllItemstoCart();
    await t.expect(await ShoppingCartPage.areAllItemsInCart()).ok();
});

test.skip('Get Error continuing with missing info', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAllItemstoCart();
    await ShoppingCartPage.goShoppingCart();
    await ShoppingCartPage.isShoppingCartPageLoaded();
    await ShoppingCartPage.goCheckoutPage();
    await CheckoutPage.isCheckoutPageLoaded();
    await CheckoutPage.writeInfoNames(FIRST_NAME, LAST_NAME);
    await CheckoutPage.clickInContinueCheckout();
    await t.expect(await CheckoutPage.isErrorDisplayedCheckout()).ok(); 
});

test.skip('Fills users information', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAllItemstoCart();
    await ShoppingCartPage.goShoppingCart();
    await ShoppingCartPage.isShoppingCartPageLoaded();
    await ShoppingCartPage.goCheckoutPage();
    await CheckoutPage.isCheckoutPageLoaded();
    await CheckoutPage.writeInfoNames(FIRST_NAME, LAST_NAME);
    await CheckoutPage.writeZipCode(ZIP_CODE);
    await CheckoutPage.clickInContinueCheckout();
    await t.expect(await OverviewPage.isCheckoutOverviewLoaded()).ok();
});

test('Validate added items match', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAllItemstoCart();
    await ShoppingCartPage.goShoppingCart();
    await ShoppingCartPage.isShoppingCartPageLoaded();
    await ShoppingCartPage.goCheckoutPage();
    await CheckoutPage.isCheckoutPageLoaded();
    await CheckoutPage.writeInfoNames(FIRST_NAME, LAST_NAME);
    await CheckoutPage.writeZipCode(ZIP_CODE);
    await CheckoutPage.clickInContinueCheckout();
    await OverviewPage.isCheckoutOverviewLoaded();
    await t.expect(await OverviewPage.allItemsAddedMatch()).ok();
    
});

test.skip('Complete a purchase', async t =>{
    await LoginPage.login(STANDARD_USER, PASSWORD);
    await MainPage.isMainPageLoaded();
    await MainPage.addAllItemstoCart();
    await ShoppingCartPage.goShoppingCart();
    await ShoppingCartPage.isShoppingCartPageLoaded();
    await ShoppingCartPage.goCheckoutPage();
    await CheckoutPage.isCheckoutPageLoaded();
    await CheckoutPage.writeInfoNames(FIRST_NAME, LAST_NAME);
    await CheckoutPage.writeZipCode(ZIP_CODE);
    await CheckoutPage.clickInContinueCheckout();
    await OverviewPage.isCheckoutOverviewLoaded();
    await OverviewPage.clickFinishOrderButton();
    await t.expect(await OverviewPage.isOrderFinished()).ok();
});

