class Homepage{

    get googleMaps(){
        return $("~Maps")
    }

    async getScreenDimensions(){
        const{width,height} = await driver.getWindowRect();
        return {width,height}
    }


    async openGoogleMaps(){
        await this.googleMaps.click()
        await browser.pause(3000)
    }

    async navigateToAfrica(){

        const {width,height} = await this.getScreenDimensions()
        
        await driver.performActions([{
            type:"pointer",
            id: "finger",
            parameters: {pointerType:"touch"},
            actions:[

                //finger-tap on empty space
                {type:"pointerMove",duration:0,x:width* 0.237962,y:height*0.4461538},
                {type:"pointerDown",button:0},
                {type:"pointerUp",button:0},

                {type:"pause",duration:3000},

                //navigate to Africa

                    //scroll to the left 1
                    {type:"pointerMove",duration:0,x:width*0.871296,y:height*0.76623931},
                    {type:"pointerDown",button:0},
                    {type:"pointerMove",duration:2000,x:width*0.0305,y:height*0.76623931},
                    {type:"pointerUp",button:0},

                    {type:"pause",duration:3000},

                    //scroll to the left 2

                    {type:"pointerMove",duration:0,x:width*0.871296,y:height*0.76623931},
                    {type:"pointerDown",button:0},
                    {type:"pointerMove",duration:1000,x:width*0.34,y:height*0.76623931},
                    {type:"pointerUp",button:0},

                    {type:"pause",duration:3000},

                    //centralize Africa's map
                    {type:"pointerMove",duration:0,x:width*0.1527,y:height*0.8128205},
                    {type:"pointerDown",button:0},
                    {type:"pointerMove",duration:500,x:width*0.1527,y:height*0.655},
                    {type:"pointerUp",button:0},

                    {type:"pause",duration:3000}


            ]
            
        }])

            await driver.releaseActions()
            await browser.pause(1000)

    }

    async zoomInOnNigeria(){

        const{width,height} = await this.getScreenDimensions()
     
         let i = 0;

         while (i<10){
             
             await driver.performActions([
                 {
                     type:"pointer",
                     id:"finger 1",
                     parameters:{pointerType:"touch"},
                     actions:[
                         {type:"pointerMove",duration:0,x:width*0.45,y:height*0.5},  
                         {type:"pointerDown",button:0},
                         {type:"pointerMove",duration:500,x:width*0.25,y:height*0.3},  
                         {type:"pointerUp",button:0}
                     ]
                 },
                 
                 
                 {
                     type:"pointer",
                     id:"finger 2",
                     parameters:{pointerType:"touch"},
                     actions:[
                         {type:"pointerMove",duration:0,x:width*0.55,y:height*0.5},  
                         {type:"pointerDown",button:0},
                         {type:"pointerMove",duration:500,x:width*0.75,y:height*0.7}, 
                         {type:"pointerUp",button:0}
                     ]
                 }

             ])



             i++
         }

         await browser.pause(3000)
         await driver.releaseActions()
    }

    async closeGoogleMaps(){
         const googleMaps =  "com.google.android.apps.maps"
         await driver.terminateApp(googleMaps)
         await driver.pressKeyCode(3)
    }

}

module.exports = new Homepage()