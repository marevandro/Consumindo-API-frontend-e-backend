# Consumir API

## API

Criar um api
- [x] Iniciar o projeto `npm init -y` 1
- [x] Instalar as dependências `npm i express nodemon cors axios` 2
- [x] Criar uma rota para acessar API 3 
      utilizando express, olhar documentação
- [x] Servir a API
- [x] Habilitar o CORS 6 
- [x] Habilitar o nodemon para reinicaiar o server 7 

## frontend
Consumir API

- [x] Utilizar fetch para consumir nossa API backend
      fetch é uma api do navegador que se comunica com qualquer lugar
- [x] Explicar Promise - Async/await
      a fetch não executa de maneira imediata, por isso usamos os promise,
      eles prometem entregar algo e pra isso funcionar usamos uma função assincrona.
      na verdade usamos o await(aguardam) que so pode ser usado dentro de uma função assincrona. 
- [x] Usar try/catch
      oque aconteceria se a resposta da função vir com erro, tratamos com o try para a resposta correta e o catch
      sinaliza o erro.
- [x] Mostrar a resposta na tela

## backend
Consumir API

- [x] jsonplaceholder (https://jsonplaceholder.typicode.com/users)
- [x] usar axios
- [x] semelhanças entre axios e fetch
- [] usar try/catch / ultimo passo