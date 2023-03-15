// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule
// @version  0.6
// @grant    none
// @match https://onche.org/forum/*
// ==/UserScript==



///////////////// PARAMS

// Mettre à 0 pour ne pas changer les avatars des topics en une icone de fichier
let changeImage = 1

//old style mettre à 1 pour avoir les anciennes icones
let oldstyle = 1





//////////////// HISTORIQUE
// 15.03
// 0.1 : couleurs du texte
// 0.2 : ajout icone JVC pour les topics (au lieu des avatars)
// 0.3 : changeImage pour désactiver les icones de dossier, 
// 0.4 : match marche sur tous les sous-forums
// 0.5 : alterner les background
// 0.6 : Ajout ancien style de dossiers


///////////////// CODE, ne pas modifier


let topics = document.querySelectorAll(".topic");

topics.forEach(topic => {
  let nb = topic.querySelector(".topic-nb");
  let imgAvatar = topic.querySelector("img");
  let ts = topic.querySelector(".topic-subject"); 
  
  if (imgAvatar != null && changeImage!=0) {
      if (oldstyle == 1) {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/old-folder-yellow.png" 
      } else {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-yellow.png" 
      }  }
  
  if (parseInt(nb.textContent) > 10) {
    ts.style.color  = "#E99FAA";
    
    if (imgAvatar != null  && changeImage!=0) {
      if (oldstyle == 1) {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/old-folder-red.png" 
      } else {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-red.png" 
      }
    }
  } 
  
  if (parseInt(nb.textContent) > 100) {
    ts.style.color  = "#e3ae00";
  }
});


//alternate background
let msgs = document.querySelectorAll("div.topic");

for (var i = 0; i < msgs.length; i += 2) {
  msg0 = msgs[i];
  msg0.style.background = "#363e49"; 
  msg1 = msgs[i+1];
  msg1.style.background = "#2e3238"; 
};
