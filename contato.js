const WHATSAPP_URL = 'https://wa.me/';
const phone = "5514998119831"
const message = "Olá, tudo bem? \n Gostaria de falar com você sobre..."


window.onload = function () {
    const btnSend = document.getElementById('btnSend');
    btnSend.onclick = function () {
        // sendEmail();
    };
};

window.onload = function () {
    const btnWhatsapp = document.getElementById('btnWhatsapp');
    btnWhatsapp.onclick = function () {
       const whatsappUrl = `${WHATSAPP_URL}${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
};


function sendEmail() {
    const url = 'https://api.brevo.com/v3/smtp/email';

    const payload = {
        sender: { name: "From Name", email: "from@example.com" },
        to: [{ email: "to@example.com", name: "To Name" }],
        subject: "Hello from Brevo API",
        htmlContent: "<html><body><h1>Hello!</h1><p>This is a test email.</p></body></html>"
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("api-key", "YOUR_API_V3_KEY"); // substitua com sua chave real

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Email enviado com sucesso:', response);
            } else {
                console.error('Erro ao enviar email:', response);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Erro de rede ou outro erro durante a requisição.');
    };

    xhr.send(JSON.stringify(payload));
}
