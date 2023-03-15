// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule
// @version  0.1
// @grant    none
// @match https://onche.org/forum/1/blabla-general*
// ==/UserScript==




console.log("starting");
let topics = document.querySelectorAll(".topic-subject");

topics.forEach(topic => {
  let nb = topic.querySelector(".topic-nb");
  if (parseInt(nb.textContent) > 10) {
    topic.style.color  = "red";
  }
});
