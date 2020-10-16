
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
  - [Licenses](#Licenses)
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

## Licenses
  ${data.licenses}

<br>

## Contributors
  ${data.contributors}

<br>

## Tests
  ${data.test}

<br>

## GitHub
  GitHub Profile: ${data.profile}
  <br>
  GitHub Repository: ${data.repo}
`;
}

module.exports = generateMarkdown;
