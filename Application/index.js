const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, third-party assets and followed tutorials, if any, with links.',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What license does your project have?',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT license',
            'BSD 2=Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        message: 'Paste your badges here.',
        name: 'badges'
    },
    {
        type: 'input',
        message: 'List features here.',
        name: 'features'
    },
    {
        type: 'input',
        message: 'Include guidelines for how to contribute.',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Include instructions on how to run a test.',
        name: 'test'

    },
    {
        type: 'input',
        message: 'What is your GitHub profile?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }

])
.then ((response) => {
    console.log(response);


    const readmeGenerator =
    
    `# ${response.title}

## Description <a name="description"></a>

${response.description}
    
## Table of Contents <a name="contents"></a>

[description](#description)
[contents](#contents)
[installation](#installation)
[usage](#usage)
[credits](#credits)
[license](#license)
[badges](#badges)
[features](#features)
[contribute](#contribute)
[test](#test)
[question](#question)
    
## Installation <a name="installation"></a>

${response.installation}
    
## Usage <a name="usage"></a>

${response.usage}
    
## Credits <a name="credits"></a>

${response.credits}
    
## License <a name="license"></a>

${response.license}
    
## Badges (<a name="badges"></a>)
    
${response.badges}

## Features <a name="features"></a>

${response.features}
    
## How to Contribute <a name="contribute"></a>
    
${response.contribute}

## Tests <a name="test"></a>

${response.test}
    
## Questions

If you have any additional questions, you can contact me directly at ${response.email} or ${response.github}.`


fs.writeFile("README.md", readmeGenerator,
(err) => {
    err ? console.error(err) : console.log('success');
})
});