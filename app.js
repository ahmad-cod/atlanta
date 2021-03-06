// window.onload (
//  darkMode()
// )

const input = document.getElementById('input');
document.getElementById('inpCountry').addEventListener('click', getInpCountry);
document.getElementById('countries').addEventListener('click', getCountries);
let output = document.getElementById('output');

let isDark = document.body.style.background

function getInpCountry() {
    fetch('https://restcountries.eu/rest/v2/name/' + input.value)
    .then( res => res.json())
    .then( data => {
        let outer = "";
        data.forEach((val, country) => {
            outer += `<h3>${data[country].name}; <br> Native-Name: ${data[country].nativeName}</h3>`
            outer += `
            <div class="card card-body mb-5">
            <h5>Flag: 
             <img src="${data[country].flag}" width="150px" height="100px"></h5><br>
            <h5>Region: ${data[country].region}</h5>
            <h5>Capital: ${data[country].capital}</h5>
            <h5>Demonym: ${data[country].demonym}</h5>
            <h5>Calling Code: +${data[country].callingCodes[0]}</h5>
            <h5>Population: ${data[country].population}</h5>
            <h5>Currency: ${data[country].currencies[0].name} (${data[country].currencies[0].symbol})</h5>
            </div>
            `
        });

        document.getElementById('output').innerHTML= outer;
        if(document.body.classList.contains("dark-mode")){
            document.querySelector('.card').style.background = '#222';
            document.querySelectorAll('.card').forEach((val, i) => {
            val.style.background = '#222';})
        }
        else {
            document.querySelector('.card').style.background = "linear-gradient( 45deg, #e0eafc,#cfdef3)";
        }
    } )
    .catch(Error => {console.log('invalid')})
}

function getCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then( data => {
            let outer = "";
            outer += ` <h4 class="mb-4">COUNTRIES</h4> `
            data.forEach( (val, country) => {
               outer += `
                <div class="card card-body mb-3">
                <h5>Country: ${data[country].name}</h5>
                <p>Region: ${data[country].region}</p>
                <h6>Capital: ${data[country].capital}</h6>
                </div>
                `
            })
            document.getElementById('output').innerHTML = outer;
            if(document.body.classList.contains("dark-mode")){
                document.querySelector('.card').style.background = '#222';
                document.querySelectorAll('.card').forEach((val, i) => {
                val.style.background = '#222';})
            }
            else {
                document.querySelector('.card').style.background = "linear-gradient( 45deg, #e0eafc,#cfdef3)";
            }
        })
        .catch(Error => {'invalid'})
         }

    document.getElementById('dark').addEventListener('click', darkMode);
    function darkMode() {
        // if(document.body.style.background == "black") {
        //     document.body.style.background = 'white';
        //     document.body.style.color = 'black';
        // }
         document.body.classList.toggle("dark-mode")
        if(document.body.classList.contains("dark-mode")) {
            document.querySelector("#dark").innerHTML = `<i class="fas fa-sun"></i> Mode`;
            document.querySelector("#dark").style.color = "#eee";
            document.querySelector("#dark").style.background = "#111";
        if( document.querySelector('.card') ) {
           document.querySelector('.card').style.background = '#222';
           document.querySelectorAll('.card').forEach((val, i) => {
           val.style.background = '#222';})}
        }
        
    //     document.body.style.background = 'black';
    //     document.body.style.color = 'white';
    //   
    else {
        document.querySelector("#dark").style.background = "#eee";
        document.querySelector("#dark").innerHTML = `<i class="fas fa-moon"></i> Mode`;
        document.querySelector("#dark").style.color = "#111";
        document.querySelector(".fa-moon").style.color = "#111";
        if( document.querySelector('.card') ) {
          document.querySelector('.card').style.background = "linear-gradient( 45deg, #e0eafc,#cfdef3)";
          document.querySelectorAll('.card').forEach( val => val.style.background = "linear-gradient( 45deg, #e0eafc,#cfdef3)");
    }
    }
    }
