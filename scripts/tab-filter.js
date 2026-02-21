//tab filter

function changeTab(id) {
  const tabs = document.getElementsByClassName("display-magic");

  for (const x of tabs) {
    x.classList.add("hidden");
  }

  const needTab = getElement(id);
  needTab.classList.remove("hidden");
}

const getFilterButtonMainContainer = getElement("filter-button-container");

getFilterButtonMainContainer.addEventListener("click", function (event) {
  const targetButton = event.target;

  if (targetButton.classList.contains("filter-btn")) {
    const allButtons = document.getElementsByClassName("filter-btn");

    for (const x of allButtons) {
      x.classList.remove("bg-primary", "text-white");
    }

    targetButton.classList.add("bg-primary", "text-white");
  }
});
