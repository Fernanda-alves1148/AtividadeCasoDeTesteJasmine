// aqui fica o código fonte

class Soma{
    constructor(){
        this._numero1 =1;
        this._numero2 =4;
    }

    Adicao(){
        return this._numero1 + this._numero2;
    }
}
/*******************************************************************************/

function vezes(a,b){
    return a * b
}

/***************************************************************************/

const situacao =(nota, media)=>{

    const res = 3 >= 4 ? "Aprovado" : "Reprovado"

    return res

}

/***************************************************************************/

function comparacao(){
    var a = 40
    var b = 30
    var situacao

    if(a>b){
        situacao = true 
    }else{
        situacao = false
    }
    return situacao
}
/***************************************************************************/
function Pessoa(_nome, _SobreNome, _Idade, _CorCabelo){
    var nome = _nome
    var SobreNome = _SobreNome
    var Idade = _Idade
    var CorCabelo = _CorCabelo

    this.Nome = function(){
        return nome + " " + SobreNome
    }

    this.Nome_Idade = function(){
        return nome + " " + SobreNome + " tem idade igual a " + Idade
    }

    this.Nome_CorCabelo = function(){
        return nome + " " + SobreNome + " tem cabelo com cor " + CorCabelo
    }
}

/***************************************************************************/

function subtrair(){
    var subtrair1 = document.getElementById('subtrair1')
    var subtrair2 = document.getElementById('subtrair2')
 //   var v1 = Number(subtrair1.value)
 //   var v2 = Number(subtrair2.value)
    var resultado = document.getElementById('resultado')
    var subtrair = 4 - 2
 //   resultado.innerHTML = `A Subtraçãoo é: ${subtrair}`
 return subtrair
}

