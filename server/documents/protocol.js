const pdfTemplate = ({
  name,
  carName,
  email,
  dateFrom,
  dateTo,
  address,
  fuel,
  mileage,
  annotation,
}) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mietvertrag</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
        
          body {
            color: #111516;
            font-family: "Poppins", sans-serif;
            font-size: 10px;
            font-style: normal !important;
          }
    
          .contract {
            max-width: 800px;
            margin: 0 auto;
            padding: 15px 25px;
            background-color: #fff;
          }
    
          .contract__header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
    
          .contract__logo {
            font-size: 18px;
            font-weight: bold;
          }
    
          .contract__logo span {
            color: #3067da;
          }
    
          .contract__body {
            margin: 40px 0;
          }
    
          .information {
            margin-bottom: 40px;
          }
    
          .information:last-child {
            margin-bottom: 0;
          }
    
          .information__title,
          .invoice__title {
            margin-bottom: 20px;
            font-size: 12px;
          }
    
          .information__row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 270px;
            margin-bottom: 15px;
          }
  
          .information__item {
            max-width: 0px;
          }
    
          .item__title {
            margin-bottom: 4px;
            font-weight: normal;
            white-space: nowrap;
          }
    
          .item__content {
            color: #7b7c7d;
            white-space: nowrap;
          }
  
          .contract__footer {
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="contract">
          <header class="contract__header">
            <div class="contract__logo">auto<span>vermietung.</span></div>
            <div>Datum: ${new Date().toLocaleDateString("de-DE")}</div>
          </header>
          <main class="contract__body">
            <div class="information">
              <h3 class="information__title">Rücknahmeprotokoll an</h3>
              <div class="information__content">
                <div class="information__row">
                  <div class="information__item">
                    <h4 class="item__title">Name</h4>
                    <div class="item__content">${name}</div>
                  </div>
                  <div class="information__item">
                    <h4 class="item__title">Reservierung von</h4>
                    <div class="item__content">${
                      dateFrom.split("T")[0] + " " + dateFrom.split("T")[1]
                    }</div>
                  </div>
                </div>
                <div class="information__row">
                  <div class="information__item">
                    <h4 class="item__title">E-Mail-Adresse</h4>
                    <div class="item__content">${email}</div>
                  </div>
                  <div class="information__item">
                    <h4 class="item__title">Reservierung bis</h4>
                    <div class="item__content">${
                      dateTo.split("T")[0] + " " + dateTo.split("T")[1]
                    }</div>
                  </div>
                </div>
                <div class="information__row">
                  <div class="information__item">
                    <h4 class="item__title">Mietstation</h4>
                    <div class="item__content">${address}</div>
                  </div>
                  <div class="information__item">
                    <h4 class="item__title">Mietwagen</h4>
                    <div class="item__content">${carName}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="information">
              <h3 class="information__title">Reservierungsdetails</h3>
              <div class="information__content">
                <div class="information__row">
                  <div class="information__item">
                    <h4 class="item__title">Füllstand</h4>
                    <div class="item__content">${fuel} Liter</div>
                  </div>
                  <div class="information__item">
                    <h4 class="item__title">Gefahrene Kilometer</h4>
                    <div class="item__content">${mileage} km</div>
                  </div>
                </div>
                <div class="information__row">
                  <div class="information__item">
                    <h4 class="item__title">Anmerkungen</h4>
                    <div class="item__content">${
                      annotation.trim() === "" ? "k.A." : annotation
                    }</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer class="contract__footer">
            Wir bedanken uns, dass Sie unsereren Service in Anspruch genommen haben 
            und freuen uns auf die nächste Fahrt!
          </footer>
        </div>
      </body>
    </html>  
    `;
};

module.exports = pdfTemplate;
