"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Inventory
var key_count = 0;
var gem_count = 0;
var heart_count = 0;

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
    
    if (protagonist.x === key_place.x && protagonist.y === key_place.y ) {
    	key_count = key_count + 1;
    	document.getElementById("keys").innerHTML = key_count+" keys";
    }
    if ([protagonist.x]===[gem_place.x]&&[protagonist.y]===[gem_place.y]){
    	gem_count += 1;
    	document.getElementById("gems").innerHTML = gem_count+" hearts";
    }
    if (0===[heart_place.x]&&0===[heart_place.y]){
    	heart_count+=1;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    }
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
    
}

document.addEventListener('keydown', key_pressed_down);
