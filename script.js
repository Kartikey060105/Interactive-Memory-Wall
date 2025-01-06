
const addMemoryBtn = document.getElementById("add-memory-btn");
const memoryModal = document.getElementById("memory-modal");
const cancelBtn = document.getElementById("cancel-btn");
const saveMemoryBtn = document.getElementById("save-memory-btn");
const searchBar = document.getElementById("search-bar");
const memoryWall = document.getElementById("memory-wall");
const body = document.body;
const darkModeToggle = document.getElementById("theme-toggle"); // Updated to match HTML


let memories = [];
let darkMode = false;
function toggleModal() {
    memoryModal.classList.toggle("hidden");
}

function clearModalInputs() {
    document.getElementById("memory-title").value = "";
    document.getElementById("memory-description").value = "";
    document.getElementById("memory-media").value = "";
}

function toggleDarkMode() {
    darkMode = !darkMode;
    body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
}
function addMemory(title, description, mediaFile) {
    const memory = {
        id: Date.now(),
        title,
        description,
        media: mediaFile ? URL.createObjectURL(mediaFile) : null,
        mediaType: mediaFile ? mediaFile.type : null,
    };
    memories.push(memory);
    renderMemories();
    toggleModal();
}

function renderMemories() {
    memoryWall.innerHTML = "";
    memories.forEach((memory) => {
        const memoryCard = document.createElement("div");
        memoryCard.className = "memory-card";

        let mediaContent = "";
        if (memory.media) {
            if (memory.mediaType.startsWith("video")) {
                mediaContent = `<video controls src="${memory.media}" class="memory-media"></video>`;
            } else {
                mediaContent = `<img src="${memory.media}" alt="${memory.title}" class="memory-media">`;
            }
        }

        memoryCard.innerHTML = `
            <h3>${memory.title}</h3>
            ${mediaContent}
            <p>${memory.description}</p>
            <div class="buttons">
                <button class="edit-btn" onclick="editMemory(${memory.id})">Edit</button>
                <button class="delete-btn" onclick="deleteMemory(${memory.id})">Delete</button>
            </div>
        `;
        memoryWall.appendChild(memoryCard);
    });
}

function deleteMemory(id) {
    memories = memories.filter((memory) => memory.id !== id);
    renderMemories();
}

function editMemory(id) {
    const memory = memories.find((mem) => mem.id === id);
    if (memory) {
        document.getElementById("memory-title").value = memory.title;
        document.getElementById("memory-description").value = memory.description;
        toggleModal();
        deleteMemory(id);
    }
}

addMemoryBtn.addEventListener("click", toggleModal);

cancelBtn.addEventListener("click", () => {
    clearModalInputs();
    toggleModal();
});

saveMemoryBtn.addEventListener("click", () => {
    const title = document.getElementById("memory-title").value.trim();
    const description = document.getElementById("memory-description").value.trim();
    const media = document.getElementById("memory-media").files[0];

    if (title && description) {
        addMemory(title, description, media);
        clearModalInputs();
    } else {
        alert("Please fill in all required fields.");
    }
});

searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".memory-card").forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

darkModeToggle?.addEventListener("click", toggleDarkMode);
if (localStorage.getItem("darkMode") === "enabled") {
    toggleDarkMode();
}
renderMemories();