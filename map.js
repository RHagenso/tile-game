"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Initial map

var row_count = 5;
var column_count = 5;
var terrain = [
    [[grass], [grass], [grass], [grass], [grass]],
    [[grass], [grass], [grass, wood], [grass], [grass, closed_door]],
    [[grass], [grass, plain], [grass], [grass], [grass]],
    [[grass], [grass], [grass], [grass], [grass]],
    [[grass, selector], [grass], [grass], [grass], [grass]],
];
var occupants = [
    [heart, enemy, undefined, wall, gem],
    [enemy, key, undefined, undefined, undefined],
    [undefined, undefined, boy, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, star],
];
var protagonist = {
    element: boy,
    x: 2,
    y: 2,
};

var key_place = {
	element: key,
	x: 1,
	y: 1,
};

var selector_place = {
	element: selector,
	x: 0,
	y: 4,
};

var gem_place = {
	element: gem,
	x: 4,
	y: 0,
};

var enemy_1_place = {
	element: enemy,
	x: 0,
	y: 1,
};

var enemy_2_place = {
	element: enemy,
	x: 1,
	y: 0,
};

var star_place = {
	element: star,
	x: 4,
	y: 4,
};

var heart_place = {
	element: heart,
	x: 0,
	y: 0,
};

var door_place = {
	element: closed_door,
	x: 4,
	y: 1,
};

var wall_place = {
	element: wall,
	x: 3,
	y: 0,
};

// Map utilities

function get_terrain_cell(x, y) {
    var terrain_row = terrain[y];
    if (terrain_row === undefined) {
        return undefined;
    }
    return terrain_row[x];
}

function is_in_bounds(x, y) {
    return get_terrain_cell(x, y) !== undefined;
}

function get_terrain_height(x, y) {
    var terrain_cell = get_terrain_cell(x, y);
    if (terrain_cell === undefined) {
        return undefined;
    }
    return terrain_cell.length;
}

function is_terrain(x, y, z) {
    if (z < 0) {
        return true;
    }
    var terrain_cell = get_terrain_cell(x, y);
    if (terrain_cell === undefined) {
        return false;
    }
    return terrain_cell[z] !== undefined;
}
