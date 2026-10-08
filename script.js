// ========================================
// Maryam Alnumani Portfolio
// GitHub Projects
// ========================================

const githubUsername = "MaryamAlnumani";

const projectsContainer =
document.getElementById("projects-container");


// ========================================
// Get GitHub Projects
// ========================================

async function getGitHubProjects() {

try {

const response = await fetch(
`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`
);

if (!response.ok) {
throw new Error(
`GitHub API Error: ${response.status}`
);
}

const repositories = await response.json();

displayOtherProjects(repositories);

} catch (error) {

console.error("GitHub Projects Error:", error);

projectsContainer.innerHTML = `
<p style="
color: #aaa3b0;
text-align: center;
grid-column: 1 / -1;
">
Unable to load GitHub projects.
</p>
`;
}
}


// ========================================
// Display Other Projects
// ========================================

function displayOtherProjects(repositories) {

repositories.forEach(repo => {

const repoName =
repo.name.toLowerCase();


// ========================================
// Don't show Featured Project twice
// Red Sea Rescue Grid is already displayed
// in the Featured Project section.
// ========================================

if (
repoName === "red-sea-rescue-grid" ||
repoName === "redsearescuegrid" ||
repoName === "maryam-alnumani-portfolio"
) {
return;
}


// ========================================
// Create Project Card
// ========================================

const card =
document.createElement("div");

card.className =
"project-card";


const description =
repo.description ||
"A project developed by Maryam Alnumani.";


const language =
repo.language ||
"Project";


card.innerHTML = `

<span class="project-language">
${language}
</span>

<h3>
${repo.name}
</h3>

<p>
${description}
</p>

<a
href="${repo.html_url}"
target="_blank"
rel="noopener noreferrer"
class="project-link"
>
View Project →
</a>

`;


// ========================================
// Add Project
// ========================================

projectsContainer.appendChild(card);

});
}


// ========================================
// Start Portfolio
// ========================================

getGitHubProjects();


// ========================================
// Mobile Menu
// ========================================

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.querySelector(".nav-links");


if (menuToggle && navLinks) {

menuToggle.addEventListener(
"click",
() => {

navLinks.classList.toggle("active");

}
);


navLinks
.querySelectorAll("a")
.forEach(link => {

link.addEventListener(
"click",
() => {

navLinks.classList.remove(
"active"
);

}
);

});

}
