const mensagem = (usuario) => {

    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();

    return horas < 6 || horas >= 18
        ? console.log(`Boa noite, ${usuario} Horário: ${horas}:${minutos}:${segundos}`)
        : horas >= 6 && horas < 12
            ? console.log(`Bom dia, ${usuario} Horário: ${horas}:${minutos}:${segundos}`)
            : console.log(`Boa tarde, ${usuario} Horário: ${horas}:${minutos}:${segundos}`)
}

mensagem('Sr. Anderson');