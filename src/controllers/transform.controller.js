const nodemailer = require('nodemailer');
const fs = require('fs')
const excel = require('alasql')


module.exports.transformData = async function(req, res, next){
    try{
        //Parametros de pesquisa do relatório
        
        /*
        # Se caso você quiser passar o email e senha do remetente no body da requisição use as variáveis a baixo.
        
        const fromEmail = req.body.fromEmail
        const fromEmailPass = req.body.fromEmailPass
        
        */
        const toEmail = req.body.toEmail
        const jsonData = req.body.jsonData
        const transporter = nodemailer.createTransport({
            service:'gmail', //Estou usando o serviço do Gmail, você pode usar qualquer um de sua preferência(consulte a documentação do nodemailer).
            auth:{
                user: 'SEU EMAIL DO GMAIL', // OU `${fromEmail}`,
                pass: 'SUA SENHA' // OU `${fromEmailPass}`
            }
        });
        //******** Relatório em Excel ************//
        function relatorio(){

            //trasformando Json em excel 
            var output_file_name = "Relatorio.xlsx";
            excel('SELECT * INTO XLSX("Relatorio.xlsx", {headers: true}) FROM ?', [jsonData])
            //res.send("Relatório")
            
            //Enviando E-mail com o relatório
            function sendUserEmail(){
                let attachments = [{
                    filename: output_file_name,
            
                    //informe o path onde seu arquivo foi salvo após ser gerado(no path abaixo estou informando o meu).
                    path: 'C:/Users/Wylder/Desktop/Developer/GithubProjects/json-excel-node/Relatorio.xlsx'
                }]
                
                //configuração de envio do e-mail.
                let mailOptions = {
                    from: 'SEU EMAIL DO GMAIL', // OU `${fromEmail}`,
                    to:`${toEmail}`,
                    subject:'Relatório em Excel',
                    text:`Coloque qualquer texto aqui.`,
                    attachments: attachments
                };
                
                //Função transporter para enviar o e-mail.
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error)
                        //res.end("Erro ao enviar e-mail!")
                    }else{
                        console.log('Email sent: ' + info.res)
                        //res.end("E-mail enviado com sucesso!")
                    }
                })
                
            }
            
            //Função para deletar o arquivo do diretório local após o envio(Obs: opcional caso você queira salvar).
             function delSend(){
                sendUserEmail()
                setTimeout(function(){
                    fs.unlink("Relatorio.xlsx", function (err) {
                        if (err) throw err;
                        console.log('File deleted!');
                    });
                }, 2000)
                res.status(200).json("Relatório Excel")
            }delSend()  
        }
        //Executando a função principal.
        relatorio()
    }
    catch(error){
        console.error("Error: ", error)
    }
}