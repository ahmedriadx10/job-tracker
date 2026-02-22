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

  const allButtonn=getElement('all-btn')
  const interViewBtn=getElement('interview-btn')
  const rejectedBtn=getElement('rejected-btn')
if(targetButton.classList.contains('filter-btn')){

allButtonn.classList.remove('bg-primary','text-white')
interViewBtn.classList.remove('bg-primary','text-white')
rejectedBtn.classList.remove('bg-primary','text-white')

  targetButton.classList.add('bg-primary','text-white')



}






});
