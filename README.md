# fullcycle-docker-desafio02

App nodejs que faz a inserção de dados na tabela people em um banco de dados mysql e retorna a lista de nomes inseridos.

Possui um servidor nginx expondo a porta 8080 que atua como proxy reverso para fazer a chamada da aplicação na rede interna do container na porta 3000.

# Para executar

docker-compose up -d

# Para acessar

Acesse http://localhost:8080 em qualquer navegador.
