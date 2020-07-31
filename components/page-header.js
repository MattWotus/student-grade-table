class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  };
  updateAverage(newAverage) {
    var badge = document.querySelector("span");
    badge.textContent = newAverage;
  };
}
