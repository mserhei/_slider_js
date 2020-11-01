// SLIDER BLOCK

const sliderPlace = document.querySelector(`.slider_place`);

// IMAGES

const images = document.querySelectorAll(`img`);

// BUTTON LEFT

const leftArrow = document.createElement(`div`);
leftArrow.classList.add(`switch_left`);

const leftArrowImage = document.createElement(`i`);
leftArrowImage.classList.add(`fas`,`fa-angle-left`) // from awesome font

leftArrow.append(leftArrowImage);
sliderPlace.append(leftArrow);

// BUTTON RIGHT

const rightArrow = document.createElement(`div`);
rightArrow.classList.add(`switch_right`);

const rightArrowImage = document.createElement(`i`);
rightArrowImage.classList.add(`fas`,`fa-angle-right`) // from awesome font

rightArrow.append(rightArrowImage);
sliderPlace.append(rightArrow);


// SWITCHES BELOW

const switchesBelow = document.createElement(`div`);
switchesBelow.classList.add(`switches_below`);

for (let i = 0; i < images.length; i++) {
    const radioRoundButton = document.createElement(`input`);
    radioRoundButton.setAttribute(`type`,`radio`);
    radioRoundButton.setAttribute(`name`,`radio_buttons`);
    radioRoundButton.classList.add(`radio_button`);

    switchesBelow.append(radioRoundButton);

    if(i === 0) {
        radioRoundButton.setAttribute(`checked`,`checked`);
    }
}

sliderPlace.append(switchesBelow);

const allRadioButtons = document.querySelectorAll(`.radio_button`);

// CHANGE IMAGE ON RADIO CLICK

if (allRadioButtons[0].getAttribute(`checked`,`checked`)) {
    images[0].classList.add(`active`);
}

// SWITCHES BELOW CLICK

for(let i = 0; i < allRadioButtons.length; i++) {
    allRadioButtons[i].addEventListener(`click`, () => {
        for(let j = 0; j < images.length; j++) {
            if (images[j].classList.contains(`active`)) {
                images[j].classList.remove(`active`);
            }
            if (allRadioButtons[j].getAttribute(`checked`,`checked`) === `checked`) {
                allRadioButtons[j].removeAttribute(`checked`);
            }
        }
            allRadioButtons[i].setAttribute(`checked`,`checked`);
            images[i].classList.add(`active`);
            
    })
}



// BUTTON LEFT CLICK

leftArrow.addEventListener(`click`, () => {
    for(let i = 0; i < allRadioButtons.length; i++) {

            if(i === 0 && allRadioButtons[i].getAttribute(`checked`,`checked`) === `checked`) {

                for(let j = 0; j < images.length; j++) {
                    if (images[j].classList.contains(`active`)) {
                        images[j].classList.remove(`active`);
                    }
                    if (allRadioButtons[j].getAttribute(`checked`,`checked`) === `checked`) {
                        allRadioButtons[j].removeAttribute(`checked`);
                    }
                }
                
                allRadioButtons[allRadioButtons.length - 1].setAttribute(`checked`,`checked`);
                images[images.length - 1].classList.add(`active`);
                return;

            } else if(i !== 0 && allRadioButtons[i].getAttribute(`checked`,`checked`) === `checked`){
                
                for(let j = 0; j < images.length; j++) {
                    if (images[j].classList.contains(`active`)) {
                        images[j].classList.remove(`active`);
                    }
                    if (allRadioButtons[j].getAttribute(`checked`,`checked`) === `checked`) {
                        allRadioButtons[j].removeAttribute(`checked`);
                    }
                }

                allRadioButtons[i-1].setAttribute(`checked`,`checked`);
                images[i-1].classList.add(`active`);
                return;
            }
    }
})

// BUTTON RIGHT CLICK

rightArrow.addEventListener(`click`, () => {
    for(let i = 0; i < allRadioButtons.length; i++) {

            if(i === (images.length - 1) && allRadioButtons[i].getAttribute(`checked`,`checked`) === `checked`) {

                for(let j = 0; j < images.length; j++) {
                    if (images[j].classList.contains(`active`)) {
                        images[j].classList.remove(`active`);
                    }
                    if (allRadioButtons[j].getAttribute(`checked`,`checked`) === `checked`) {
                        allRadioButtons[j].removeAttribute(`checked`);
                    }
                }

                allRadioButtons[0].setAttribute(`checked`,`checked`);
                images[0].classList.add(`active`);
                return;

            } else if(i !== (images.length - 1) && allRadioButtons[i].getAttribute(`checked`,`checked`) === `checked`){
                
                for(let j = 0; j < images.length; j++) {
                    if (images[j].classList.contains(`active`)) {
                        images[j].classList.remove(`active`);
                    }
                    if (allRadioButtons[j].getAttribute(`checked`,`checked`) === `checked`) {
                        allRadioButtons[j].removeAttribute(`checked`);
                    }
                }

                allRadioButtons[i+1].setAttribute(`checked`,`checked`);
                images[i+1].classList.add(`active`);
                return;
            }
    }
})




