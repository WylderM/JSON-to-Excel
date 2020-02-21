const nodemailer = require('nodemailer');
const fs = require('fs')
const excel = require('alasql')


module.exports.transformData = async function(res, next){
    try{
        //Parametros de pesquisa do relatório
        const fromEmail = JSON.stringify(req.body.fromEmail)
        const fromEmailPass = JSON.stringify(req.body.fromEmailPass)
        const toEmail = JSON.stringify(req.body.toEmail)
        const jsonData = req.body.jsonData
        console.log(jsonData, toEmail, fromEmail, fromEmailPass)
        // const transporter = nodemailer.createTransport({
        //     service:'gmail',
        //     auth:{
        //         user: `${fromEmail}`,
        //         pass: `${fromEmailPass}`
        //     }
        // });
        // //******** Relatório em Excel ************//
        // function relatorio(){

        //     //trasformando Json em excel 
        //     var output_file_name = "Relatorio.xlsx";
        //     excel('SELECT * INTO XLSX("Relatorio.xlsx", {headers: true}) FROM ?', [jsonData])
        //     //res.send("Relatório")
            
        //     //Enviando E-mail com o relatório
        //     function sendUserEmail(){
        //         let attachments = [{
                    
        //             filename: output_file_name,
                    
        //             //informe o path onde seu arquivo foi salvo após ser gerado(no path abaixo estou informando o meu).
        //             path: 'C:/Users/Wylder/Desktop/Developer/Github Projects/json-excel-node/Relatorio.xlsx'
        //         }]
        //         //configuração de envio do e-mail.
        //         let mailOptions = {
        //             from:`${fromEmail}`,
        //             to:`${toEmail}`,
        //             subject:'Relatório em Excel',
        //             text:`Coloque qualquer texto aqui.`,
        //             attachments: attachments
        //         };
                
        //         //Função transporter para enviar o e-mail.
        //         transporter.sendMail(mailOptions, function(error, info){
        //             if(error){
        //                 console.log(error)
        //                 //res.end("Erro ao enviar e-mail!")
        //             }else{
        //                 console.log('Email sent: ' + info.res)
        //                 //res.end("E-mail enviado com sucesso!")
        //             }
        //         })
                
        //     }
            
        //     //Função para deletar o arquivo do diretório local após o envio(Obs: opcional caso você queira salvar).
        //     function delSend(){
        //         sendUserEmail()
        //         setTimeout(function(){
        //             fs.unlink("Relatorio.xlsx", function (err) {
        //                 if (err) throw err;
        //                 console.log('File deleted!');
        //             });
        //         }, 2000)
        //         res.status(200).json("Relatório Excel")
        //     }delSend()  
                
            
        // }
        // relatorio()
    }
    catch(error){
        console.error("Error: ", error)
    }
}