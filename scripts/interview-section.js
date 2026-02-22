//interview section code

const interviewSection = getElement("interview-cards");
const rejectedSection = getElement("rejected-cards");
const dashBoardInterviewCount=getElement('dashboard-interview-count')
const dashboardRejectedCount=getElement('dashboard-rejected-count')


interviewSection.addEventListener('click',function(event){

const getTargetButton=event.target


if(getTargetButton.classList.contains('interview-btn')){

const getButtonMainParent=getTargetButton.parentNode.parentNode.parentNode

console.log(getButtonMainParent)


}



})