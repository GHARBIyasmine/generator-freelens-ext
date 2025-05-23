import { validateExtensionName, validatePublisher } from './validator.js';

export const askForExtensionName = async (generator, extensionConfig) => {
  const extensionName = generator.options["extensionName"];
  if (extensionName) {
    extensionConfig.name = extensionName;
  }
  const { name } = await generator.prompt({
    type: "input",
    name: "name",
    message: "What's the name of your extension?",
    default: "my-first-lens-ext",
    validate: validateExtensionName
  });
  extensionConfig.name = name;
};

export const askForExtensionDescription = async (generator, extensionConfig) => {
  const extensionDescription = generator.options["extensionDescription"];
  if (extensionDescription) {
    extensionConfig.description = extensionDescription;
  }
  const { description } = await generator.prompt({
    type: "input",
    name: "description",
    message: "What's the description of your extension?"
  });
  extensionConfig.description = description;
};

export const askForExtensionPublisher = async (generator, extensionConfig) => {
  const extensionPublisher = generator.options["extensionPublisher"];
  if (extensionPublisher) {
    extensionConfig.extensionPublisher = extensionPublisher;
  }
  const { publisher } = await generator.prompt({
    type: "input",
    name: "publisher",
    message: "What's your extension's publisher name?",
    default: `@${extensionConfig.name}/${extensionConfig.name}`,
    validate: validatePublisher
  });
  extensionConfig.publisher = publisher;
};

export const askForGit = (generator, extensionConfig) => generator.prompt({
  type: "confirm",
  name: "gitInit",
  message: "Initialize a git repository?",
  default: true
}).then(gitAnswer => {
  extensionConfig.gitInit = gitAnswer.gitInit;
});

export const askForInstallDependencies = (generator, extensionConfig) => generator.prompt({
  type: "confirm",
  name: "installDependencies",
  message: "Install dependencies after initialization?",
  default: true
}).then(({ installDependencies }) => {
  extensionConfig.installDependencies = installDependencies;
});

export const askForPackageManager = async (generator, extensionConfig) => {
  const { pkgManager } = await generator.prompt({
    type: "list",
    name: "pkgManager",
    message: "Which package manager to use?",
    choices: [
      {
        name: "npm",
        value: "npm"
      },
      {
        name: "yarn",
        value: "yarn"
      },
      {
        name: "pnpm",
        value: "pnpm"
      }
    ],
    default: "pnpm"
  });
  extensionConfig.pkgManager = pkgManager;
};
