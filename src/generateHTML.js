const generateHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>


        <body>
        <header class="jumbotron">
          <h1 class="title has-text-centered">My Team</h1>
        </header>
          <div class="tile is-parent is-justify-content-space-evenly  is-flex-wrap-wrap is-flex-direction-row">
            ${createTeam(data)}
          </div>
        <footer class="container has-text-centered py-3">
          <h3 class="text-dark">&copy;2021 by ${data[0].name}</h3>
        </footer>
      </body>
      </html>
    `;
};

const createInfo = (element) => {
  if (element.getRole() === 'Manager') {
      return `<p class="subtitle-5">Office No.:${(element.officeNumber)}</p>`;
  }

  if (element.getRole() === 'Engineer') {
      return `<a href="http://github.com/${(element.github)}" class="button is-normal">GitHub:${(element.github)}</a>`;
  }

  if (element.getRole() === 'Intern') {
      return `<p class="subtitle-5">School:${(element.school)}</p>`;
  }
}

const createIcon = (element) => {
  if (element.getRole() === 'Manager') { return `<span class="material-icons">meeting_room</span>`; }

  if (element.getRole() === 'Engineer') { return `<span class="material-icons">engineering</span>`; }

  if (element.getRole() === 'Intern') { return `<span class="material-icons">school</span>`; }
}

const createTeam = (data) => {
  let output ='';
  data.forEach(element => {
    output += `<div class="card is-child" id="card-size">
    <header class="card-header-tile title notification is-success">${(element.name)}
    <div class="subtitle">${createIcon(element)} ${(element.getRole())}</div></header>
      <div class="card-content">
        <p class="subtitle-3">Employee ID: ${(element.id)}</p>
        <a href="mailto:${(element.email)}" class="button is-normal">Email: ${(element.email)}</a> <br />
        ${createInfo(element)}
      </div>
    </div>
  `;
  })
  return output;
}

module.exports = generateHTML;