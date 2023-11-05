let state = "flex"

function updateElementStyles() {
    const elements = document.querySelectorAll('.project-container');
    const flexThresholdHeight = 250;
    const blockThresholdHeight = 600

    elements.forEach(element => {
        if (state == "flex" && element.clientHeight > flexThresholdHeight)
        {
            state = "block"
        }
        else if (state == "block" && element.clientHeight < blockThresholdHeight)
        {
            state = "flex"
        }

        if (state == "block") 
        {
            element.firstElementChild.style.borderRadius = "20px";
            element.firstElementChild.style.margin = "20px";
            element.style.display = "block";
        } 
        else 
        {
            element.firstElementChild.style.borderRadius = "20px 0px 0px 20px";
            element.firstElementChild.style.margin = "0px";
            element.style.display = "flex";
        }
    });
}

window.addEventListener("resize", updateElementStyles);
updateElementStyles();