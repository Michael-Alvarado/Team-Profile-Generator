function generateHTML(cards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="../src/style.css" />
      <title>My Team</title>
    </head>
      
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      
      <main class="container">
        ${cards}
      </main>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    </body>
  </html>
  `;
}


module.exports = generateHTML;