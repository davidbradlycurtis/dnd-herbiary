// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// plat-tags.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
Each plant will have the following attributes:

   $(function() {
        $table = $('#table');
        $table.bootstrapTable({
          data: plants
        });
    });


    // get the reference for the body
    var table = document.getElementById('table');

    // get reference for <table> element
    var tbody = document.getElementById("tbody");

    // creating rows
    for (var r = 0; r < plants.length; r++) {
        var row = document.createElement("tr");

     // create cells in row
         for (let attribute in plants[r]) {
            var cell = document.createElement("td"); 
            var plant = plants[r];
            cell.innerText = plant[attribute];
            row.appendChild(cell);
        }           

        tbody.appendChild(row); // add the row to the end of the table body
    }


name (String): the name of the plant
biome (arr[String]): the biomes the plant can appear [Rainforest, Temperate Forest, Desert, Tundra, Grassland, Savanna, Underdark, Swamp, Any]
type (String): the type of plant [Tree, Fungus, Flower, Herb, Moss, Shrub, Weed, Grass]
rarity (String): the rarity of the plant [Common, Uncommon, Rare, Legendary]
property (arr[String]): shorthand special effect of the plant [Hazardous, Benificial, Material, Neutral, None]

    {
        name: "",
        biome: [""],
        type: "",
        rarity: "",
        property: [""]
    },

*/

var plants = [
    {
        name: "Aadarna",
        biome: "Swamp, Forest",
        type: "Flower",
        rarity: "Very Rare",
        property: "Material"
    },

    {
        name: "Abyssal Blackgrass",
        biome: "Underdark",
        type: "Weed",
        rarity: "Uncommon",
        property: "Hazardous"
    }

]