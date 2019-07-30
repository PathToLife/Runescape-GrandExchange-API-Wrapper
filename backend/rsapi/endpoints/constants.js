const BaseURL = "http://services.runescape.com/";
const ItemRoute = "m=itemdb_rs/api/catalogue/items.json?";

const GECategories = {
    Miscellaneous: 0,
    Ammo: 1,
    Arrows: 2,
    Bolts: 3,
    Construction_materials: 4,
    Construction_projects: 5,
    Cooking_ingredients: 6,
    Costumes: 7,
    Crafting_materials: 8,
    Familiars: 9,
    Farming_produce: 10,
    Fletching_materials: 11,
    Food_and_drink: 12,
    Herblore_materials: 13,
    Hunting_equipment: 14,
    Hunting_produce: 15,
    Jewellery: 16,
    Mage_armour: 17,
    Mage_weapons: 18,
    Melee_armour_low_level: 19,
    Melee_armour_mid_level: 20,
    Melee_armour_high_level: 21,
    Melee_weapons_low_level: 22,
    Melee_weapons_mid_level: 23,
    Melee_weapons_high_level: 24,
    Mining_and_smithing: 25,
    Potions: 26,
    Prayer_armour: 27,
    Prayer_materials: 28,
    Range_armour: 29,
    Range_weapons: 30,
    Runecrafting: 31,
    Runes_Spells_and_Teleports: 32,
    Seeds: 33,
    Summoning_scrolls: 34,
    Tools_and_containers: 35,
    Woodcutting_product: 36,
    Pocket_items: 37,
    Stone_Spirits: 38,
    Salvage: 39
};

module.exports = {
    BaseURL, ItemRoute, GECategories
};