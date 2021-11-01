
// Songs ke masale
let audioElement = new Audio('./Songs/1.mp3');
let songIndex = 1;
let duration = audioElement.duration;


let songArr =[
    {}
]

// dom elements
let masterPlay = document.querySelector('.masterplay')
let progressBar = document.querySelector('#progress_bar');
let c_time = document.querySelector('.current_time');
let next_song = document.querySelector('#nextSong')



// updating Progress bar
let percent=0
const updateProgress=()=>{

    percent+=100/audioElement.duration;
    // console.log(percent)
    progressBar.value = percent

}


let interval =''

// Listen to Events
masterPlay.addEventListener('click',(e)=>{
    if(audioElement.paused){
        audioElement.play();
        masterPlay.innerHTML = '<i class="fas fa-pause-circle masterplay"></i>';
        interval=setInterval(updateProgress,1000)


    }else{
        audioElement.pause();
        masterPlay.innerHTML='  <i class="fas fa-play-circle masterplay"></i>'
        clearInterval(interval)
    }

})





audioElement.addEventListener('timeupdate',(e)=>{

    c_time.innerHTML=Math.floor(audioElement.currentTime)
    
    if(audioElement.currentTime===audioElement.duration){
        c_time.innerHTML="0"
        percent=0
        progressBar.value = 0
        masterPlay.innerHTML='  <i class="fas fa-play-circle masterplay"></i>'
        clearInterval(interval)
    }





  
  
})



next_song.addEventListener("click",()=>{
    audioElement.pause();
    songIndex++;
    clearInterval(interval)
    c_time.innerHTML="0"
    percent=0
    progressBar.value = 0
    masterPlay.innerHTML='  <i class="fas fa-play-circle masterplay"></i>'
    audioElement = new Audio(`./Songs/${songIndex}.mp3`);
})









audioElement.addEventListener('timeupdate',(e)=>{

    c_time.innerHTML=Math.floor(audioElement.currentTime)
    
    if(audioElement.currentTime===audioElement.duration){
        c_time.innerHTML="0"
        percent=0
        progressBar.value = 0
        masterPlay.innerHTML='  <i class="fas fa-play-circle masterplay"></i>'
        clearInterval(interval)
    }





  
  
})



// Progress bar event


progressBar.addEventListener("change",(e)=>{
    let changedTime = e.target.value/100*audioElement.duration
    audioElement.currentTime = changedTime
    percent+=100/audioElement.duration * e.target.value
    




})