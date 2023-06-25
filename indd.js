let aispeak= new SpeechSynthesisUtterance();

let voices=[]
let voiceSelect= document.querySelector('select')

window.speechSynthesis.onvoiceschanged=()=>{
    //getVoices== provide all type lang speak
    voices= window.speechSynthesis.getVoices()
    aispeak.voice= voices[0] //start speak default voice

    //to display available voices
    voices.forEach((voice,i)=>(voiceSelect.options[i]
    =new Option(voice.name,i)))
}
//to work with selected voices from options
voiceSelect.addEventListener('change',()=>{
    aispeak.voice= voices[voiceSelect.value]
})

//to listen by default voice
document.querySelector('button').addEventListener('click',()=>{
    aispeak.text= document.querySelector('textarea').value
    window.speechSynthesis.speak(aispeak)
})