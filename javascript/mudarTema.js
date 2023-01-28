const chk = document.getElementById('chk');

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('light');
    document.getElementById('musica').classList.toggle('musica_light');
});