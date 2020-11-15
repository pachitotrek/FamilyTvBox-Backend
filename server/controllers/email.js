'use strict'

const mysql = require('mysql');
const nodemailer = require('nodemailer');


const host = require('../config/config').host;
const port = require('../config/config').EmailPortS;
const userE = require('../config/config').Email;
const userP = require('../config/config').EmailPass;


const EmailController = {
 
    sendPass:function(email,pass,res){   

        const transporter = nodemailer.createTransport(
            {
                host: "sv50.byethost50.org",
                port: 25,
                auth: {
                    user: userE,
                    pass: userP
                }
            }
        )   

        var asunto= ` Restablecimiento de Contraseña`;    
        var mensaje = `
        <!DOCTYPE html>
        <html lang="ES-es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <body>
            <div id="mailsub" class="notification" align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width: 320px;">
                    <tr>
                        <td align="center" bgcolor="#eff3f8">
                            <table border="0" cellspacing="0" cellpadding="0" class="table_width_100" width="100%"
                                style="max-width: 680px; min-width: 300px;">
                                <tr>
                                    <td>                         
                                        <div style="height: 80px; line-height: 80px; font-size: 10px;"> </div>
                                    </td>
                                </tr>                   
                                <tr>
                                    <td align="center" bgcolor="#ffffff">                             
                                        <div style="height: 30px; line-height: 30px; font-size: 10px;"> </div>
                                        <table width="90%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="left">                       
                                                    <div class="mob_center_bl"
                                                        style="float: left; display: inline-block; width: 115px;">
                                                        <table class="mob_center" width="115" border="0" cellspacing="0"
                                                            cellpadding="0" align="left" style="border-collapse: collapse;">
                                                            <tr>
                                                                <td align="left" valign="middle">                                                       
                                                                    <div
                                                                        style="height: 20px; line-height: 20px; font-size: 10px;">
                                                                         </div>
                                                                    <table width="115" border="0" cellspacing="0"
                                                                        cellpadding="0">
                                                                        <tr>
                                                                            <td align="left" valign="top" class="mob_center">
                                                                                <a href="#" target="_blank"
                                                                                    style="color: #596167; font-family: Arial, Helvetica, sans-serif; font-size: 13px;">
                                                                                    <font
                                                                                        face="Arial, Helvetica, sans-seri; font-size: 13px;"
                                                                                        size="3" color="#596167">
                                                                                        <img src="http://familymedia.orione.cf/api/img/app/logo.png"
                                                                                            width="115" alt="Family Media"
                                                                                            border="0"
                                                                                            style="display: block;" /></font>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                            </tr>
                                        </table>                           
                                        <div style="height: 50px; line-height: 50px; font-size: 10px;"> </div>
                                    </td>
                                </tr>                    
                                <tr>
                                    <td align="center" bgcolor="#fbfcfd">
                                        <table width="90%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center">                                        
                                                    <div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>
                                                    <div style="line-height: 44px;">
                                                        <font face="Arial, Helvetica, sans-serif" size="5" color="#57697e"
                                                            style="font-size: 34px;">
                                                            <span
                                                                style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">
                                                                Restablecimiento de Contraseña
                                                            </span></font>
                                                    </div>                                      
                                                    <div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <div style="line-height: 24px;">
                                                        <font face="Arial, Helvetica, sans-serif" size="4" color="#57697e"
                                                            style="font-size: 15px;">
                                                            <span
                                                                style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">
                                                                <div>
                                                                Ingrese a la Aplicacion con la siguiente Contraseña: <br>                                                                
                                                                ${pass}
                                                                <br>                                                                         
                                                     
                                                                </div>                                                             

                                                            </span></font>
                                                    </div>                                      
                                                    <div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <div style="line-height: 24px;">
                                                        <a href="#" target="_blank"
                                                            style="color: #596167; font-family: Arial, Helvetica, sans-serif; font-size: 13px;">
                                                            <font face="Arial, Helvetica, sans-seri; font-size: 13px;" size="3"
                                                                color="#596167">
                                                                <img src="http://familymedia.orione.cf/api/img/app/logo.png"
                                                                    width="193" alt="Mystery Box Midea" border="0"
                                                                    style="display: block;" /></font>
                                                        </a>
                                                    </div>                                        
                                                    <div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>                    
                                <tr>
                                    <td class="iage_footer" align="center" bgcolor="#ffffff">                             
                                        <div style="height: 80px; line-height: 80px; font-size: 10px;"> </div>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center">
                                                    <font face="Arial, Helvetica, sans-serif" size="3" color="#96a5b5"
                                                        style="font-size: 13px;">
                                                        <span
                                                            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #96a5b5;">
                                                            2019 © Orion Engineering. ALL Rights Reserved.
                                                        </span></font>
                                                </td>
                                            </tr>
                                        </table>                               
                                        <div style="height: 30px; line-height: 30px; font-size: 10px;"> </div>
                                    </td>
                                </tr>                        
                                <tr>
                                    <td>                           
                                        <div style="height: 80px; line-height: 80px; font-size: 10px;"> </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        </body>
        </html>          
        `;

        const mailOptions = {
            from: userE,
            to: email,
            subject: asunto,
            html: mensaje
        }; 

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {               
                console.log(error);
            } else {
                return res.status(200).json({
                    ok: true,
                    message: "Correo Enviado"
                })
            }
        });
    }


}

module.exports.EmailController = EmailController;




