const botao = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

botao.addEventListener('click', () => {
    navLinks.classList.toggle('exibir-menu');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

function enviarWhats(event){
    const telefone = '5511987654321';

    const texto = 'Olá! Tenho interesse em um serviço';
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    window.open(url, '_blank');
}