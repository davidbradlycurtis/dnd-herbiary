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
        biome: "Forest, Swamp",
        type: "Flower",
        rarity: "Very Rare",
        property: "Material",
        description: "A tough plant that grows on the edges of swamps, the stem grows symmetrical pairs of stiff oval leaves. During warmer months the plant blossoms into violet flowers.\
        The large roots of the plant can be ground into a powder and is the main ingredient in a potion that allows other people to see into other realms, often referred to as Sight Beyond.\
        For the next hour after drinking, the vision of the character shifts to the Astral Realm. They may perceive what happens from a position that corresponds to their location in the Material Realm.\
        During that time, they are blind to everything that happens in the Material Realm, including combat."
    },

    {
        name: "Abyssal Blackgrass",
        biome: "Underdark",
        type: "Weed",
        rarity: "Uncommon",
        property: "Hazardous",
        description: "Thick black weed native to the Underdark that propagates via tiny seeds. On the surface it appears as 1-foot diamater clumps, but its roots extend in a 50 ft diamater just beneath the surface.\
        Natural healing is prevented when standing above its roots, and magical healing only heals half the normal HP. If the clump is pulled out, the plant survives and regrows the clump in 1d4 days.\
        Only digging up the whole root system or the use of magic can truly kill it."
    }

]