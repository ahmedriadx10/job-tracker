// Main codes are here


const allJobCards = getElement("job-card-container");
const interviewSelectedCardsParent = getElement("interview-cards");
const rejectedSelectedCardsParent = getElement("rejected-cards");
const dashBoardTotalPara = getElement("total-application");
const totalJobsCard = allJobCards.children.length;
const dashBoardInterviewSelectCountPara = getElement(
  "dashboard-interview-count",
);
const availabeleInterviewCount = getElement("interview-avialable-count");
const availableRejectedCount = getElement("rejected-avilable-count");

const dashboardRejectedSelectCountPara = getElement("dashboard-rejected-count");

const availableJobsSpan = getElement("available-count");

const rejectedSkeleton = getElement("rejected-skeleton");
const interviewSkeleton = getElement("interview-skeleton");

let interviewData = [];
let rejectedData = [];
let deleteData = [];
function setDashBoardCount() {
  dashBoardTotalPara.innerText = allJobCards.children.length;
  dashBoardInterviewSelectCountPara.innerText = interviewData.length;
  dashboardRejectedSelectCountPara.innerText = rejectedData.length;
  availableJobsSpan.innerText = allJobCards.children.length;

  availabeleInterviewCount.innerText = interviewData.length;
  availableRejectedCount.innerText = rejectedData.length;

  if (allJobCards.children.length === 0) {
    const defaultSkeleton = document.createElement("div");

    defaultSkeleton.innerHTML = `
 <div><img src="./assets/jobs.png" alt="" /></div>
        <div class="text-center">
          <h2 class="font-semibold text-2xl text-[#002C5C]">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>
`;

    defaultSkeleton.setAttribute(
      "class",
      "py-[110px] flex gap-5 flex-col justify-center items-center bg-white rounded-lg border border-gray-100",
    );
    allJobCards.appendChild(defaultSkeleton);
    return;
  }
}

setDashBoardCount();

