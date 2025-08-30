// Espera o documento HTML ser completamente carregado para executar o código
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os links de navegação e todas as seções de conteúdo
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Função para mostrar a página correta e esconder as outras
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // Itera sobre todos os links de navegação para atualizar o estilo do link ativo
        navLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Adiciona um evento de clique para cada link da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o recarregamento da página:
            event.preventDefault();

            // Pega o valor do atributo 'data-page' do link que foi clicado
            const targetPageId = this.dataset.page;

            // Chama a função para mostrar a página correspondente
            showPage(targetPageId);
        });
    });

    // Garante que a página 'sobre' seja exibida ao carregar o site pela primeira vez
    showPage('sobre');
});