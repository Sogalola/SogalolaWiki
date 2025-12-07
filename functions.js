export function loadImg(name, source){
    document.querySelectorAll('img.' + name).forEach(element => { element.src = source })
}