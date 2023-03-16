// ==UserScript==
// @name     [ONCHE]_RedTopics
// @author 	 tintinabule, Annapurna
// @version  0.12
// @grant    none
// @match https://onche.org/forum/*
// @match https://onche.org/topic/*
// ==/UserScript==
 
 
 
///////////////// PARAMS
 
// Mettre à 0 pour ne pas changer les avatars des topics en une icone de fichier
let changeImage = 1;
 
//old style mettre à 1 pour avoir les anciennes icones
let oldstyle = 0;
 
//à mettre à 0 si vous ne voulez pas que les flammes (topics très actifs) soit remplacées par une icone de fichier
let deleteflames = 1;
 
//nombre de posts avant qu'un topic devienne rouge
let nbPostsRedTopic = 20;
 
// à mettre à 1 si vous voulez changer l'icone des topics avec plus de 100 posts (icône noire)
let enableGoldenTopics = 0;
 
//à mettre à 0 pour désactiver le changement de couleur du texte (topics rouges et goldens)
let enableColorChanger = 0;
 
//à mettre à 0 si vous voulez désactiver les modifications de fond (couleurs améliorées + alternances de couleurs liste sujet)
let enableBackgroundModifier = 1;
 
 
 
 
//////////////// HISTORIQUE
// 23.03.16
// 0.12 : correction de la couleur de fond des icônes
// 0.11 : amélioration de chacun des thèmes (base utilisée : https://jvscript.fr/script/onche-alternatecolors)
// 0.10 : exclusion des topics épinglés
// 23.03.15
// 0.9 : remplacement des flammes par des icônes de fichiers
// 0.81 : ajout de différents paramètres réglables par l'utilisateur
// 0.8 : ajout d'une icône pour les topics golden
// 0.6 : Ajout ancien style de dossiers
// 0.5 : alterner les background
// 0.4 : match marche sur tous les sous-forums
// 0.3 : changeImage pour désactiver les icones de dossier, 
// 0.2 : ajout icone JVC pour les topics (au lieu des avatars)
// 0.1 : couleurs du texte

 
 
///////////////// CODE, ne pas modifier
 
 
let topics = document.querySelectorAll(".topic");
 
topics.forEach(topic => {
  let nb = topic.querySelector(".topic-nb");
  let imgAvatar = topic.querySelector("img");
  let imgTopicHot = topic.querySelector(".mdi-fire");  
 
  if(imgTopicHot != null){
    let parentElement = topic.querySelector('.mdi-fire').parentElement;
    let newImgElement = document.createElement('img');
    imgAvatar = newImgElement;
    parentElement.replaceChild(imgAvatar, topic.querySelector('.mdi-fire'));
  }
  let ts = topic.querySelector(".topic-subject"); 
 
  if (imgAvatar != null && changeImage!=0) {
      if (oldstyle == 1) {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/old-folder-yellow.png" 
      } else {
      	imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-yellow.png" 
      }  }
 
  if (parseInt(nb.textContent) > nbPostsRedTopic) {
    if (imgAvatar != null  && changeImage!=0) {
      //topics golden
      if (parseInt(nb.textContent) > 100 && enableGoldenTopics == 1) {
        imgAvatar.alt = 'Topic golden';
        if(enableColorChanger == 1){
          ts.style.color  = "#e3ae00";
        }
        if (oldstyle == 1){
          imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/WRCVouE.png"
        }
        else{
          imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/WfqEdtt.png"
        }
      }
      else if(parseInt(nb.textContent) < 100){
        imgAvatar.alt = 'Topic rouge';
        if(enableColorChanger == 1){
            ts.style.color  = "#E99FAA";
        }
        if (oldstyle == 1) {
        imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/old-folder-red.png" 
        } else {
          imgAvatar.src = "https://raw.githubusercontent.com/tintinabule/JVScript/main/img/rectangle-red.png" 
        }
      }
    }
  }
  else if(parseInt(nb.textContent) <= nbPostsRedTopic && imgAvatar != null)
  {
    imgAvatar.alt = 'Topic jaune';
  }
  if(imgAvatar != null)
  {
    //supprime le fond des icônes
    imgAvatar.style.background = 'none';
  }
});
 
 
let changeBackground = document.querySelector("#theme-button");
const body = document.querySelector('body');
const form = document.querySelector('#post');
let bodyClass = null;
 
