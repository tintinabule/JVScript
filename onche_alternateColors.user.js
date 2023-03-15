// ==UserScript==
// @name     [ONCHE]_AlternateColors
// @author 	 tintinabule
// @version  0.1
// @grant    none
// @match https://onche.org/topic*
// ==/UserScript==

let msgs = document.querySelectorAll(".message:not([class*=\" \"])");

for (var i = 0; i < msgs.length; i += 2) {
  msg0 = msgs[i];
  msg0.style.background = "#363e49"; 
  msg1 = msgs[i+1];
  msg1.style.background = "#2e3238"; 
};
