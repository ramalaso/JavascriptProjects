const insert = document.getElementById('insert')
const key = document.getElementById('key')
const keyCode = document.getElementById('eventKeyCode')
const eventCode = document.getElementById('eventCode')

window.addEventListener('keydown', (e)=>{
    console.log(e);
    key.innerHTML = ' ' ? 'Space' : e.key;
    keyCode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
})