allJobCards.addEventListener("click", function (e) {
  // interview button

  const getTargetButton = e.target;

  if (getTargetButton.classList.contains("interview-btn")) {
    const buttonParent = getTargetButton.closest(".job-card");

    const companyName = buttonParent.querySelector(".company-name").innerText;
    const jobPosition = buttonParent.querySelector(".job-position").innerText;
    const jobLocation = buttonParent.querySelector(".job-location").innerText;
    const jobTime = buttonParent.querySelector(".job-time").innerText;
    const jobSalary = buttonParent.querySelector(".job-salary").innerText;
    const jobStatus = buttonParent.querySelector(".job-status");
    const jobDetail = buttonParent.querySelector(".job-detail").innerText;

    if (
      jobStatus.classList.contains("bg-primary-content") ||
      jobStatus.classList.contains("text-info-content")
    ) {
      jobStatus.classList.remove("text-info-content", "bg-primary-content");
    }

    jobStatus.innerText = "INTERVIEW";
    jobStatus.classList.remove("bg-error/20", "text-error");
    jobStatus.classList.add("bg-success/20", "text-success");

    const interviewDataObj = {
      companyName,
      jobPosition,
      jobLocation,
      jobTime,
      jobSalary,
      status: "INTERVIEW",
      jobDetail,
    };

    const findSimilarInterviewData = interviewData.find((x) => {
      return (
        x.companyName === interviewDataObj.companyName &&
        x.jobPosition === interviewDataObj.jobPosition
      );
    });

    if (!findSimilarInterviewData) {
      interviewData.push(interviewDataObj);

      // remove same data from rejected list

      rejectedData = rejectedData.filter((data) => {
        return (
          data.companyName !== interviewDataObj.companyName &&
          data.jobPosition !== interviewDataObj.jobPosition
        );
      });
    }

    interviewDataRender();
    rejectedDataRender();
    setDashBoardCount();

    console.log(interviewData);
    console.log(rejectedData);
  }

  // rejected button

  if (getTargetButton.classList.contains("rejected-btn")) {
    const buttonParent = getTargetButton.closest(".job-card");

    const companyName = buttonParent.querySelector(".company-name").innerText;
    const jobPosition = buttonParent.querySelector(".job-position").innerText;
    const jobLocation = buttonParent.querySelector(".job-location").innerText;
    const jobTime = buttonParent.querySelector(".job-time").innerText;
    const jobSalary = buttonParent.querySelector(".job-salary").innerText;
    const jobStatus = buttonParent.querySelector(".job-status");
    const jobDetail = buttonParent.querySelector(".job-detail").innerText;

    if (
      jobStatus.classList.contains("bg-primary-content") ||
      jobStatus.classList.contains("text-info-content")
    ) {
      jobStatus.classList.remove("text-info-content", "bg-primary-content");
    }

    jobStatus.innerText = "REJECTED";
    jobStatus.classList.remove("bg-success/20", "text-success");
    jobStatus.classList.add("bg-error/20", "text-error");

    const rejectedDataObj = {
      companyName,
      jobPosition,
      jobLocation,
      jobTime,
      jobSalary,
      status: "REJECTED",
      jobDetail,
    };

    const findSimilarRejctedData = rejectedData.find((x) => {
      return (
        x.companyName === rejectedDataObj.companyName &&
        x.jobPosition === rejectedDataObj.jobPosition
      );
    });

    if (!findSimilarRejctedData) {
      rejectedData.push(rejectedDataObj);

      // remove same data from rejected list

      interviewData = interviewData.filter((data) => {
        return (
          data.companyName !== rejectedDataObj.companyName &&
          data.jobPosition !== rejectedDataObj.jobPosition
        );
      });

      rejectedDataRender();
      interviewDataRender();
      setDashBoardCount();
    }
  }
  // card delete button

  if (getTargetButton.classList.contains("card-delete")) {
    const buttonParent = getTargetButton.closest(".job-card");
    const companyName = buttonParent.querySelector(".company-name").innerText;
    const jobPosition = buttonParent.querySelector(".job-position").innerText;


    interviewData = interviewData.filter((data) => {
      return (
        data.companyName !== companyName && data.jobPosition !== jobPosition
      );
    });

    rejectedData = rejectedData.filter((data) => {
      return (
        data.companyName !== companyName && data.jobPosition !== jobPosition
      );
    });

    buttonParent.remove();
    interviewDataRender();
    rejectedDataRender();
    setDashBoardCount();
  }
});

function interviewDataRender() {
  if (interviewData.length === 0) {
    interviewSelectedCardsParent.innerHTML = ``;
    const defaultSkeleton = document.createElement("div");

    defaultSkeleton.innerHTML = `
 <div><img src="./assets/jobs.png" alt="" /></div>
        <div class="text-center">
          <h2 class="font-semibold text-2xl text-[#002C5C]">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>
`;

    defaultSkeleton.setAttribute(
      "class",
      "py-[110px] flex gap-5 flex-col justify-center items-center bg-white rounded-lg border border-gray-100",
    );
    interviewSelectedCardsParent.appendChild(defaultSkeleton);
    return;
  }

  interviewSelectedCardsParent.innerHTML = ``;
  interviewData.forEach((data) => {
    const div = document.createElement("div");

    div.innerHTML = `


<!-- job card left side -->
        <div class="space-y-5">
          <!-- compay name and positon -->

          <div>
            <h6 class="company-name font-semibold text-lg text-[#002C5C]">
              ${data.companyName}
            </h6>
            <p class="job-position text-[#64748B]">${data.jobPosition}</p>
          </div>

          <!-- location,type and salary -->
          <div class="flex gap-2 text-[14px] text-[#64748B]">
            <span class="job-location">${data.jobLocation}</span>
            <ul class="flex gap-2">
              <li class="job-time flex items-center gap-1.5">• Part-time</li>
              <li class="job-salary flex items-center gap-1.5">
                ${data.jobSalary}
              </li>
            </ul>
          </div>

          <!-- status and job description -->
          <div>
            <span
              class="job-status py-2 px-3 rounded-lg font-medium text-success bg-success/20"
              >${data.status}</span
            >
            <p class="job-detail mt-4">
            ${data.jobDetail}
            </p>
          </div>

          <!-- job card button area -->

          <div class="space-x-2">
            <button
              class="interview-btn btn btn-accent btn-outline font-semibold"
            >
              INTERVIEW
            </button>
            <button
              class="rejected-btn btn btn-error btn-outline font-semibold"
            >
              REJECTED
            </button>
          </div>

</div>

           <div>
          <button
            class="card-delete btn  h-10 w-10 rounded-full border text-gray-600 border-gray-300 cursor-pointer"
          >
            <i class="text-2xl card-delete fa-regular fa-trash-can"></i>
          </button>
        </div>

`;

    div.setAttribute(
      "class",
      "job-card flex justify-between p-6 bg-white rounded-lg border border-gray-100",
    );

    interviewSelectedCardsParent.appendChild(div);
  });
}

