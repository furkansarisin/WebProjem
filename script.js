document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.style.opacity = 0;

    setTimeout(() => {
        projectsSection.style.transition = 'opacity 1s';
        projectsSection.style.opacity = 1;
    }, 100);
});
