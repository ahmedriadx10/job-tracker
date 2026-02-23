//interview section code

const interviewSection = getElement("interview-cards");
const rejectedSection = getElement("rejected-cards");
const dashBoardInterviewCount=getElement('dashboard-interview-count')
const dashboardRejectedCount=getElement('dashboard-rejected-count')


interviewSection.addEventListener('click',function(event){

const getTargetButton=event.target


if(getTargetButton.classList.contains('rejected-btn')){

const getButtonMainParent=getTargetButton.parentNode.parentNode.parentNode
const company_name=getButtonMainParent.querySelector('.company-name').innerText
const job_position=getButtonMainParent.querySelector('.job-position').innerText

//test skeleton
 if (rejectedSection.children.length === 1) {
      rejectedSkeleton.remove();
    }
    // if(rejectedSection.children.length===1){
    //   rejectedSection.remove()
    // }

const test_2 = interviewSection.children;
      const newData = [];

      for (const x of test_2) {
        const makeCopy = x.cloneNode(true);

        newData.push(makeCopy);
      }

      const findElement = newData.findIndex((f) => {
        const companyName = f.querySelector(".company-name").innerText;

        const jobPoisiton = f.querySelector(".job-position").innerText;

        return companyName === company_name && jobPoisiton === job_position;
      });

console.log(findElement)


      if (findElement >= 0) {
      

    interviewSection.children[findElement].remove();
        dashBoardInterviewSelectCountPara.innerText =
          interviewSelectedCardsParent.children.length;
          const createCopy_test=getButtonMainParent.cloneNode(true)
       
const getStatusNowChange=createCopy_test.querySelector('.job-status')
getStatusNowChange.innerText='REJECTED'

getStatusNowChange.classList.remove('bg-success/20','text-success')
getStatusNowChange.classList.add('bg-error/20','text-error')
          rejectedSection.appendChild(createCopy_test)
          console.log(dashboardRejectedCount)
          dashboardRejectedCount.innerText=rejectedSection.children.length
      }
  





}



})