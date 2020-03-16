function sliderDocs() {

const buttonsArr = document.querySelectorAll(".checkit__item-btns-btn");
document.querySelector('.checkit__list-btns').firstElementChild.firstElementChild.classList.add('active');
document.querySelector('.checkit__list-text').firstElementChild.classList.add('active');


for (let i = 0; i < buttonsArr.length; i++) {
  const buttonItem = buttonsArr[i];

  buttonItem.addEventListener("click", function(event) {
    if (buttonItem.classList.contains("active")) {
      buttonItem.classList.remove("active");
    } else {
      for (let i = 0; i < buttonsArr.length; i++) {
        const buttonItem = buttonsArr[i];
        buttonItem.classList.remove("active");
      }

      let target = event.target;

      let targetId = target.getAttribute("data-id");

      let textArr = document.querySelectorAll(".checkit__item-text");

      for (let i = 0; i < textArr.length; i++) {
        const textEl = textArr[i];
        const textId = textEl.getAttribute("data-id");

        if (textId === targetId) {
          for (let i = 0; i < textArr.length; i++) {
            const text = textArr[i];
            if (text.classList.contains("active")) {
              text.classList.remove("active");
            }
          }
          textEl.classList.add("active");
          target.classList.add("active");
        }
      }

    }
  });
}

}

module.exports = sliderDocs;
