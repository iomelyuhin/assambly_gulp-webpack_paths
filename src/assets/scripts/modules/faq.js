function faq() {
  var faqItemArr = document.querySelectorAll(".faq__item-btn");

  for (let i = 0; i < faqItemArr.length; i++) {
    const faqItem = faqItemArr[i];

    faqItem.addEventListener("click", function(event) {
      event.preventDefault();
      if (faqItem.classList.contains("active")) {
        faqItem.classList.remove("active");
      } else {
        for (let i = 0; i < faqItemArr.length; i++) {
          const crew = faqItemArr[i];
          crew.classList.remove("active");
        }

        let target = event.target;

        if (
          target.classList.contains("faq__item-title") ||
          target.classList.contains(".faq__item-text") ||
          target.classList.contains(".faq__item-btn")
        ) {
          faqItem.classList.toggle("active");
        }
      }
    });
  }
}

module.exports = faq;
