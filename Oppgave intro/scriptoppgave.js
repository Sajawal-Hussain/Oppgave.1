

function ShowintroCard() {
blankAll ();
document.getElementById('cardIntro').innerHTML = /*html*/`
<div class="innerCard">
<li>Jeg heter Sajawal, er 24 år gammel og kommer fra Oslo. Oppvokst på Ellingsrud og Stovner.</li>
</div>
`;
}

function ShowhobbyCard() {
blankAll ();
document.getElementById('cardHobby').innerHTML = /*html*/`
<div class="innerCard">
 <li>I fritiden driver jeg med arbeid på Jysk, i tillegg har jeg nylig startet på Get Academy for å få bedre kompetanse og for å lære mer om det spennende IT yrket.</li>
</div>
`;
}

function ShowphotoCard() {
blankAll ();
document.getElementById('cardPhoto').innerHTML = /*html*/`
<div class="photo">
<img src="img/head2.png"/>
</div>
`;
}

function blankAll () {
    document.getElementById('cardIntro').innerHTML = '';
    document.getElementById('cardHobby').innerHTML = '';
    document.getElementById('cardPhoto').innerHTML = '';
}

let currentcolor;

function Changecolor (color){
     silver = color;
    updateView();
}

function ChangeColor (color){
    document.getElementById('Cards').style.background = color;
    color = 'silver';
}