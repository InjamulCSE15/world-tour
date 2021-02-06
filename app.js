fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class = "country-name"> ${country.name} </h3>
        <p class = "country-capital"> ${country.capital}</p>
        <button onclick = "displayCountryDetail('${country.name}')"> More Details... </button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => renderCountryInfo(data[0]));

}
const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1> ${country.name} </h1>
    <p>Population: ${country.population} </p>
    <p> Area: ${country.area} </p>
    <img src = "${country.flag}" >
    `;
}