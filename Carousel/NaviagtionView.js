class NavigationView {
  constructor({ navbar }) {
    this.navbar = navbar;
  }
  render(contentsData) {
    const contentsTemplate = contentsData.reduce((contentsTemplate, card, idx) => {
      const liTemplate = `
        <li data-idx="${idx}" class="title__card title__card_${card.color}">
        ${card.title}
        </li>
        `;
      return (contentsTemplate += liTemplate);
    }, `<ol>`);
    this.navbar.insertAdjacentHTML(
      "afterbegin",
      contentsTemplate.concat("</ol>")
    );
  }

  drawCurrentNavItem(currentIndex, previousIndex = undefined) {
    const navList = this.navbar.firstElementChild.children;
    let previousItem = navList[previousIndex];
    let currentItem = navList[currentIndex];

    if (previousIndex !== undefined) previousItem.classList.toggle("curser");
    currentItem.classList.toggle("curser");
  }
}

export default NavigationView;