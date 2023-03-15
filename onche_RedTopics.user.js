// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule
// @version  0.1
// @grant    none
// @match https://onche.org/forum/1/blabla-general*
// ==/UserScript==




console.log("starting");

let topics = document.querySelectorAll(".topic");

topics.forEach(topic => {
  let ts = topic.querySelector(".topic-subject"); 
  
  
  if (parseInt(nb.textContent) > 10) {
    ts.style.color  = "#E99FAA";
  }
  
  if (parseInt(nb.textContent) > 100) {
    ts.style.color  = "#e3ae00";
  }
});
