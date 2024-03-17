import {countries} from "../data/countries.js";

const ddlCountries =document.querySelector("#ddlCountries");
const tblCountry =document.querySelector("#tblCountry");

ddlCountries.addEventListener("change",(e)=>{
    const selectedValue = e.target.value
    const selectedCountry = getCountry(selectedValue);
    fillCountryTable(selectedCountry)
   

})

const loadData = () =>{

    let options ="<option value ='' disabled selected> select a country</option>";
    countries.sort();
    for (const country of countries) {
        options += `<option value="${country.cca2}">${country.name.common}</option>`; 
    }
    
    ddlCountries.innerHTML = options;
}
const fillCountryTable =(country)=>{
    const capitalCity = country.capital.join("-");
    const currency= Object.keys(country.currencies).join("-");
    // const currencyValue = Object.values(country.currencies);
    // console.log(currencyValue)
    const languages = Object.values(country.languages).join("-");
    // console.log(languages)
    const area = country.area?country.area:"N/A" ;
    const map = `<a href="https://google.com/maps?q=${country.latlng}" target="_blank"> go to map</a>`;
    tblCountry.querySelector("tr:nth-child(1) td").innerHTML = capitalCity;
    tblCountry.querySelector("tr:nth-child(2) td").innerHTML = currency;
    tblCountry.querySelector("tr:nth-child(3) td").innerHTML = languages;
    tblCountry.querySelector("tr:nth-child(4) td").innerHTML = area;
    tblCountry.querySelector("tr:nth-child(5) td").innerHTML = map;
    tblCountry.style.display = "block"

}
const getCountry = (countryCode)=>{
    const filteredCountries = countries.filter((country)=> country.cca2  === countryCode);
    return  filteredCountries.length>0 ?  filteredCountries[0] : null;
}

loadData();