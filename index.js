"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Inventory
var keys = 0;
var gems = 0;
var hearts = 0;
var key_count = 0;
var heart_count = 0;
var gem_count = 0;


// Interaction

var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;

function key_pressed_down(event) {
    occupants[protagonist.y][protagonist.x] = undefined;
    if (event.keyCode === left_arrow_key) {
        if (is_in_bounds(protagonist.x - 1, protagonist.y)) {
            protagonist.x = protagonist.x - 1;
        }
    }
    if (event.keyCode === right_arrow_key) {
        if (is_in_bounds(protagonist.x + 1, protagonist.y)) {
            protagonist.x = protagonist.x + 1;
        }
    }
    if (event.keyCode === up_arrow_key) {
        if (is_in_bounds(protagonist.x, protagonist.y - 1)) {
            protagonist.y = protagonist.y - 1;
        }
    }
    if (event.keyCode === down_arrow_key) {
        if (is_in_bounds(protagonist.x, protagonist.y + 1)) {
            protagonist.y = protagonist.y + 1;
        }
    }
    if ( protagonist.x === key_place.x && protagonist.y === key_place.y && key_count===0) {
    	keys += 1;
    	document.getElementById("keys").innerHTML = keys+" keys";
    	key_count = 1;
    	door_place.element = open_door;
    	render();
    }
    if ( protagonist.x === gem_place.x && protagonist.y === gem_place.y && gem_count===0){
    	gems += 1;
    	document.getElementById("gems").innerHTML = gems+" gems";
    	gem_count = 1;
    }
    if ( protagonist.x === heart_place.x && protagonist.y === heart_place.y && heart_count===0){
    	hearts+=1;
    	document.getElementById("hearts").innerHTML = hearts+" hearts";
    	heart_count = 1;
    }
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
    
}

function select_character(selection) {
	protagonist.element = selection;
	render();
}
document.addEventListener('keydown', key_pressed_down);
element.addEventListener('click',select_character(chr_cat_girl));
element.addEventListener('click',select_character(chr_boy));
chr_horn_girl.addEventListener('click',select_character(chr_horn_girl));
chr_princess_girl.addEventListener('click',select_character(chr_princess_girl));
chr_pink_girl.addEventListener('click',select_character(chr_pink_girl));

