document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário.
});
