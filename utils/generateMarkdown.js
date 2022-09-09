

function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contributions](#Contribution)
  - [Installation] (#Installation)
  - [Questions] (#Questions)
  - [License] (#License)

  ## Description
  ${data.description}

  ## Usage 
  ${data.usage}

  ## Installation
  ${data.installation}
  ## Contributions 
  ${data.contributions}
  ## Questions
  ${data.github}
  ${data.email}
  `
}


module.exports = generateMarkdown;
