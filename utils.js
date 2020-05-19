module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    graduation: function graduation(value) {
        switch(value) {
            case(medio): return "Ensino Médio Completo";
            break;
            case(superior): return "Ensino Superior Completo";
            break;
            case(mestrado): return "Mestrado";
            break;
            case(doutorado): return "Doutorado";
            default:
                return "Selecione a opção que se aproxima"
        }
    },
    date: function(timestamp){
        const date = new Date (timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDay()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    grade: function grade(value){
    switch(value) {
        case(aEF): return "6º Ano do Ensino Fundamental";
        break;
        case(bEF): return "7º Ano do Ensino Fundamental";
        break;
        case(cEF): return "8º Ano do Ensino Fundamental";
        break;
        case(dEF): return "9º Ano do Ensino Fundamental";
        break;
        case(eEM): return "1º Ano do Ensino Médio";
        break;
        case(fEM): return "2º Ano do Ensino Médio";
        break;
        case(gEM): return "3º Ano do Ensino Médio";
        default:
            return "verifique o ano novamente!"

    }
}
            
}
        