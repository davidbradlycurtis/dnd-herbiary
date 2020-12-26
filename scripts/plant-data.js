/*

Each plant will have the following information/properties:

name (String): the name of the plant
biome (arr[String]): the biomes the plant can appear [Rainforest, Temperate Forest, Desert, Tundra, Grassland, Savanna, Underdark, Swamp, Any]
type (String): the type of plant [Tree, Fungus, Flower, Herb, Moss, Shrub, Weed, Grass]
rarity (String): the rarity of the plant [Common, Uncommon, Rare, Very Rare, Legendary]
property (arr[String]): shorthand special effect of the plant [Hazardous, Benificial, Material, Neutral, None]
*description (String): the plant appearance, effects, and other important information
    *Not sure about this one, I might make this a seperate file
*/

var plants_data = {

    "Abyssal Blackgrass" : {
        name: "Abyssal Blackgrass",
        biome: "[Underdark]",
        type: "Weed",
        rarity: "Uncommon",
        property: ["Hazardous"],
        description: "Thick black weed native to the Underdark that propagates via tiny seeds. \
        On the surface it appears as 1-foot diamater clumps, but its roots extend\
        in a 50 ft diamater just beneath the surface. Natural healing is prevented\
        when standing above its roots, and magical healing only heals half the\
        normal HP. If the clump is pulled out, the plant survives and regrows the\
        clump in 1d4 days. Only digging up the whole root system or the use of\
        magic can truly kill it."
    }

}