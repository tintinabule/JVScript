// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule
// @version  0.3
// @grant    none
// @match https://onche.org/forum/1/blabla-general*
// ==/UserScript==



///////////////// PARAMS

// Mettre à 0 pour ne pas changer les avatars des topics en une icone de fichier
let changeImage = 1






//////////////// HISTORIQUE
// 0.1 : couleurs du texte
// 0.2 : ajout icone JVC pour les topics (au lieu des avatars)
// 0.3 : changeImage pour désactiver les icones de dossier, 




///////////////// CODE, ne pas modifier


let topics = document.querySelectorAll(".topic");

topics.forEach(topic => {
  let nb = topic.querySelector(".topic-nb");
  let imgAvatar = topic.querySelector("img");
  let ts = topic.querySelector(".topic-subject"); 
  
  if (imgAvatar != null && changeImage!=0) {
    imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-yellow.png" 
  }
  
  if (parseInt(nb.textContent) > 10) {
    ts.style.color  = "#E99FAA";
    
    if (imgAvatar != null  && changeImage!=0) {
      imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-red.png" 
    }
  } 
  
  if (parseInt(nb.textContent) > 100) {
    ts.style.color  = "#e3ae00";
  }
});
