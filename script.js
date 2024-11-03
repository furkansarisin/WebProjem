function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Sayfa yüklendiğinde animasyonları etkinleştir
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100); // 100 ms sonra animasyonu başlat
    });
});
