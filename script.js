const NomedaMusica = document.getElementById('nome_da_musica');
const NomedaBanda = document.getElementById('nome_da_banda');
const musica =  document.getElementById('musica');
const capa = document.getElementById('capa_musica');
const play = document.getElementById('play');
const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const barraprogresso = document.getElementById('progresso_corrido');
const preenchimento_barra = document.getElementById('preenchimento_barra');
const Embaralhar = document.getElementById('embaralhar');
const repitir = document.getElementById('repetir');
const tempoMusica = document.getElementById('tempo_musica');
const tempoTotal = document.getElementById('tempo_total');
const Like = document.getElementById('like');

const So_Quiet = {
    NomedaMusica : "So Quiet",
    artista : "Cobra Ramone",
    File: "So Quiet",
    gostei : false  
}

const The_Devil_You_Know = {
    NomedaMusica : "The Devil You Know",
    artista : "Blues Saraceno",
    File: "The Devil You Know",
    gostei : false  
}

const Too_Good_to_Be_True = {
    NomedaMusica : "Too Good to Be True",
    artista : "Lon Rogers & The Soul Blenders",
    File: "Too Good to Be True",
    gostei : false  
}

const Bad_Boys = {
    NomedaMusica : "Bad Boys",
    artista : "April Wine",
    File: "Bad Boys",
    gostei : false  
}

const Not_Unusua = {
    NomedaMusica : "It's Not Unusual",
    artista : "Glee Cast",
    File: "It's Not Unusual",
    gostei : false  
 }

const Too_Sexy = {
    NomedaMusica : "I'm Too Sexy",
    artista : "Rigth Said Fred",
    File: "I'm Too Sexy",
    gostei : false  
 }

const Who_Do_You_Love = {
    NomedaMusica : "Who Do You Love",
    artista : "George Thorogood & The Destroyers",
    File: "Who Do You Love",
    gostei : false  
 }

const Man_in_the = {
    NomedaMusica : "Man In The Wilderness",
    artista : "Styx",
    File: "Man In The Wilderness",
    gostei : false  
 }

const Slow_rize = {
    NomedaMusica : "Slow Ride",
    artista : "Foghat",
    File: "Slow Ride",
    gostei : false  
 }

const Smoke_on_the_Water = {
   NomedaMusica : "Smoke on the Water",
   artista : "Deep Purple",
   File: "Smoke on the Water",
   gostei : false  
}

const Knockin = {
   NomedaMusica : "Knockin' On Heaven's Door",
   artista : "Guns N' Roses",
   File: "Knockin' On Heaven's Door",
   gostei : false  
}

const Thunder_Kiss = {
    NomedaMusica : "Thunder Kiss '65",
    artista : 'White Zombie',
    File: "Thunder Kiss '65",
    gostei : false  
}

const Hells_Bells = {
    NomedaMusica : 'Hells Bells',
    artista : 'AC/DC',
    File: 'Hells Bells',
    gostei : false  
}

const Stranglehold = {
    NomedaMusica : 'Stranglehold',
    artista : 'Ted Nugent',
    File: 'Stranglehold',
    gostei : false 
}

const MetalHealth = {
    NomedaMusica : 'Metal Health',
    artista : 'Quiet Riot',
    File: 'Metal_Health',
    gostei : false 
}

const CarryonWaywardSon = {
    NomedaMusica : 'Carry on Wayward Son',
    artista : 'Cansas',
    File: 'Carry_on_Wayward_Son',
    gostei : false
};

const Cherrypie = {
    NomedaMusica : 'Cherry Pie',
    artista : 'Warrant',
    File: 'Cherry_Pie',
    gostei: false
};

let tacando_playlist = false;
let tocando_musica = false;
let repetir_ligado = false;
const playlist = [MetalHealth, Stranglehold, Hells_Bells, Thunder_Kiss, Knockin, Smoke_on_the_Water, Slow_rize, Man_in_the, Who_Do_You_Love, Too_Sexy, Not_Unusua, Bad_Boys, Too_Good_to_Be_True, The_Devil_You_Know, So_Quiet, CarryonWaywardSon, Cherrypie];
let sortear_playlist = [...playlist];
let index = 0;

function playmusica(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    musica.play();
    tocando_musica = true;
}

function pausemusica(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    musica.pause();
    tocando_musica = false;
}

