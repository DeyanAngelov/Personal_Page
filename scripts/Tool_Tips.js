function tooltipPopUp(imgId, appId){
    var image = document.getElementById(imgId);
    var tooltip = document.createElement('span');
    tooltip.innerHTML = image.alt;
    tooltip.className = "tool-tip";
    var pointer = document.createElement('span');
    pointer.className = "pointer-class";
    tooltip.appendChild(pointer);
    document.getElementById(appId).appendChild(tooltip);
    image.addEventListener('mouseout',function(){
        tooltip.parentNode.removeChild(tooltip)
    });
}