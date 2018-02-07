$(function () {

  // Let's further improve the Pokédex while diving deeper into AJAX with jQuery.
  var pokeapi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapi).done(function(data) {
    console.log(data);  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);

      var paragraph = $("<p>")
          .html("Pokémon species no. " + (index+1) + " is ")
          .append(link);
      paragraph.appendTo("#pokedex");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    console.log("Pokémon is awesome.")
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#pokemon-details");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      console.log(details);  // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

});

// Capitalizes a given string.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
