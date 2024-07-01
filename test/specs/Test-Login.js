import cartPage from '../pageobjects/cart.page.js'
import dashboardPage from '../pageobjects/dashboard.page.js'
import login from '../pageobjects/login.page.js'

describe('T1 - Standard User', () => {
    it('Succesfull Login', async () => {
        await login.open()
        await login.login('standard_user','secret_sauce')
        await dashboardPage.ValidateDashboard()
    })

    it('Add to Cart', async() => {
        await dashboardPage.AddtoCart()
        await dashboardPage.ValidateCart()
        await cartPage.ValidateCart()
    });

    it('Remove From Cart', async() => {
        
    });
})