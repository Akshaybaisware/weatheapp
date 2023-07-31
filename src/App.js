import React,{useState} from "react";



const App = () =>  {
 const [latitude , setLatitude]= useState("");
 const [longitude , setLongitude] =useState("");
 const [hemisphere , setHemisphere] =useState("");
 const [month , setMonth]= useState(new Date().getMonth());



function getgeolocation()
{
    // if (navigator.geolocation) // ye inbuild method from javascript
    //{
         navigator.geolocation.getCurrentPosition( // ye teeno inbuild method from javascriot
            (location) =>{
                //latitude and longitude ki value store krne ke liye use state use hui hai
                        setLatitude(location.coords.latitude); // lat
                        setLongitude(location.coords.longitude);
          
                        if(latitude>0)
                        {
                        setHemisphere("Northern Hemisphere")
                        }
               
                        else if(latitude<0)
                        {
                           setHemisphere("Southern Hemisphere")
                        }
                        else {
                           setHemisphere("Equator")
                        }
                    }
         )


         
    //}
}

    return    (
        <div>
               <h1>Latitude:{latitude}</h1>
               <h1>Longitude:{longitude}</h1>
               <h1>Hemisphere:{hemisphere}</h1>
               <h1>Month:{month}</h1>
           <button onClick={getgeolocation}>Get locationn</button>
        </div>
    )
}
export default App;