function play_e_pause(){
    if(tocando_musica === true){
        pausemusica();
    }
    else{
        playmusica();
    }
}

function Click_botão_like(){
    if(sortear_playlist[index].gostei === false){
        sortear_playlist[index].gostei = true;
    }
    else{
        sortear_playlist[index].gostei = false;
    }
    Botão_like();
    localStorage.setItem('playlist', JSON.stringify(playlist));
}

function Botão_like(){
    if(sortear_playlist[index].gostei === true){
        Like.querySelector('.bi').classList.remove('bi-heart');
        Like.querySelector('.bi').classList.add('bi-heart-fill');
        Like.classList.add('ativar_botão');
    } 
    else {
        Like.querySelector('.bi').classList.add('bi-heart');
        Like.querySelector('.bi').classList.remove('bi-heart-fill');
        Like.classList.remove('ativar_botão');
    }
}

function iniciarmusica(){
    capa.src = `imagens/${sortear_playlist[index].File}.png`;
    musica.src = `musica/${sortear_playlist[index].File}.mp3`;
    NomedaMusica.innerText = sortear_playlist[index].NomedaMusica;
    NomedaBanda.innerText = sortear_playlist[index].artista;
    Botão_like();
}

function musicaAnterior(){
    if(index === 0){
        index = sortear_playlist.length - 1;
    }
    else{
        index = index - 1;
    }
    iniciarmusica();
    playmusica();
}

function musicaProxima(){
    if(index === sortear_playlist.length - 1){
        index = 0;
    }
    else{
        index = index + 1;
    }
    iniciarmusica();
    playmusica();
}

function atualizarbarraprogresso(){
   const andamentobarra = (musica.currentTime/musica.duration)*100;
   barraprogresso .style.setProperty('--progresso',`${andamentobarra}%`);
   tempoMusica.innerText = HHMMSS(musica.currentTime);
}


function PularPara(event){
    const Largura = preenchimento_barra.clientWidth;
    const Posição_Click = event.offsetX;
    const PularParaTempo = (Posição_Click/Largura)* musica.duration;
    musica.currentTime = PularParaTempo
}

function embaralhar_Array(Antes_embaralhar_Array){
    const size = Antes_embaralhar_Array.length;
    let corrigir_index = size - 1;
    while(corrigir_index > 0){
        let index_Aleatorio = Math.floor(Math.random()* size);
        let auxiliar = Antes_embaralhar_Array[corrigir_index];
        Antes_embaralhar_Array[corrigir_index] = Antes_embaralhar_Array[index_Aleatorio];
        Antes_embaralhar_Array[index_Aleatorio] = auxiliar;
        corrigir_index -= 1;
    } 

}

function embaralhar_click(){
    if(tacando_playlist === false){
        tacando_playlist = true;
        embaralhar_Array(sortear_playlist);
        Embaralhar.classList.add('ativar_botão');
    }
    else{
        tacando_playlist = false;
        sortear_playlist = [...playlist];
        Embaralhar.classList.remove('ativar_botão');
    }

}

function botão_repetir(){
    if(repetir_ligado === false){
        repetir_ligado = true;
        repitir.classList.add('ativar_botão');
    }
    else{
        repetir_ligado = false;
        repitir.classList.remove('ativar_botão');
    }
}

function proxima_ou_repetir(){
    if(repetir_ligado === false){
        musicaProxima();
    }
    else{
        playmusica();
    }
}

function HHMMSS(NumeroOriginal){
    let horas = Math.floor(NumeroOriginal / 3600);
    let minutos = Math.floor((NumeroOriginal - horas * 3600) / 60);
    let segundos = Math.floor(NumeroOriginal - horas * 3600 - minutos * 60);
    
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function atualizarTempoTotal(){
    tempoTotal.innerText = HHMMSS(musica.duration);
}

iniciarmusica();

play.addEventListener('click', play_e_pause);
proximo.addEventListener('click', musicaProxima);
anterior.addEventListener('click', musicaAnterior);
musica.addEventListener('timeupdate', atualizarbarraprogresso);
musica.addEventListener('ended',proxima_ou_repetir);
musica.addEventListener('loadedmetadata',atualizarTempoTotal);
preenchimento_barra.addEventListener('click', PularPara);
Embaralhar.addEventListener('click',embaralhar_click);
repitir.addEventListener('click',botão_repetir);
Like.addEventListener('click',Click_botão_like);

