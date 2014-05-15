/*!
 * warmyet
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

function app() {

    this.init = function() {
    	var element = document.querySelector( 'h1' );
    	var height = window.innerHeight;
    	element.style['margin-top'] = ((height - 385) / 2 + 'px');
    }

}

window.onresize = function() {
	App.init();
}

var App = new app();
App.init();