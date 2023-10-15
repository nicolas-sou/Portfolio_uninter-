function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção clicada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}