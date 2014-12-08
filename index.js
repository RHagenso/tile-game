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
    //Inventory conditions
    if ( protagonist.x === key_place.x && protagonist.y === key_place.y && key_count===0) {
    	key_count += 1;
    	document.getElementById("keys").innerHTML = key_count+" keys";
    	//commented out for testing: occupants[door_place.y][door_place.x] = open_door;
    	//render();
    }
    if ( protagonist.x === gem_place.x && protagonist.y === gem_place.y){
    	gem_count += 1;
    	document.getElementById("gems").innerHTML = gem_count+" gems";
    }
    if ( protagonist.x === heart_place.x && protagonist.y === heart_place.y){
    	heart_count += 1;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    }
    if ( protagonist.x === star_place.x && protagonist.y === star_place.y){
    	heart_count = heart_count*2;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    	gem_count = gem_count*2;
    	document.getElementById("gems").innerHTML = gem_count+" gems";
    	key_count = key_count*2;
    	document.getElementById("keys").innerHTML = key_count+" keys";
    }
    //Game over conditions
    if ( protagonist.x === enemy_1_place.x && protagonist.y === enemy_1_place.y && gem_count===0){
    	document.getElementById("GameOver").innerHTML = "GAME OVER";
    	document.removeEventListener('keydown', key_pressed_down);
    }
    if ( protagonist.x === enemy_2_place.x && protagonist.y === enemy_2_place.y && gem_count===0){
    	document.getElementById("GameOver").innerHTML = "GAME OVER";
    	document.removeEventListener('keydown', key_pressed_down);
    }
    //Player defeating enemy/enemies
    if ( protagonist.x === enemy_1_place.x && protagonist.y === enemy_1_place.y && gem_count>0){
    	gem_count -= 1;
    	document.getElementById("gems").innerHTML = gem_count+" gems";
    	enemy_1_place.x = undefined;
    }
    if ( protagonist.x === enemy_2_place.x && protagonist.y === enemy_2_place.y && gem_count>0){
    	gem_count -= 1;
    	document.getElementById("gems").innerHTML = gem_count+" gems";
    	enemy_2_place.x = undefined;
    }
    //Opening door(s)
    if (protagonist.x === door_place.x && protagonist.y === door_place.y && key_count===0) {
    	protagonist.y = 2;
    	protagonist.x = 2;
    	window.alert("Not enough keys, try again.")
    }
    if (protagonist.x === door_place.x && protagonist.y === door_place.y && key_count>0) {
       	key_count -= 1;
       	document.getElementById("keys").innerHTML = key_count+" keys";
    }
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
    
}

function select_character(selection) {
	protagonist.element = selection;
	render();
}
document.addEventListener('keydown', key_pressed_down);
chr_cat_girl.addEventListener('click',select_character(cat-girl));
chr_boy.addEventListener('click',select_character(boy));
chr_horn_girl.addEventListener('click',select_character(horn-girl));
chr_princess_girl.addEventListener('click',select_character(princess-girl));
chr_pink_girl.addEventListener('click',select_character(pink-girl));

