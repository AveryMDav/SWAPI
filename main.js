const residentButton = document.querySelector(".getResidents")

function buttonClick(){
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
        const residents = res.data.results[0].residents
        // console.log(residents)
     for (i=0; i<residents.length; i++){
         axios.get(residents[i]).then((res) =>{
             console.log(res.data)
             var h2 = document.createElement('h2');
             h2.textContent = res.data.name;
             h2.setAttribute = ('class', 'residentName');
             document.body.appendChild(h2);
         })
     }
    })
    .catch(error => {console.log(error)})
}

residentButton.addEventListener('click', buttonClick)



// Now you’ll modify the function to make an axios call to SWAPI

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get request for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.