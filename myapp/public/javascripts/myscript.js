function changeDiv(){
    if (document.getElementById('container').style.background!='red') {
        document.getElementById('container').style.background='red';
    } else {
        document.getElementById('container').style.background='green';
    }
}

var el = document.getElementById('container');
if (el){
    el.addEventListener('click', changeDiv);
}