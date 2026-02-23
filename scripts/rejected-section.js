//interview section code

const interviewSectionCollect = getElement("interview-cards");
const rejectedSectionCollect = getElement("rejected-cards");
const dashBoardInterviewCountNow = getElement("dashboard-interview-count");
const dashboardRejectedCountNow = getElement("dashboard-rejected-count");

rejectedSectionCollect.addEventListener("click", function (event) {
  const getTargetButton = event.target;

  if (getTargetButton.classList.contains("interview-btn")) {
    const getButtonMainParentCollect =
      getTargetButton.parentNode.parentNode.parentNode;
    const company_name_now =
      getButtonMainParentCollect.querySelector(".company-name").innerText;
    const job_position_now =
      getButtonMainParentCollect.querySelector(".job-position").innerText;
    if (interviewSectionCollect.children.length === 1) {
      interviewSkeleton.remove();
    }
    //  if(interviewSectionCollect.children.length===1){
    //   interviewSkeleton.remove()
    //  }

    const test_now = rejectedSectionCollect.children;
    const newData = [];

    for (const x of test_now) {
      const makeCopy = x.cloneNode(true);

      newData.push(makeCopy);
    }

    const findElement = newData.findIndex((f) => {
      const companyName = f.querySelector(".company-name").innerText;

      const jobPoisiton = f.querySelector(".job-position").innerText;

      return (
        companyName === company_name_now && jobPoisiton === job_position_now
      );
    });

    console.log(findElement);

    if (findElement >= 0) {
      rejectedSectionCollect.children[findElement].remove();

      const createCopy = getButtonMainParentCollect.cloneNode(true);
      const getStatusNow = createCopy.querySelector(".job-status");
      getStatusNow.innerText = "INTERVIEW";
      getStatusNow.classList.remove("bg-error/20", "text-error");
      getStatusNow.classList.add("bg-success/20", "text-success");

      interviewSectionCollect.appendChild(createCopy);

      dashboardRejectedCount.innerText = rejectedSection.children.length;
      dashBoardInterviewSelectCountPara.innerText =
        interviewSelectedCardsParent.children.length;
      const rejected_av_change = getElement("rejected-avilable-count");
      rejected_av_change.innerText = dashboardRejectedCountNow.innerText;
      const interview_av_change_v = (getElement(
        "interview-avialable-count",
      ).innerText = dashBoardInterviewCountNow.innerText);
    }
  }
});
