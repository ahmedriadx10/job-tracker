const allJobCards = getElement("job-card-container");
const interviewSelectedCardsParent = getElement("interview-cards");
const rejectedSelectedCardsParent = getElement("rejected-cards");
const dashBoardTotalPara = getElement("total-application");
const totalJobsCard = allJobCards.children.length;
const dashBoardInterviewSelectCountPara=getElement('dashboard-interview-count')
const dashboardRejectedSelectCountPara=getElement('dashboard-rejected-count')
    const allJobcardsParentAllChild = allJobCards.children;
dashBoardTotalPara.innerText = totalJobsCard;
const availableJobsSpan = getElement("available-count");
availableJobsSpan.innerText = totalJobsCard;
const rejectedSkeleton=getElement('rejected-skeleton')
const interviewSkeleton=getElement('interview-skeleton')

let rejectCount=0
let interviewCount=0

allJobCards.addEventListener("click", function (event) {
  const getTargetButton = event.target;

  // specify button

  //interview button

  if (getTargetButton.classList.contains("interview-btn")) {
    const getMainJobCardParent = getTargetButton.parentNode.parentNode;
    const everyCardStatus = getMainJobCardParent.querySelector(".job-status");
    if (
      everyCardStatus.classList.contains("bg-primary-content") ||
      everyCardStatus.classList.contains("text-info-content")
    ) {
      everyCardStatus.classList.remove(
        "text-info-content",
        "bg-primary-content",
      );
    }
    everyCardStatus.innerText = "INTERVIEW";
    everyCardStatus.classList.remove("bg-error/20", "text-error");
    everyCardStatus.classList.add("bg-success/20", "text-success");


const getCompayName=getMainJobCardParent.querySelector('.company-name')
const getJobPosition=getMainJobCardParent.querySelector('.job-position')
console.log(getJobPosition)
const getJobLocation=getMainJobCardParent.querySelector('.job-location')
const getJobTime=getMainJobCardParent.querySelector('.job-time')
const getJobSalary=getMainJobCardParent.querySelector('.job-salary')


const getJobDetail=getMainJobCardParent.querySelector('.job-detail')




// creating new div 

const div=document.createElement('div')

div.innerHTML=`

<!-- job card left side -->
<div class="space-y-5">
<!-- compay name and positon -->

<div>
  <h6 class="company-name font-semibold text-lg text-[#002C5C]">${getCompayName.innerText}</h6>
  <p class="job-position text-[#64748B]">${getJobPosition.innerText}</p>
</div>

<!-- location,type and salary -->
<div class="flex gap-2 text-[14px] text-[#64748B]">
  <span class="job-location">${getJobLocation.innerText}</span>
<ul class="flex gap-2"> <li class="job-time flex items-center gap-1.5">${getJobTime.innerText}</li>
 <li class="job-salary flex items-center gap-1.5">${getJobSalary.innerText}</li></ul>
</div>

<!-- status and job description -->
<div>
  <span class="job-status py-2 px-3 rounded-lg font-medium text-info-content bg-primary-content">${everyCardStatus.innerText}</span>
  <p class="job-detail mt-4">${getJobDetail.innerText}</p>
</div>

<!-- job card button area -->

<div class="space-x-2">
<button class="interview-btn btn btn-accent btn-outline font-semibold">INTERVIEW</button>
<button class="rejected-btn btn btn-error btn-outline font-semibold">REJECTED</button>

</div>

</div>


<!-- job card right side button area -->

<div><button class="card-delete w-10 h-10  rounded-full border-2 text-gray-600 border-gray-300 cursor-pointer"><i class="fa-regular fa-trash-can"></i></button></div>
`

div.setAttribute('class','flex justify-between  p-6 bg-white rounded-lg border border-gray-100')
if(interviewSelectedCardsParent.children.length===1){
 interviewSkeleton.classList.add('hidden')
  
}
interviewSelectedCardsParent.appendChild(div)



  interviewCount++
dashBoardInterviewSelectCountPara.innerText=interviewCount



  }

  // rejected button

  if (getTargetButton.classList.contains("rejected-btn")) {
    const getMainJobCardParent = getTargetButton.parentNode.parentNode;
    const everyCardStatus = getMainJobCardParent.querySelector(".job-status");

    if (
      everyCardStatus.classList.contains("bg-primary-content") ||
      everyCardStatus.classList.contains("text-info-content")
    ) {
      everyCardStatus.classList.remove(
        "text-info-content",
        "bg-primary-content",
      );
    }
    everyCardStatus.innerText = "REJECTED";
    everyCardStatus.classList.remove("bg-success/20", "text-success");

    everyCardStatus.classList.add("bg-error/20", "text-error");



const getCompayName=getMainJobCardParent.querySelector('.company-name')
const getJobPosition=getMainJobCardParent.querySelector('.job-position')
console.log(getJobPosition)
const getJobLocation=getMainJobCardParent.querySelector('.job-location')
const getJobTime=getMainJobCardParent.querySelector('.job-time')
const getJobSalary=getMainJobCardParent.querySelector('.job-salary')


const getJobDetail=getMainJobCardParent.querySelector('.job-detail')



    // creating new div 

const div=document.createElement('div')

div.innerHTML=`

<!-- job card left side -->
<div class="space-y-5">
<!-- compay name and positon -->

<div>
  <h6 class="company-name font-semibold text-lg text-[#002C5C]">${getCompayName.innerText}</h6>
  <p class="job-position text-[#64748B]">${getJobPosition.innerText}</p>
</div>

<!-- location,type and salary -->
<div class="flex gap-2 text-[14px] text-[#64748B]">
  <span class="job-location">${getJobLocation.innerText}</span>
<ul class="flex gap-2"> <li class="job-time flex items-center gap-1.5">${getJobTime.innerText}</li>
 <li class="job-salary flex items-center gap-1.5">${getJobSalary.innerText}</li></ul>
</div>

<!-- status and job description -->
<div>
  <span class="job-status py-2 px-3 rounded-lg font-medium text-info-content bg-primary-content">${everyCardStatus.innerText}</span>
  <p class="job-detail mt-4">${getJobDetail.innerText}</p>
</div>

<!-- job card button area -->

<div class="space-x-2">
<button class="interview-btn btn btn-accent btn-outline font-semibold">INTERVIEW</button>
<button class="rejected-btn btn btn-error btn-outline font-semibold">REJECTED</button>

</div>

</div>


<!-- job card right side button area -->

<div><button class="card-delete w-10 h-10  rounded-full border-2 text-gray-600 border-gray-300 cursor-pointer"><i class="fa-regular fa-trash-can"></i></button></div>
`

div.setAttribute('class','flex justify-between  p-6 bg-white rounded-lg border border-gray-100')

if(rejectedSelectedCardsParent.children.length===1){
 rejectedSkeleton.classList.add('hidden')
}





rejectCount++
dashboardRejectedSelectCountPara.innerText=rejectCount
  }
});



