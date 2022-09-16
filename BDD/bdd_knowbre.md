#language: pt

# Funcionalidade: Login
>Como usuário do app KnowBre
>
>Fulano quer completar o login 
>
>Para que ele tenha acesso as funcionalidades do usuário logado
>   
## Contexto:
>Dado que fulano possui uma conta no sistema
>
## Cenário: Login válido
>E ele acessa a página de login
>
>E preenche os formulários com suas credenciais válidas
>
>Quando ele aciona a opção de logar
>
>Então ele deve ser redirecionado para a página principal de usuário logado (Home)
>
## Cenário: Login con dados incorretos
>E ele acessa a página de login
>
>E preenche suas credenciais inválidas
>
>Quando ele aciona a opção para logar
>
>Então uma mensagem de usuário e/ou senha incorreta deve ser exibida 
>
-----
# Funcionalidade: Esqueci minha senha
>Dado que fulano esqueceu sua senha de cadastro
>
>Quando ele aciona a opção para recuperar senha
>
>E preenche com seu e-mail cadastrado
>
>Então uma mensagem de aviso para verificar seu e-mail e resetar a senha deve ser exibida
>
# Contexto
>Dado que Fulano esqueceu sua senha
>
>E deseja recuperar sua conta
>
>Quando o usuário aciona a função "Esqueci minha senha"
>
## Cenário: Fulano preenche com um email anteriormente cadastrado
>E Fulano preenche o formulário com um email cadastrado
>
>Então uma mensagem de aviso pede para Fulano checar seu email
>
>Então uma mensagem é enviada pelo email preenchido para ele recuperar sua senha
>
## Cenário: Fulano preenche com um email não cadastrado
>E Fulano preenche o formulário com um email não cadastrado
>
>Então uma mensagem de aviso informa que o email preenchido não tem uma conta relacionada
>
>E pede para Fulano criar uma nava conta
>
-----
# Funcionalidade: Cadastro
>Como usuario do app KnowBre
>
>Fulano quer completar o cadastro 
>
>Para que ele tenha acesso as funcionalidades de um usuário cadastrado
>
## Contexto:
>Dado que Fulano não possuí uma conta no sistema
>
## Cenário: Cadastro válido
>E ele acessa a página de cadastro
>
>E preenche suas credenciais válidas
>
>Quando ele aciona a opção para cadastrar
>
>Então o sistema verifica se os dados registrados são válidos
>
>Então ele deve ser redirecionado para a página de usuário cadastrado
>
## Cenário: Cadastro com credencial incorreta
>E ele acessa a página de cadastro
>
>E preenche suas credenciais inválidas
>
>Quando ele aciona a opção para cadastrar
>
>Então o sistema verifica se os dados registrados são válidos
>
>Então uma mensagem destacando a credencial inválida deve ser exibida
-----
# Funcionalidade: Abrir card Knowbre
>Dado que Fulano esteja logado
>
>E clique em cima de um card Knowbre
>
>Então Fulano deve visualizar o conteúdo do card
## Contexto
>Dado que Fulano tem uma conta no sistema
>
>E acessa a página prncipal
>
## Cenário: Usuário clica no card
>Quando ele clica em cima de um card Knowbre
>
>Então o conteúdo do card deve ser monstrado e ampliado na tela do Fulano
>
-----
# Funcionalidade: Escrever um card
>Dado que Fulano esteja logado
>
>E clique no ícone para escrever novo card
>
>Então Fulano deve ser redirecionado a tela de edição de cards
## Contexto
>Dado que Fulano tem uma conta no sistema
>
>E acessa a página prncipal
>
## Cenário: Editar card
>Quando ele clica no ícone '+' para escrever um novo card
>
>Então ele será redirecionado a tela de edição
## Cenário: Adicionar card
>E ele clica no ícone '+' para escrever um novo card
>
>Quando ele for redirecionado a tela de edição
>
>Então poderá clicar no ícone '+' para adicionar mais de um card
>
## Cenário: Excluir card
>E ele clica no ícone '+' para escrever um novo card
>
>Quando ele for redirecionado a tela de edição
>
>Então poderá clicar no ícone de lixeira para excluir um card
>
## Cenário: Postar card
>E ele clica no ícone '+' para escrever um novo card
>
>E ele for redirecionado a tela de edição
>
>Quando ele tiver editado o texto de seu card
>
>Então poderá clicar no botão para postar seu card
>
-----
Dado
Quando
Então
E
Mas