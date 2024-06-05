function updateTime() { // Declara uma função chamada updateTime
    const now = new Date(); // Cria um novo objeto Date com a data e hora atuais
    const hours = String(now.getHours()).padStart(2, '0'); // Obtém a hora atual e formata para dois dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Obtém os minutos atuais e formata para dois dígitos
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Obtém os segundos atuais e formata para dois dígitos
    const timeString = `${hours}:${minutes}:${seconds}`; // Concatena a hora, minutos e segundos em uma string de tempo

    const day = String(now.getDate()).padStart(2, '0'); // Obtém o dia atual do mês e formata para dois dígitos
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Obtém o mês atual (0-11) e formata para dois dígitos (adiciona 1 porque os meses são baseados em zero)
    const year = now.getFullYear(); // Obtém o ano atual
    const dateString = `${day}/${month}/${year}`; // Concatena o dia, mês e ano em uma string de data

    document.getElementById('time').textContent = timeString; // Define o conteúdo da div com id 'time' como a string de tempo
    document.getElementById('date').textContent = dateString; // Define o conteúdo da div com id 'date' como a string de data
}

setInterval(updateTime, 1000); // Define um intervalo para chamar a função updateTime a cada 1000 milissegundos (1 segundo)
updateTime(); // Chama a função updateTime uma vez imediatamente para exibir o horário instantaneamente
