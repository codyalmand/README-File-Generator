
function generateMarkdown(data) {
  return `
  
# ${data.title}

<br>

## Description 
  ${data.description}

<br>

## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

## Installation
  ${data.installation}

<br>

## Usage
  ${data.usage}

<br>

## License
  ${data.license}

<br>

## Contributors
  ${data.contributing}

<br>

## Tests
  ${data.test}

<br>

## GitHub Repository
  
  ${data.repo}
`;
}

module.exports = generateMarkdown;