function alternate() {
    if(bodyClass == null){
      bodyClass = document.querySelector("body").className;
    }
    let color1;
    let color2;
    let color3;
    let color4;
    let color5;
    'use strict';
 
    if(body.classList.contains('grey')){
        color1 = "rgb(46, 50, 56)"; //alternance topics 
        color2 = "rgb(54, 62, 73)"; //couleur générale + couleur messages 
        color3 = "rgb(74, 76, 79)"; //contours 
        color4 = "rgb(107, 145, 183)"; //texte date/heure post
        color5 = "rgb(83 174 255)"; //texte sujets*/
        document.getElementById("content").style.background = "#22252a";
        form.querySelector("input").style.background = "#303236";
        form.querySelector(".textarea").style.background = "#303236";
        form.querySelector(".favoriteStickers").style.background = "#303236";
    }
    else if(body.classList.contains('blue')){
        color1 = "rgb(28, 43, 58)"; //alternance topics
        color2 = "rgb(38, 53, 68)"; //couleur générale + couleur messages
        color3 = "rgb(48, 63, 78)"; //contours
        color4 = "rgb(107, 145, 183)"; //texte 
        color5 = "rgb(83 174 255)"; //texte sujets*/
        document.getElementById("content").style.background = "#141c25";
        form.querySelector("input").style.background = "#141c25";
        form.querySelector(".textarea").style.background = "#141c25";
        form.querySelector(".favoriteStickers").style.background = "#141c25";
    }
    else{
        color1 = "rgb(232, 237, 251)"; //alternance topics 
        color2 = "rgb(249, 249, 249)"; //couleur générale + couleur messages 
        color3 = "rgb(209, 209, 209)"; //contours 
        color4 = "rgb(107, 145, 183)"; //texte date/heure post
        color5 = "rgb(83 174 255)"; //texte sujets*/
        document.getElementById("content").style.background = "#d4d7df";
        form.querySelector("input").style.background = "#f3f4f6";
        form.querySelector(".textarea").style.background = "#f3f4f6";
        form.querySelector(".favoriteStickers").style.background = "#f3f4f6";
    }
 
    //Forum
    Array.from(document.querySelectorAll(".bloc")).map(x => x.style= "background-color: "+color2)
    Array.from(document.querySelectorAll(".topic:nth-child(odd)")).map(x => x.style= "background-color: "+color1)
    Array.from(document.querySelectorAll(".topic-subject link")).map(x => x.style.color=color5)
 
 
    Array.from(document.querySelectorAll(".input")).map(x => x.style.border="solid 1px "+color3)
    Array.from(document.querySelectorAll(".textarea")).map(x => x.style.border="solid 1px "+color3)
    Array.from(document.querySelectorAll(".bloc")).map(x => x.style.border="solid 1px "+color3)
    Array.from(document.querySelectorAll("#post")).map(x => x.style.border="solid 1px "+color3)
 
    // Message
    Array.from(document.querySelectorAll(".message")).map(x => x.style= "background-color: "+color2)
    Array.from(document.querySelectorAll(".message")).map(x => x.style.border="solid 1px "+color3)
    Array.from(document.querySelectorAll(".message")).map(x => x.style.margin="0 0 15px")
    Array.from(document.querySelectorAll(".message-date")).map(x => x.style="font-size:.7rem")
    Array.from(document.querySelectorAll(".message-date")).map(x => x.style.border="solid 1px "+color3)
    Array.from(document.querySelectorAll(".message-date")).map(x => x.style.color=color4)
}
 
if(enableBackgroundModifier == 1){
    alternate();
}
 
/*pour cette partie un peu de bricolage car y a un bug pénible, en gros le classname du body (qui détermine le style de
la page > sombre/bleu/clair) n'est modifié dans cette ligne 'document.querySelector("body").className' qu'à partir 
du deuxième clic (alors qu'il est bel et bien modifié dans le DOM).
Admettons qu'au chargement de la page je sois en bleu, après le premier clic, lorsque je veux check le classname
ça me dit toujours bleu alors que le thème a changé.
après ça change bien mais c'est décalé de 1 dans ce que m'affiche le classname par rapport à ce qu'il y a dans le DOM
(indique)blue > (est affiché)grey
grey > white
white > blue
donc je force le décalage à la main*/
 
changeBackground.onclick = function () {
  if(enableBackgroundModifier == 1){
    if(document.querySelector("body").className.includes("blue")){
        body.classList.remove('blue');
        body.classList.add('grey');
    }
    else if(document.querySelector("body").className.includes("grey")){
        body.classList.remove('grey');
    }
    else{
        body.classList.add('blue');
    }
    alternate();
  }
};
