const apiKey="c3dd008c1b7bd2f819a50b81580f60b0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            } else{
                var data= await response.json();

                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
                document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
                document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src ="./pics/cloudy.png"
                }else if(data.weather[0].main == "Clear"){
                    weatherIcon.src ="./pics/sunny.png"
                }else if(data.weather[0].main == "Rain"){
                    weatherIcon.src ="./pics/rainimg.png"
                }else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src ="./pics/drizzle.png"
                }else if(data.weather[0].main == "Mist"){
                    weatherIcon.src ="./pics/mistimg.png"
                }else if(data.weather[0].main == "Snow"){
                    weatherIcon.src ="./pics/snow.png"
                }
                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
            }
           
        }

        searchbtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })