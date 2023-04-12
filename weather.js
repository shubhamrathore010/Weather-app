 const API_KEY = `003f1c8b0bb4c249a8ddd568f3b66e46`
 const form = document.querySelector("form")
 const search = document.querySelector("#search")
 const weather = document.querySelector("#weather") 
 let  man = document.querySelector("main")


 const getWeather = async (city) => {       // make fun- getWeather,  
    weather.innerHTML = `<h2> Loading ..<h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; //set uri ,
    const response = await fetch(url);    // fetch data and store in respose varaible 
    const data = await response.json();
    console.log(data);
  
     return showWeather(data)    // in fun- showWeather pass detail in data
    
}

  const showWeather = (data) => {  // a fun for change data in HTML 
    // if(data.main.temp = "20"){
    //     document.man.style.backgroundImage =  "url(/TEMP30.jpg)";
    // } 
    if( data.cod == "404"){     // if cod = 404 or wrong input
        weather.innerHTML = `<h2> City Not Found</h2>`
          return;
    }
    weather.innerHTML = `<div>  // changing data in html
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" style="width: 100px;">
     </div>
          <div class="data">
             <h2>${data.main.temp}&#8451</h2>
             <h4>${data.weather[0].main}</h4>
      </div>`
      
  } 


 form.addEventListener(  // add eventlistner 
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
    
 )
 