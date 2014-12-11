"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Inventory
var key_count = 0;
var heart_count = 0;
var gem_count = 0;
var star_count = 0;


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
    if ( protagonist.x === wall_place.x && protagonist.y === wall_place.y) {
    	protagonist.y = 2;
    	protagonist.x = 2;
    	window.alert("You can't walk on walls.")
    }
    //Inventory conditions
    if ( protagonist.x === key_place.x && protagonist.y === key_place.y && key_count===0) {
    	key_count += 1;
    	document.getElementById("keys").innerHTML = key_count+" keys";
    	key_place.x = undefined;
    }
    if ( protagonist.x === star_place.x && protagonist.y === star_place.y){
    	star_count += 1;
    	document.getElementById("stars").innerHTML = star_count+" stars";
    	star_place.x = undefined;
    }
    if ( protagonist.x === heart_place.x && protagonist.y === heart_place.y){
    	heart_count += 1;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    	heart_place.x = undefined;
    }
    if ( protagonist.x === gem_place.x && protagonist.y === gem_place.y){
    	heart_count = heart_count*2;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    	star_count = star_count*2;
    	document.getElementById("stars").innerHTML = star_count+" stars";
    	key_count = key_count*2;
    	document.getElementById("keys").innerHTML = key_count+" keys";
    	gem_place.x = undefined;
    }
    //Game over conditions
    if ( protagonist.x === enemy_1_place.x && protagonist.y === enemy_1_place.y && heart_count===0){
    	document.getElementById("GameOver").innerHTML = "GAME OVER";
    	document.removeEventListener('keydown', key_pressed_down);
    }
    if ( protagonist.x === enemy_2_place.x && protagonist.y === enemy_2_place.y && heart_count===0){
    	document.getElementById("GameOver").innerHTML = "GAME OVER";
    	document.removeEventListener('keydown', key_pressed_down);
    }
    //Game winning conditions
    if ( protagonist.x === selector_place.x && protagonist.y === selector_place.y && star_count>0){
    	document.getElementById("Win").innerHTML = "YOU WON!";
    	document.removeEventListener('keydown', key_pressed_down);
    	terrain[protagonist.y][protagonist.x] = [grass, selector]; //Probably useless now
    }
    //Player defeating enemy/enemies
    if ( protagonist.x === enemy_1_place.x && protagonist.y === enemy_1_place.y && heart_count>0){
    	heart_count -= 1;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
    	enemy_1_place.x = undefined;
    }
    if ( protagonist.x === enemy_2_place.x && protagonist.y === enemy_2_place.y && heart_count>0){
    	heart_count -= 1;
    	document.getElementById("hearts").innerHTML = heart_count+" hearts";
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
       	terrain[door_place.y][door_place.x] = [grass, open_door];
       	door_place.x = -1;
       	door_place.y = -1;
    }
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
    
}

function select_character_cat_girl() {
	protagonist.element = cat_girl;
	occupants[protagonist.y][protagonist.x] = protagonist.element;
	render();
}
function select_character_boy() {
	protagonist.element = boy;
	occupants[protagonist.y][protagonist.x] = protagonist.element;
	render();
}
function select_character_princess_girl() {
	protagonist.element = princess_girl;
	occupants[protagonist.y][protagonist.x] = protagonist.element;
	render();
}
function select_character_horn_girl() {
	protagonist.element = horn_girl;
	occupants[protagonist.y][protagonist.x] = protagonist.element;
	render();
}
function select_character_pink_girl() {
	protagonist.element = pink_girl;
	occupants[protagonist.y][protagonist.x] = protagonist.element;
	render();
}
function possible_reset(){
	if event.keyCode === 82;
	reset();
}
function reset(){
	   	protagonist.x = 2;
		protagonist.y = 2;
		terrain = [
    		[[grass], [grass], [grass], [grass], [grass]],
    		[[grass], [grass], [grass, wood], [grass], [grass, closed_door]],
    		[[grass], [grass, plain], [grass], [grass], [grass]],
    		[[grass], [grass], [grass], [grass], [grass]],
    		[[grass, selector], [grass], [grass], [grass], [grass]],
			];
		occupants = [
    		[star, enemy, undefined, wall, heart],
    		[enemy, key, undefined, undefined, undefined],
    		[undefined, undefined, protagonist.element, undefined, undefined],
    		[undefined, undefined, undefined, undefined, undefined],
    		[undefined, undefined, undefined, undefined, gem],
			];
		key_count = 0;
		gem_count = 0;
		heart_count = 0;
		star_count = 0;
		document.getElementById("keys").innerHTML = key_count+" keys";
		document.getElementById("hearts").innerHTML = heart_count+" hearts";
		document.getElementById("stars").innerHTML = star_count+" stars";
		key_place.x = 1;
		heart_place.x = 4;
		gem_place.x = 4;
		door_place.x = 4;
		door_place.y = 1;
		star_place.x=0;
		enemy_2_place.x = 1;
		enemy_1_place.x = 0;
		document.getElementById("GameOver").innerHTML ="";
		document.getElementById("Win").innerHTML = "";
		document.addEventListener('keydown', key_pressed_down);
}
document.addEventListener('keydown', possible_reset);
document.getElementById("reset_button").addEventListener('click',reset);
document.addEventListener('keydown', key_pressed_down);
document.getElementById("chr_cat_girl").addEventListener('click', select_character_cat_girl);
document.getElementById("chr_boy").addEventListener('click', select_character_boy);
document.getElementById("chr_horn_girl").addEventListener('click', select_character_horn_girl);
document.getElementById("chr_princess_girl").addEventListener('click', select_character_princess_girl);
document.getElementById("chr_pink_girl").addEventListener('click', select_character_pink_girl);