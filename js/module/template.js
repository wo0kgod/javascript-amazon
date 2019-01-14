export { template };

const template = {
    appendOptionHTML({ HTMLEl }) {
        return jsonData => {
            const optionHTML = jsonData.reduce((HTML, option) => {
                return HTML += `<option value=${option.value}>${option.text}</option>`;
            }, "");

            HTMLEl.innerHTML = optionHTML;
        }
   },

   appendCarouselHTML({ HTMLEl }) {
       return jsonData => {
           const carouselHTML  = jsonData.reduce((HTML, img) => {
               return HTML += `<li class="carousel-item"><img src=${img.src} alt="${img.alt}"></li>`; 
           }, "")
               
           HTMLEl.innerHTML = carouselHTML;
       }
   }
}