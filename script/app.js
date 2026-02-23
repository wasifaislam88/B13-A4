
let jobs = [
  {
    id: 1,
    companyName: "ABC Corp",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    applied: "Pending",
    description: "Lorem ipsum dolor sit amet",
    salary: "৳50,000"
  },
  {
    id: 2,
    companyName: "XYZ Ltd",
    position: "Backend Developer",
    location: "Chittagong",
    type: "Part-time",
    applied: "Pending",
    description: "Consectetur adipiscing elit",
    salary: "৳40,000"
  }
];

let activeTab = "All";
const cardsContainer = document.querySelector("#cardsContainer");
const emptyState = document.querySelector("#emptyState");


function renderJobs() {
  cardsContainer.innerHTML = "";

  const filtered = activeTab === "All"
    ? jobs
    : jobs.filter(job => job.status === activeTab);

  if (filtered.length === 0 && activeTab !== "All") {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl shadow border";
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <h3 class="text-xl font-bold">${job.companyName}</h3>
        <button 
          onclick="deleteJob(${job.id})"
          class="bg-gray-300 px-3 py-3 text-sm rounded-full border border-b-violet-900">
          <i class="fa-solid fa-delete-left"></i>
        </button>
      </div>

      <p class="font-semibold mt-1">${job.position}</p>
      <p class="text-sm text-gray-500 mt-1">
        ${job.location} • ${job.type}
      </p>

      <p class="text-sm text-white bg-gray-400 mt-2 px-2 py-1 rounded w-[100px]">
        ${job.applied}
      </p>

      <p class="text-sm text-gray-600 mt-2">
        ${job.description}
      </p>

      <p class="font-semibold text-blue-600 mt-2">
        ${job.salary}
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <button  
          onclick="updateStatus(${job.id}, 'Interview', event)"
          class="status-btn bg-white text-green-500 px-3 py-1 rounded-lg text-sm border border-green-500">
          Interview
        </button>

        <button  
          onclick="updateStatus(${job.id}, 'Rejected', event)"
          class="bg-white text-red-500 px-3 py-1 rounded-lg text-sm border border-red-500">
          Rejected
        </button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  updateDashboard();
}


function updateStatus(jobId, status, event) {

  const job = jobs.find(j => j.id === jobId);
  if (job) job.applied = status;


  const button = event.currentTarget;
  const card = button.closest("div.bg-white.p-6.rounded-2xl.shadow.border");
  const p = card.querySelector("p.text-sm.text-white.bg-gray-400");

  p.textContent = status;

  if (status === "Interview") {
    p.style.backgroundColor = "green";
  } else if (status === "Rejected") {
    p.style.backgroundColor = "red";
  }
}


function deleteJob(jobId) {
  jobs = jobs.filter(j => j.id !== jobId);
  renderJobs();
}


renderJobs();