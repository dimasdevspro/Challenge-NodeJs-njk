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
        const mounth = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDay()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
            
}
        