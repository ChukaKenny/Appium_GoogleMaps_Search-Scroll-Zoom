const Homepage = require("../pageobjects/googleMaps_Homepage")
const Searchpage = require("../pageobjects/googleMaps_Searchpage")

describe('fingerGestures',()=>{

    it('Zoom',async ()=>{
         
            await Homepage.openGoogleMaps()
            await Searchpage.selectStartLocation()
            await Homepage.navigateToAfrica()
            await Homepage.zoomInOnNigeria()
            await Homepage.closeGoogleMaps()     
           
    })  


})