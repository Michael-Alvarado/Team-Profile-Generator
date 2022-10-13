function generateHTML(cards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
      
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      
      <main class="container">
        ${cards}
      </main>

    </body>
  </html>
  `;
}


module.exports = generateHTML;