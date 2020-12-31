// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// plat-tags.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
Each plant will have the following attributes:

name (String): the name of the plant
biome (arr[String]): the biomes the plant can appear [Rainforest, Temperate Forest, Desert, Tundra, Grassland, Savanna, Underdark, Swamp, Any]
type (String): the type of plant [Tree, Fungus, Flower, Herb, Moss, Shrub, Weed, Grass]
rarity (String): the rarity of the plant [Common, Uncommon, Rare, Very Rare, Legendary]
property (arr[String]): shorthand special effect of the plant [Hazardous, Benificial, Material, Neutral, None]

*/

var plant_data = [

    {
        name: "Abyssal Blackgrass",
        biome: ["Underdark"],
        type: "Weed",
        rarity: "Uncommon",
        property: ["Hazardous"],
    }

]