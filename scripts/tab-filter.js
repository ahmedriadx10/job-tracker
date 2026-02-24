//tab filter codes here

function changeTab(id, id_2) {
  const tabs = document.getElementsByClassName("display-magic");
  const allAvailableContainer =
    document.getElementsByClassName("avilable-container");
 

  const globalTab = getElement("global-av");
  const interviewTabAv = getElement("interview-av");
  const rejectedTabAv = getElement("rejected-av");

  globalTab.classList.add("hidden");
  interviewTabAv.classList.add("hidden");
  rejectedTabAv.classList.add("hidden");
  const getSeparateAvialble = getElement(id_2);

  getSeparateAvialble.classList.remove("hidden");
  for (const x of tabs) {
    x.classList.add("hidden");
  }

  const needTab = getElement(id);
  needTab.classList.remove("hidden");
}

const getFilterButtonMainContainer = getElement("filter-button-container");

getFilterButtonMainContainer.addEventListener("click", function (event) {
  const targetButton = event.target;

  const allButtonn = getElement("all-btn");
  const interViewBtn = getElement("interview-btn");
  const rejectedBtn = getElement("rejected-btn");
  if (targetButton.classList.contains("filter-btn")) {
    allButtonn.classList.remove("bg-primary", "text-white");
    interViewBtn.classList.remove("bg-primary", "text-white");
    rejectedBtn.classList.remove("bg-primary", "text-white");

    targetButton.classList.add("bg-primary", "text-white");
  }
});
