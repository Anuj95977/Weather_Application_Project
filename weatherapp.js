
const apiKey ="0615a7cdfd1400b327bbf71f0082039b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const flagApi= "https://flagsapi.com/"
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
const backgroundColor = document.querySelector(".card")
const flag= document.querySelector(".flags")
const colors = ["radial-gradient(rgb(204, 229, 200), rgb(77, 200, 77))","radial-gradient(rgb(154, 208, 221),rgb(71, 157, 232))","radial-gradient(rgb(138, 137, 156),#0a1174)"]

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status==404 || searchBox.value==="" ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        const flagLogo= (flagApi+`${data.sys.country}`+"/shiny/64.png")
        flag.src= flagLogo; 
        document.querySelector(".city").innerHTML= data.name    
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML= data.wind.speed+" "+"km/hr";
    
        if(data.weather[0].main==="Clouds"){
        weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main==="Clear"){
        weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main==="Rain"){
        weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main==="Mist"){
        weatherIcon.src="images/mist.png";
        }
        
         function BgColor(){
            return colors[Math.floor(Math.random()*colors.length)] 
        }

        let randomBgColor = BgColor(); 

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        backgroundColor.style.background= "randomBgColor"
        
         searchBtn.addEventListener("click",()=>{
         backgroundColor.style.background= randomBgColor;
            })
    
    }
 }
     
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value)
    })
       
    

