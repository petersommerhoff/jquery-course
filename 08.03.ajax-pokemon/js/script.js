$(function () {

  // As another example of AJAX calls in jQuery, we access the PokéAPI to build
  // a Pokédex.

  var pokeapi = "https://pokeapi.co/api/v2/generation/1";

  $.getJSON(pokeapi).done(function(data) {
    console.log(data);  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);
      var paragraph = $("<p>").html("Pokémon species no. " + (index+1) + " is " + name);
      paragraph.appendTo("#pokedex");
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    console.log("Pokémon is awesome.")
  });

});

// Capitalizes a given string.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
