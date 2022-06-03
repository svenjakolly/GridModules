//let base_url = 'https://api.open-meteo.com'
//let query = '/v1/forecast?latitude=46.9480&longitude=7.4481&hourly=temperature_2m'
function request_cat_facts() {

    let base_url = 'https://cat-fact.herokuapp.com'
    let query = '/facts'

    fetch(base_url + query) //request schicken
        .then(function(response) { //warten auf response
            return response.json() //gib mir die response in (hier json)-format raus
        })
        .then(function(data) { //was machen wenn die daten gesammelt sind
            //console.log(data) //zeig mir 
            build_facts(data)
        })
        .catch(function(error) {
            console.log(error)
        })


}

function build_facts(data) {
    let cat_facts_div = document.querySelector('.cat-facts') //Zugriff auf html div
        //console.log(data)
    for (let i = 0; i < data.length; i++) {
        let data_point = data[i]
        console.log(data_point['text'])
            //virtuelles div bauen in javascript
        let cat_fact = document.createElement('div')
            //text einfügen
        cat_fact.textContent = data_point['text']
            //in das oben gewählt html element einfügen
        cat_facts_div.appendChild(cat_fact)

    }
}

function request_coffee() {
    let base_url = 'https://coffee.alexflipnote.dev'
    let query = '/random.json'

    fetch(base_url + query)
        .then(
            function(response) {
                return response.json()
            })

    .then(function(data) {
        build_coffee(data)
    })

    .catch(
        function(error) {
            console.log(error)
        })

}

function build_coffee(data) {
    console.log(data['file'])
    let coffee_div = document.querySelector('.coffee')
    let coffee_img = document.createElement('img')
    coffee_img.src = data['file']
    coffee_div.appendChild(coffee_img)
}


window.onload = function() { //function wenn fenster geladen

    let coffee_button = document.querySelector('.kafi')
    console.log(coffee_button)
    coffee_button.addEventListener('click', request_coffee) //passiert wenn click




}