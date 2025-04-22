class Searchpage{

    get searchBar(){
        return $('android= new UiSelector().text("Search here")')
    }

    async selectStartLocation(){

        const country = `United States`
        await this.searchBar.click()
        await browser.pause(3000)
        await browser.keys(country)
        await browser.pause(1000)
        await browser.keys("Enter")
        await browser.pause(5000)
    }

}

module.exports = new Searchpage()