
const jobs = [
  {id:1,
   companyName:"Mobile First Corp",
   position:"React Native Developer",
   location:"Remote",
   type:"Full-time",
   salary:"$130,000 - $175,000",
   applied:"Not Applied",
   description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
   status:"All"},

  {id:2,
   companyName:"WebFlow Agency",
   position:"Web Designer & Developer",
   location:"Los Angeles, CA",
   type:"Part-time",
   salary:"$80,000 - $120,000",
   applied:"Not Applied",
   description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
   status:"All"},

  {id:3,
   companyName:"DataViz Solutions",
   position:"Data Visualization Specialist",
   location:"Boston, MA",
   type:"Full-time",
   salary:"$125,000 - $165,000",
   applied:"Not Applied",
   description:"Transform complex data into compelling visualizations. Required skills: JavaScript, React, and strong analytical thinking.",
   status:"All"},

  {id:4,
   companyName:"CloudFirst Inc",
   position:"Backend Developer",
   location:"Seattle, WA ",
   type:"Full-time",
   salary:"$140,000 - $190,000",
   applied:"Not Applied",
   description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
   status:"All"},

  {id:5,
   companyName:"Innovation Labs",
   position:"UI/UX Engineer",
   location:"Austin, TX",
   type:"Full-time",
   salary:"$110,000 - $150,000",
   applied:"Not Applied",
   description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
   status:"All"},

  {id:6,
   companyName:"MegaCorp Solutions",
   position:"JavaScript Developer",
   location:"New York, NY",
   type:"Full-time",
   salary:"$130,000 - $170,00",
   applied:"Not Applied",
   description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
   status:"All"},

  {id:7,
   companyName:"StartupXYZ",
   position:"Full Stack Engineer",
   location:"Remote",
   type:"Full-time",
   salary:"$120,000 - $160,000",
   applied:"Not Applied",
   description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
   status:"All"},

  {id:8,
   companyName:"TechCorp Industries",
   position:"Senior Frontend Developer",
   location:"San Francisco, CA ",
   type:"Full-time",
   salary:"$130,000 - $175,000",
   applied:"Not Applied",
   description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
   status:"All"}

];

let activeTab = "All";

const cardsContainer = document.getElementById("cards-container");
const emptyState = document.getElementById("empty-state");

const totalNumber = document.getElementById("total-number");
const interviewNumber = document.getElementById("interview-number");
const rejectedNumber = document.getElementById("rejected-number");
const availableCountText = document.getElementById("available-count-text");

function renderJobs() {
  cardsContainer.innerHTML = "";

  const filtered = activeTab === "All"
    ? jobs
    : jobs.filter(job => job.status === activeTab);

if (filtered.length === 0) {
  emptyState.classList.remove("hidden");
} else {
  emptyState.classList.add("hidden"); 
}

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-6 rounded-2xl shadow border border-gray-200 hover:bg-gray-50 transition-colors";
card.innerHTML = `
  <div class="flex justify-between items-start">
    <h3 class="text-xl font-bold">${job.companyName}</h3>
    <button 
      onclick="deleteJob(${job.id})"
      class="bg-white hover:bg-red-200 cursor-pointer px-3 py-3 text-sm rounded-full border border-gray-200 transition-colors">
      <i class="fa-solid fa-trash text-red-500"></i>
    </button>
  </div>

  <p class="font-semibold mt-1">${job.position}</p>
  <p class="text-sm text-gray-500 mt-1">
    ${job.location} • ${job.type} • ${job.salary}
  </p>


  <p class="text-sm mt-2 px-3 py-1 rounded w-fit 
${job.applied === "Interview" ? "bg-green-100 text-green-700" : ""}
${job.applied === "Rejected" ? "bg-red-100 text-red-700" : ""}
${job.applied === "Not Applied" ? "bg-gray-200 text-gray-600" : ""}">
  ${job.applied}
</p>
  <p class="text-sm text-gray-600 mt-2">
    ${job.description}
  </p>

  <div class="flex flex-wrap gap-2 mt-4">

 <button 
  onclick="updateStatus(${job.id}, 'Interview')"
  class="px-3 py-1 rounded-lg text-sm border cursor-pointer
  ${job.status === "Interview" ? "bg-green-500 text-white border-green-500" : "bg-white text-green-500 border-green-500"}">
  Interview
</button>

<button 
  onclick="updateStatus(${job.id}, 'Rejected')"
  class="px-3 py-1 rounded-lg text-sm border cursor-pointer
  
  ${job.status === "Rejected" ? "bg-red-500 text-white border-red-500" : "bg-white text-red-500 border-red-500"}">
  Rejected
</button>  </div>
`;
    cardsContainer.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);

  if (job.status === status) {
    job.status = "All";
    job.applied = "Not Applied";
  } else {
    job.status = status;
    job.applied = status;
  }

  renderJobs();
}



function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

function updateDashboard() {
  const interviewCount = jobs.filter(j => j.status === "Interview").length;
  const rejectedCount = jobs.filter(j => j.status === "Rejected").length;
  const totalJobs = jobs.length;

  totalNumber.innerText = totalJobs;
  interviewNumber.innerText = interviewCount;
  rejectedNumber.innerText = rejectedCount;

  const filteredCount = activeTab === "All"
    ? totalJobs
    : jobs.filter(j => j.status === activeTab).length;

  if (activeTab === "All") {
    availableCountText.innerText = `${filteredCount} jobs`;
  } else {
    availableCountText.innerText = `${filteredCount} of ${totalJobs} jobs`;
  }
}

document.getElementById("tab-all").onclick = () => {
  activeTab = "All";
  renderJobs();
};

document.getElementById("tab-interview").onclick = () => {
  activeTab = "Interview";
  renderJobs();
};

document.getElementById("tab-rejected").onclick = () => {
  activeTab = "Rejected";
  renderJobs();
};

renderJobs();




const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
  button.addEventListener('click', function () {

    
    tabButtons.forEach(btn => {
      btn.classList.remove('bg-black', 'text-white');
      btn.classList.add('bg-gray-200', 'text-black');
    });

   
    this.classList.remove('bg-gray-200', 'text-black');
    this.classList.add('bg-[#0984e3]', 'text-white');
  });
});




