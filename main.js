const sidePanel = document.getElementById("panel");
const sidePanelButton = document.getElementById("side-panel-button")

function openPanel(){
    if(sidePanel.style.width == 15 + 'vw'){
        sidePanel.style.width = 0;
        sidePanelButton.style.color = 'whitesmoke';
        
        
    } else{
        sidePanel.style.width = 15 + 'vw';
        sidePanelButton.style.color = '#259a7a';

    }
    
}