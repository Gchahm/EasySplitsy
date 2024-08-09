module.exports = {
    description: 'this is a skeleton plopfile',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the component?',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return true;
                }
                return 'name is required';
            }
        },
        {
            type: 'list',
            name: 'dir',
            message: 'Where would you like to put this component?',
            choices: [
                {
                    name: 'components',
                    value: 'components'
                },
                {
                    name: 'containers',
                    value: 'containers'
                }
            ]
        },
    ], // array of inquirer prompts
    actions: (answers) => {
        const location = `${__dirname}/../../../bill-splitter/src/${answers.dir}/{{camelCase name}}`;

        return [
            {
                type: 'add',
                templateFile: 'component/index.hbs',
                path: `${location}/index.ts`,
            },
            {
                type: 'add',
                templateFile: 'component/module.hbs',
                path: `${location}/{{properCase name}}.tsx`,
            },
            {
                type: 'add',
                templateFile: 'component/propsInterface.hbs',
                path: `${location}/I{{properCase name}}Props.ts`
            },
            {
                type: 'add',
                templateFile: 'component/storybook.hbs',
                path: `${location}/{{properCase name}}.storybook.ts`
            },
        ];
    }  // array of actions
}