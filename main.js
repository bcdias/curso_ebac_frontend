// Abstração cliente
function Cliente(nome, sobreNome, cpf, nascimento) {
    this.nome = nome;
    this.sobreNome = sobreNome
    this.cpf = cpf;
    this.nascimento = nascimento
}


// Abstração Conta
function Conta(titular, numero, agencia, saldo, tipo) {
    let _titular = titular;
    let _numero = numero;
    let _agencia = agencia;
    let _saldo = saldo
    let _tipo = tipo;

    // Imprime dados da conta
    this.imprimeTitular = function () {
        console.log(`${_titular.nome} ${_titular.sobreNome}`)
    }

    this.imprimeCpf = () => {
        console.log(_titular.cpf)
    }

    this.imprimeNascimento = () => {
        console.log(_titular.nascimento)
    }

    this.imprimeNumero = function () {
        console.log(_numero)
    }

    this.imprimeAgencia = function () {
        console.log(_agencia)
    }

    this.imprimeSaldo = function () {
        console.log(_saldo)
        return _saldo
    }

    this.imprimeTipo = function () {
        console.log(_tipo)
    }

    // Geters
    this.getNumero = function () {
        return _numero
    }

    this.getAgencia = function () {
        return _agencia
    }

    this.getSaldo = function () {
        return _saldo
    }

    this.getTipo = function () {
        return _tipo
    }

    this.getTitular = function () {
        const titular = `${_titular.nome} ${_titular.sobreNome}`
        return titular
    }

    this.getCpf = () => {
        return _titular.cpf
    }

    this.getNascimento = () => {
        return _titular.nascimento
    }

    //Seters da conta

    this.setSaldo = (valor) => {
        _saldo = valor
    }

    //Operações das contas
    this.sacar = function (saque) {
        if (_saldo >= saque) {
            _saldo = _saldo - saque
        }
    }

    this.depositar = function (deposito) {
        _saldo = _saldo + deposito
    }
}


// Abstrações dos dois tipos de conta
function Corrente(titular, numero, agencia, saldo) {
    Conta.call(this, titular, numero, agencia, saldo, 'corrente')

    //Regra de saque para conta corrente
    this.sacar = function (saque) {
        if (this.getSaldo() >= saque) {
            const novoSaldo = this.getSaldo() - (saque * 1.02)
            this.setSaldo(novoSaldo)
        }
    }
}


function Poupanca(titular, numero, agencia, saldo) {
    Conta.call(this, titular, numero, agencia, saldo, 'poupança')
}

//Instanciando clientes
const bruno = new Cliente('bruno', 'dias', 12345678998, '29/05/1987')
const mariana = new Cliente('mariana', 'dias', 98765432101, '18/08/2020')
const monique = new Cliente('moique', 'cerqueira', 74185209637, '29/10/1986')

// Instanciando contas
const contaBruno = new Corrente(bruno, 1234, 12, 100)
const contaMariana = new Poupanca(mariana, 4321, 12, 200)
const contaMonique = new Corrente(monique, 9874, 12, 150)

//Teste com conta corrente
contaBruno.imprimeTitular()
contaBruno.sacar(50)
contaBruno.depositar(100)
contaBruno.imprimeSaldo()

contaMonique.imprimeTitular()
contaMonique.sacar(50)
contaMonique.depositar(100)
contaMonique.imprimeSaldo()


// Testes com conta poupança
contaMariana.imprimeTitular()
contaMariana.sacar(50)
contaMariana.depositar(100)
contaMariana.imprimeSaldo()