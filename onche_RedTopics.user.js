// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule
// @version  0.2
// @grant    none
// @match https://onche.org/forum/1/blabla-general*
// ==/UserScript==

// 0.1 : couleurs du texte
// 0.2 : ajout icone JVC pour les topics (au lieu des avatars)


console.log("starting");

let topics = document.querySelectorAll(".topic");

topics.forEach(topic => {
  let nb = topic.querySelector(".topic-nb");
  let imgAvatar = topic.querySelector("img");
  let ts = topic.querySelector(".topic-subject"); 
  
  if (imgAvatar != null) {
    imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-yellow.png" 
  }
  
  if (parseInt(nb.textContent) > 10) {
    ts.style.color  = "#E99FAA";
    
    if (imgAvatar != null) {
      imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-red.png" 
    }
  } 
  
  if (parseInt(nb.textContent) > 100) {
    ts.style.color  = "#e3ae00";
  }
});
