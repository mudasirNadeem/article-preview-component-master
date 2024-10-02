function papupShow(){
    var papup = document.getElementById('papup');
    if(papup.classList.contains('d-none')){
        papup.classList.remove('d-none');
    }
    else{
        papup.classList.add('d-none');
}
}