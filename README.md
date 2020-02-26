# JSON-to-Excel
API de feita em Node JS + Express para transformar um arquivo JSON em Excel(xlsx) e enviá-lo por e-mail.

Principais tecnologias:

Envio de email: https://nodemailer.com/about/
JSON to Excel(xlsx): https://github.com/agershun/alasql

Obs: Lembrando que estou usando o serviço do gmail como remetente(Leia a documentação do nodemailer), mas o destinatário pode ser qualquer email.

Para iniciar o projeto:
npm run dev //Desenvolvimento
npm start  //Produção


Duas maneiras de enviar o json no body da requisição:

1 - Se caso você quiser enviar o email e o relatório:

jsonData = Relatório
toEmail = Email do destinatário

Exemplo: 

{
	"toEmail":"fulano.dev@qualquer.com",
	"jsonData": [{
		"Produto":"Notebook", 
    "Preço": "1500,00"
	}]
}

2 - Se caso você quiser enviar um email e senha de uma conta qualquer como remetente. 

jsonData = Relatório
toEmail = Email do destinatário

Exemplo: 

{
  "fromEmail":"email.qualquer@gmail.com",
  "fromEmailPass":"senha",
	"toEmail":"fulano.dev@qualquer.com",
	"jsonData": [{
		"Produto":"Notebook", 
    "Preço": "1500,00"
	}]
}



