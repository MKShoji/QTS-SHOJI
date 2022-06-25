import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = "Matheus Shoji";
let professores = ['Siles', 'Alan', 'Davi', 'André Maia'];

Deno.test("Teste de Assertions: "), () => {
    assertEquals(aluno, "Matheus Shoji"); 
    assertStringIncludes(aluno, "Matheus"); 
}

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Siles", "Alan", "Davi"],
        "Opa! Algo deu errado!");
})