describe('Lista de Testes', function(){
    
    describe("Nível de calculo", function(){
        it("Somar corretamente os valores", function(){
        var res = new Soma().Adicao();
        expect(res).toEqual(5);

        // toEqual =assert = match
        })
        
    });
    /***************************************************************************/

    describe("Nível de calculo 2", function(){
        it("Multiplicar valores", function(){
            var res = vezes(2,3)
            expect(res).toEqual(6)
        })
    })

    /***************************************************************************/

    describe("Aprovado ou Reprovado", function(){
        it("passou ou não passou", function(){
            var res =situacao()
            expect(res).toEqual("Reprovado")
        })
    })
    /***************************************************************************/

    describe("Qual o maior", function(){
        it('A ou B', function(){
            var res = comparacao()
            // expect(res).toBeTruthy(false)
            expect(res).toEqual(true)
        })
    })

    /***************************************************************************/
    describe("Pessoa", function(){
        var pessoa = new Pessoa ("Maria", "Pereira", 52, "Castanho")
        it("metodo - nome", function(){
            expect("Maria Pereira").toBe(pessoa.Nome())
        })
        it("metodo - nome_idade", function(){
            expect("Maria Pereira tem idade igual a 52").toBe(pessoa.Nome_Idade())
        })
        it("metodo - nome_CorCabelo", function(){
            expect("Maria Pereira tem cabelo com cor Castanho").toBe(pessoa.Nome_CorCabelo())
        })
    })

    /***************************************************************************/

    describe("Projeto Calculadora", function(){
        it("Calculadora", function(){
            var res = subtrair()
            expect(res).toEqual(2)
        })
    })




















})