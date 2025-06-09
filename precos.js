const WHATSAPP_URL = 'https://wa.me/';
const phone = "5514998119831"
const messageBasic = "Olá, tudo bem? \n Tenho interesse no plano básico"
const messageCustom = "Olá, tudo bem? \n Tenho interesse no plano personalizado"

window.onload = function () {
    const btnBasico = document.getElementById('btnPlanoBasico');
    btnBasico.onclick = function () {
        const whatsappUrl = `${WHATSAPP_URL}${phone}?text=${encodeURIComponent(messageBasic)}`;
        window.open(whatsappUrl, '_blank');
    };
};

window.onload = function () {
    const btnBasico = document.getElementById('btnPlanoCustom');
    btnBasico.onclick = function () {
        const whatsappUrl = `${WHATSAPP_URL}${phone}?text=${encodeURIComponent(messageCustom)}`;
        window.open(whatsappUrl, '_blank');
    };
};