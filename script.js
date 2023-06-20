async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'x -RapidAPI-key': 'ea8fcc0be5msh014de60714562cp198165jsn0e43ae48c',
            'x-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
 const res = await fetch('https://concerts-artists-events-tracher.p.rapidapi.com/location?name=Toronto&minDate=2022-10-09&maxDate=2022-10-12&page=1',options)
const record = await res.json()

document.getElementById("concerts").innerHTML = record.data.map(item => item.name);

}
fetchData();