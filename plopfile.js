const requireField = fieldName => {
  return value => {
    if (String(value).length === 0 ) {
      return fieldName + ' is required'
    }
    return true
  }
}

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'list',
        name: 'typeOfComponent',
        message: 'What kind of component do you need?',
        choices:['Class', 'Functional'],
        validate: requireField('typeOfComponent')
      },
      {
        type: 'input',
        name: 'nameOfComponent',
        message: 'What is your component name?',
        validate: requireField('nameOfComponent')
      },
    ],
    actions: (data) => {
      const actions = [];

      if(data.typeOfComponent === 'Class'){
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase nameOfComponent}}/{{pascalCase nameOfComponent}}.js',
          templateFile:
            'plop-templates/Component/Component.js.hbs',
        })
      }else{
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase nameOfComponent}}/{{pascalCase nameOfComponent}}.js',
          templateFile:
            'plop-templates/Component/Component.functional.js.hbs',
        })
      }

      actions.push(
        {
          type: 'add',
          path: 'src/components/{{pascalCase nameOfComponent}}/{{pascalCase nameOfComponent}}.test.js',
          templateFile:
            'plop-templates/Component/Component.test.js.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase nameOfComponent}}/{{pascalCase nameOfComponent}}.module.css',
          templateFile:
            'plop-templates/Component/Component.module.css.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase nameOfComponent}}/index.js',
          templateFile: 'plop-templates/Component/index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/components/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase nameOfComponent}} from './{{pascalCase nameOfComponent}}';`,
        },
        {
          type: 'append',
          path: 'src/components/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase nameOfComponent}},`,
        },
      )

      return actions;
    }
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop-templates/Page/Page.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop-templates/Page/Page.test.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile:
          'plop-templates/Page/Page.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Page/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}.js',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      }
    ],
  })

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      }
    ],
  })
}