function rejectedDataRender() {
  if (rejectedData.length === 0) {
    rejectedSelectedCardsParent.innerHTML = "";

    const defaultSkeleton = document.createElement("div");

    defaultSkeleton.innerHTML = `
 <div><img src="./assets/jobs.png" alt="" /></div>
        <div class="text-center">
          <h2 class="font-semibold text-2xl text-[#002C5C]">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>
`;

    defaultSkeleton.setAttribute(
      "class",
      "py-[110px] flex gap-5 flex-col justify-center items-center bg-white rounded-lg border border-gray-100",
    );

    rejectedSelectedCardsParent.appendChild(defaultSkeleton);

    return;
  }

  rejectedSelectedCardsParent.innerHTML = "";
  rejectedData.forEach((rejectd) => {
    const div = document.createElement("div");
    div.innerHTML = `


<!-- job card left side -->
        <div class="space-y-5">
          <!-- compay name and positon -->

          <div>
            <h6 class="company-name font-semibold text-lg text-[#002C5C]">
              ${rejectd.companyName}
            </h6>
            <p class="job-position text-[#64748B]">${rejectd.jobPosition}</p>
          </div>

          <!-- location,type and salary -->
          <div class="flex gap-2 text-[14px] text-[#64748B]">
            <span class="job-location">${rejectd.jobLocation}</span>
            <ul class="flex gap-2">
              <li class="job-time flex items-center gap-1.5">• Part-time</li>
              <li class="job-salary flex items-center gap-1.5">
                ${rejectd.jobSalary}
              </li>
            </ul>
          </div>

          <!-- status and job description -->
          <div>
            <span
              class="job-status py-2 px-3 rounded-lg font-medium text-error bg-error/20"
              >${rejectd.status}</span
            >
            <p class="job-detail mt-4">
            ${rejectd.jobDetail}
            </p>
          </div>

          <!-- job card button area -->

          <div class="space-x-2">
            <button
              class="interview-btn btn btn-accent btn-outline font-semibold"
            >
              INTERVIEW
            </button>
            <button
              class="rejected-btn btn btn-error btn-outline font-semibold"
            >
              REJECTED
            </button>
          </div>
</div>

           <div>
          <button
            class="card-delete btn  h-10 w-10 rounded-full border text-gray-600 border-gray-300 cursor-pointer"
          >
            <i class="text-2xl card-delete fa-regular fa-trash-can"></i>
          </button>
        </div>

`;

    div.setAttribute(
      "class",
      "job-card flex justify-between p-6 bg-white rounded-lg border border-gray-100",
    );

    rejectedSelectedCardsParent.appendChild(div);
  });
}

//send card from interview tab to rejective tab

