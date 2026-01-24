// Load shared header
function loadHeader() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            if (!hamburger || !navLinks) return;
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('open');
            });

            const path = window.location.pathname;
            document.querySelectorAll('.nav-links a').forEach(link => {
                const linkHref = link.getAttribute('href');
                const normalizedPath = path.replace(/^\/|\.html$/g, '');
                const normalizedHref = linkHref.replace(/^\/|\.html$/g, '');
                if (normalizedPath === normalizedHref || (normalizedPath === '' && normalizedHref === 'index')) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => console.error('Header load failed:', err));
}

// Load shared footer
function loadFooter() {
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Footer load failed:', err));
}

// Portfolio handling
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('header-placeholder')) loadHeader();
    if (document.getElementById('footer-placeholder')) loadFooter();

    // Accordion toggles
    document.querySelectorAll('.accordion-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });

    const grid = document.getElementById("projects-grid");
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const modalClose = document.getElementById("modal-close");
    const modalPrev = document.getElementById("modal-prev");
    const modalNext = document.getElementById("modal-next");
    if (!grid || !window.portfolioProjects) return;

    let projectsData = window.portfolioProjects;
    let visibleProjects = [...projectsData]; // Filtered Projects
    let selectedDisciplines = new Set();
    let selectedSkills = new Set();
    let currentIndex = 0;
    // Discipline buttons
    document.querySelectorAll(".discipline-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const discipline = btn.dataset.discipline;
            btn.classList.toggle("active");
            btn.classList.contains("active") ? selectedDisciplines.add(discipline) : selectedDisciplines.delete(discipline);
            applyFilters();
        });
    });

    // Skill Buttons
    const skillsContainer = document.getElementById("skill-filter");
    skillsContainer.style.display = "none";

    const multiSelectHTML = `
        <div class="multi-select" id="skills-dropdown">
            <div class="multi-select-input">All Skills</div>
            <div class="multi-select-dropdown"></div>
        </div>
    `;
    grid.parentElement.querySelector(".no-wrap")
        .insertAdjacentHTML("beforeend", multiSelectHTML);

    const dropdown = document.querySelector("#skills-dropdown .multi-select-dropdown");
    const input = document.querySelector("#skills-dropdown .multi-select-input");
    const skillsSet = new Set();
    projectsData.forEach(p => p.skills.forEach(s => skillsSet.add(s)));

    const allLabel = document.createElement("label");
    const allCheckbox = document.createElement("input");
    allCheckbox.type = "checkbox";
    allCheckbox.value = "all";
    allCheckbox.checked = true;
    allLabel.append(allCheckbox, "All Skills");
    dropdown.appendChild(allLabel);

    [...skillsSet].sort().forEach(skill => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = skill;
        checkbox.checked = true;
        label.append(checkbox, skill);
        dropdown.appendChild(label);
    });

    selectedSkills = new Set(
        [...dropdown.querySelectorAll("input")]
            .map(i => i.value)
            .filter(v => v !== "all")
    );

    input.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    dropdown.querySelectorAll("input").forEach(box => {
        box.addEventListener("change", () => {
            if (box.value === "all") {
                dropdown.querySelectorAll("input").forEach(cb => cb.checked = box.checked);
            }
            selectedSkills = new Set(
                [...dropdown.querySelectorAll("input")]
                    .filter(cb => cb.checked && cb.value !== "all")
                    .map(cb => cb.value)
            );
            const anyUnchecked = [...dropdown.querySelectorAll("input")]
                .filter(cb => cb.value !== "all")
                .some(cb => !cb.checked);
            allCheckbox.checked = !anyUnchecked;
            updateInputLabel();
            applyFilters();
        });
    });

    function updateInputLabel() {
        if (allCheckbox.checked) {
            input.textContent = "All Skills";
        } else {
            input.textContent = `${selectedSkills.size} skill${selectedSkills.size !== 1 ? "s" : ""} selected`;
        }
    }

    document.addEventListener("click", e => {
        if (!e.target.closest("#skills-dropdown")) dropdown.style.display = "none";
    });

    function renderProjects(projects) {
        grid.innerHTML = "";
        visibleProjects = projects;
        if (!projects.length) {
            grid.innerHTML = "<p style='color:white;'>No projects match the selected filters.</p>";
            return;
        }
        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = `
                <div class="project-title">${project.title}</div>
                <div class="project-discipline">${project.discipline || ""}</div>
                <div class="project-dates">${project.dates}</div>
                <div class="project-short">${project.shortDescription}</div>
            `;
            card.addEventListener("click", () => {
                currentIndex = visibleProjects.indexOf(project);
                showModal(visibleProjects[currentIndex]);
            });
            grid.appendChild(card);
        });
    }

    renderProjects(projectsData);

    function applyFilters() {
        let filtered = [...projectsData];
        if (selectedDisciplines.size > 0) {
            filtered = filtered.filter(p => selectedDisciplines.has(p.discipline));
        }
        filtered = filtered.filter(p => [...selectedSkills].some(s => p.skills.includes(s)));
        renderProjects(filtered);
    }

    function showModal(project) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-discipline">${project.discipline || ""}</div>
            <div class="modal-dates">${project.dates}</div>
            <div class="skills">${project.skills.map(s => `<span class="skill">${s}</span>`).join("")}</div>
            <div class="modal-links">
                ${project.links.map(l => `<a href="${l.url}" target="_blank" class="modal-link">${l.label}</a>`).join(" | ")}
            </div>
            <div class="project-content">${project.contentHtml}</div>
        `;
        modal.style.display = "flex";
    }

    modalClose.onclick = () => modal.style.display = "none";
    modalPrev.onclick = () => {
        currentIndex = (currentIndex - 1 + visibleProjects.length) % visibleProjects.length;
        showModal(visibleProjects[currentIndex]);
    };
    modalNext.onclick = () => {
        currentIndex = (currentIndex + 1) % visibleProjects.length;
        showModal(visibleProjects[currentIndex]);
    };
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });
    document.addEventListener("keydown", e => {
        if (modal.style.display === "flex") {
            if (e.key === "ArrowLeft") modalPrev.click();
            if (e.key === "ArrowRight") modalNext.click();
            if (e.key === "Escape") modalClose.click();
        }
    });
});
