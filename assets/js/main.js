

$(document).ready(function () {

// dados
    const uf = [
        { uf: 'AC', estado: 'Acre' },
        { uf: 'AL', estado: 'Alagoas' },
        { uf: 'AP', estado: 'Amapá' },
        { uf: 'AM', estado: 'Amazonas' },
        { uf: 'BA', estado: 'Bahia' },
        { uf: 'CE', estado: 'Ceará' },
        { uf: 'DF', estado: 'Distrito Federal' },
        { uf: 'ES', estado: 'Espírito Santo' },
        { uf: 'GO', estado: 'Goiás' },
        { uf: 'MA', estado: 'Maranhão' },
        { uf: 'MT', estado: 'Mato Grosso' },
        { uf: 'MS', estado: 'Mato Grosso do Sul' },
        { uf: 'MG', estado: 'Minas Gerais' },
        { uf: 'PA', estado: 'Pará' },
        { uf: 'PB', estado: 'Paraíba' },
        { uf: 'PR', estado: 'Paraná' },
        { uf: 'PE', estado: 'Pernambuco' },
        { uf: 'PI', estado: 'Piauí' },
        { uf: 'RJ', estado: 'Rio de Janeiro' },
        { uf: 'RN', estado: 'Rio Grande do Norte' },
        { uf: 'RS', estado: 'Rio Grande do Sul' },
        { uf: 'RO', estado: 'Rondônia' },
        { uf: 'RR', estado: 'Roraima' },
        { uf: 'SC', estado: 'Santa Catarina' },
        { uf: 'SP', estado: 'São Paulo' },
        { uf: 'SE', estado: 'Sergipe' },
        { uf: 'TO', estado: 'Tocantins' }
    ]

// mascaras
    uf.forEach(estado => {
        $('#uf').append(`<option value=${estado.estado}>${estado.uf}</option>`)
    })

    $('#nascimento').mask('00/00/0000', {
        placeholder: '__/__/____'
    })
    $('#cpf').mask('0000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })


    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

// validações

});