interviewSelectedCardsParent.addEventListener("click", function (e) {
  const needRejectedButton = e.target;
  if (needRejectedButton.classList.contains("rejected-btn")) {
    const needRejectBtnParentNow = needRejectedButton.closest(".job-card");

    const companyName =
      needRejectBtnParentNow.querySelector(".company-name").innerText;
    const jobPosition =
      needRejectBtnParentNow.querySelector(".job-position").innerText;
    const jobLocation =
      needRejectBtnParentNow.querySelector(".job-location").innerText;
    const jobTime = needRejectBtnParentNow.querySelector(".job-time").innerText;
    const jobSalary =
      needRejectBtnParentNow.querySelector(".job-salary").innerText;
    const jobStatus = needRejectBtnParentNow.querySelector(".job-status");
    const jobDetail =
      needRejectBtnParentNow.querySelector(".job-detail").innerText;

    const transferData = {
      companyName,
      jobPosition,
      jobLocation,
      jobTime,
      jobSalary,
      status: "REJECTED",
      jobDetail,
    };

    const findSimilarCardRejected = rejectedData.find((x) => {
      return (
        x.companyName === transferData.companyName &&
        x.jobPosition === transferData.jobPosition
      );
    });

    if (!findSimilarCardRejected) {
      rejectedData.push(transferData);

      interviewData = interviewData.filter((data) => {
        return (
          data.companyName !== transferData.companyName &&
          data.jobPosition !== transferData.jobPosition
        );
      });

      setDashBoardCount();
      interviewDataRender();
      rejectedDataRender();
    }

    return;
  }

  // interview section card delete

  if (needRejectedButton.classList.contains("card-delete")) {
    const needRejectBtnParentNow = needRejectedButton.closest(".job-card");

    const companyName =
      needRejectBtnParentNow.querySelector(".company-name").innerText;
    const jobPosition =
      needRejectBtnParentNow.querySelector(".job-position").innerText;
    console.log(companyName);
    console.log(jobPosition);
    interviewData = interviewData.filter((data) => {
      return (
        data.companyName !== companyName && data.jobPosition !== jobPosition
      );
    });

    setDashBoardCount();
    interviewDataRender();
  }
});

//send card from rejected tab to interview tab

rejectedSelectedCardsParent.addEventListener("click", function (e) {
  const needRejectedButton = e.target;
  if (needRejectedButton.classList.contains("interview-btn")) {
    const needRejectBtnParentNow = needRejectedButton.closest(".job-card");

    const companyName =
      needRejectBtnParentNow.querySelector(".company-name").innerText;
    const jobPosition =
      needRejectBtnParentNow.querySelector(".job-position").innerText;
    const jobLocation =
      needRejectBtnParentNow.querySelector(".job-location").innerText;
    const jobTime = needRejectBtnParentNow.querySelector(".job-time").innerText;
    const jobSalary =
      needRejectBtnParentNow.querySelector(".job-salary").innerText;
    const jobStatus = needRejectBtnParentNow.querySelector(".job-status");
    const jobDetail =
      needRejectBtnParentNow.querySelector(".job-detail").innerText;

    const transferData = {
      companyName,
      jobPosition,
      jobLocation,
      jobTime,
      jobSalary,
      status: "INTERVIEW",
      jobDetail,
    };

    const findSimilarCardInterview = interviewData.find((x) => {
      return (
        x.companyName === transferData.companyName &&
        x.jobPosition === transferData.jobPosition
      );
    });

    if (!findSimilarCardInterview) {
      interviewData.push(transferData);

      rejectedData = rejectedData.filter((data) => {
        return (
          data.companyName !== transferData.companyName &&
          data.jobPosition !== transferData.jobPosition
        );
      });

      setDashBoardCount();
      interviewDataRender();
      rejectedDataRender();
    }
  }

  // rejected section delete button

  if (needRejectedButton.classList.contains("card-delete")) {
    const needRejectBtnParentNow = needRejectedButton.closest(".job-card");

    const companyName =
      needRejectBtnParentNow.querySelector(".company-name").innerText;
    const jobPosition =
      needRejectBtnParentNow.querySelector(".job-position").innerText;

    rejectedData = rejectedData.filter((data) => {
      return (
        data.companyName !== companyName && data.jobPosition !== jobPosition
      );
    });

    setDashBoardCount();
    rejectedDataRender();
  }
});
