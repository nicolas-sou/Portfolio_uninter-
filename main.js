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

function showContactSection() {
    // Exibe a seção de Contato
    document.getElementById('Contato').style.display = 'block';
}

// Adicione um evento de clique ao link da seção de Contato
const contactLink = document.querySelector('a[href="#Contato"]');
contactLink.addEventListener('click', showContactSection);

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Montar o link "mailto" com os dados do formulário
    const mailtoLink = `mailto:nicollasouza141@gmail.com?subject=Contato&body=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;

    // Abrir o cliente de e-mail padrão do usuário com os dados preenchidos
    window.location.href = mailtoLink;
}

// Adicione um evento de envio ao formulário de contato
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);
