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
        message: 'Add a Table of Contents if your README is long',
        name: 'contents'
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
        message: 'Insert badges here.',
        name: 'badges'
    },
    {
        type: 'input',
        message: 'List features here.',
        name: 'features'
    },
    {
        type: 'input',
        message: 'Include guidelines for how ',
        name: 'contribute'
    },
    {
        type: 'input',
        message: '',
        name: 'tests'
    },

])
.then ((response) => {
    console.log(response);


    const readmeGenerator =
    
    `# ${response.title}

    ## Description

    ${response.description}
    
    ## Table of Contents

    ${response.contents}
    
    ## Installation

    ${response.installation}
    
    ## Usage

    ${response.usage}
    
    ## Credits

    ${response.credits}
    
    ## License

    ${response.license}
    
    ## Badges
    
    ${response.badges}

    ## Features

    ${response.features}
    
    ## How to Contribute
    
    ${response.contribute}

    ## Tests

    ${response.test}`


fs.writeFile("README.md", readmeGenerator,
(err) => {
    err ? console.error(err) : console.log('success');
})
});