const input = document.getElementById('input');
document.getElementById('inpCountry').addEventListener('click', getInpCountry);
document.getElementById('countries').addEventListener('click', getCountries);
let output = document.getElementById('output');


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
             <img src="${data[country].flag}" width="150px" height="120px"></h5>
            <h5>Region: ${data[country].region}</h5>
            <h5>Capital: ${data[country].capital}</h5>
            <h5>Demonym: ${data[country].demonym}</h5>
            <h5>Population: ${data[country].population}</h5>
            <h5>Currency: ${data[country].currencies[0].name}</h5>
            <h5>Capital: ${data[country].capital}</h5>
            </div>
            `
        });
        document.getElementById('output').innerHTML= outer
    } )
    .catch()
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
        })
        .catch(Error => {'invalid'})
    }