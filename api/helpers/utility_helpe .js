'user strict';

const getHtmlDesign = (data, date , id) => {

  const output = `
   <html>

   <head>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
       <link href="https://fonts.googleapis.com/css?family=Poppins|Raleway" rel="stylesheet">

       <style type="text/css">
           .template-mail {
               margin-left: 3%;
               margin-right: 3%;
           }

           .template-mail .section-body .count-box{
             margin-top: 0%;
             margin-bottom: 0%;
           }
           
           .template-mail .section-body .change-bold{
             font-weight: bold;
           }

           .mt-0{
             margin-top: 0%;
           }

           .mb-0{
             margin-bottom: 0%;
           }

           .template-mail .section-body .box-text-flex .title-complaint{
             text-decoration: underline;
           }

           .template-mail .section-body .description-text{
             text-align: justify;
             text-justify: inter-word;
           }

           .template-mail .section-body .color-gray{
             color: rgb(102, 102, 102);
           }

           .template-mail .section-body .box-text-flex{
             display: flex;
             flex-direction: row;
           }

           .complaint-title-size{
             font-size: 1.8vh;
           }

           .ml-set{
             margin-left: 1%;
           }

           .blue-color{
             color: #15c;
           }

           .mt-n{
             margin-top: 1%;

           }

           .to-uppercase{
             text-transform: uppercase;
           }

           .to-italic{
             font-style: italic;
           }

       </style>
   </head>

   <body>
       <div class="template-mail">

           <!--section-body-->
           <div class="section-header">


           </div>
           <!--end section-body-->

           <!--section-body-->
           <div class="section-body">

             <p class="count-box color-gray to-italic">Respuesta Nº <b>${id}</b> formulario de denuncia </p>
             <p class="count-box color-gray"><b>Dirección de Diversidad Sexual</b></p>
             <p class="count-box color-gray"><b>App En Bogotá Se Puede Ser</b></p>

             <div class="box-text-flex mt-n">
                 <h1 class="mb-0 complaint-title-size">DENUNCIA DE:</h1> 
                 <h1 class="title-complaint mb-0 complaint-title-size ml-set to-uppercase"> ${data.first_name} ${data.last_name}</h1>
             </div>
             
             <p class="mt-0 color-gray">Fecha de envío: ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate() }
             
             </p>

             <p class="mb-0"><b>Nombres y apellidos:</b> ${data.first_name} ${data.last_name}</p>
             <p class="mb-0 mt-0"><b>Tipo de documento de identidad:</b> ${data.document_type}</p>
             <p class="mb-0 mt-0"><b>Número de documento:</b> ${data.document_number}</p>
             <div class="box-text-flex">
                 <p class="mb-0 mt-0"><b>Correo electrónico:</b> </p>
                 <p class="mb-0 mt-0 title-complaint blue-color ml-set"> <b> ${data.email}</b></p>
             </div>
             <p class="mb-0 mt-0"><b>Teléfono fijo o celular:</b> ${data.phone}</p>
             <p class="mb-0 mt-0"><b>Fecha del suceso:</b> ${data.event_day}</p>
             <p class="mb-0 mt-0"><b>Lugar del suceso:</b> ${data.event_place}</p>
             <p class="mb-0"><b>Descripción de la situación: </b> </p>
             <p class="mt-0 description-text"> ${data.description}</p>

           </div>
           <!--end section-body-->

           <!--section-footer-->
           <div class="section-footer">

           </div>
           <!--end section-footer-->

           <a href="www.sdp.gov.co"> <img src="cid:unique@kreata.ee" /> </a>
           

       </div>
   </body>

   </html>`;

 return output;
}


module.exports = {
  getHtmlDesign
}