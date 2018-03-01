$(document).ready(function(){
    console.log('poweroverwhelming...')

    for(var i=1;i<152;i++){
        $('.images').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="${i}">`);
    }

    $(document).on('click','img',function(){
        var imgClass = $(this).attr('class')
        $('.info').html(`<div class="loader"></div>
        </div><p>Loading...</p>`)
        $.get(`https://pokeapi.co/api/v2/pokemon/${$(this).attr('class')}/`, function(res){
            var typesStr = "";  
            for(var i = 0; i < res['types'].length; i++) {
                typesStr += `<li>${res.types[i]['type']['name']}</li>`
            }
            $(".info").html(`
            <h1>Pokedex</h1>
            <h2>${res['name']}</h2>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgClass}.png">
            <h4>Types</h4>
            <ul>
            ${typesStr}
            </ul>
            <h4>Height</h4>
            <p>${res['height']}</p>
            <h4>Weight</h4>
            <p>${res.weight}</p>`
            );

        }, "json");
    })    
})