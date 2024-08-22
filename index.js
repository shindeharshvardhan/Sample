/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const searchfld = document.querySelector('#search-fld');


searchfld.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(this.value);
        const query = this.value; // Get the value from the input field
    }
})

//   function search(){
//     fetch('http://universities.hipolabs.com/search?name=middle&country=turkey', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//        .then(response => response.json())
//        .then(response => console.log(JSON.stringify(response)))
//   }
