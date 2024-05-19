# Broge Community Website

This is the repository for the Broge Community Website
<a href="https://broge.meme" target="_blank">https://broge.meme</a>

## Open Source Commitment

As we have promised to our community and as stated in our whitepaper, everything the Broge Community develops is and will be open source.

To show that our commitment to open source is so strong we are releasing our website source code under the most permissive license we know of, the MIT License.

## Technologies Used

Credit to the authors and contributors of the following packages and all those packages associated with them as well.

- NodeJS
  - 20.13.1
  - <a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a>
- TypeScript
  - 5.4.0
  - <a href="https://www.typescriptlang.org/" target="_blank">https://www.typescriptlang.org</a>
- VueJS
  - 3.4.21
  - <a href="https://vuejs.org/" target="_blank">https://vuejs.org</a>
- Bulma
  - 1.0.0
  - <a href="https://bulma.io/" target="_blank">https://bulma.io</a>
- Buefy
  - 0.1.3
  - <a href="https://buefy.org/" target="_blank">https://buefy.org</a>

## How is it set up?

The Broge Community website is designed as a Single-Page-Application (SPA). The idea here is that the user only has to load once, and all interoperability of the Broge website itself just happens directly from the browser without having to reload pages from another server.

## Development

In order to develop this it is highly recommended to adhere to the following procedure.

### Installation requirements

- NodeJS 20.13.1
  Use whatever method you wish, I personally prefer node-version-manager (if on Windows this requires administrative access via a tarminal.)
- Latest edition of TypeScript
  `npm install -g typescript`

### Recommended IDE

- These are the same software with a mild difference.
  - Visual Studio Code
    - Has Telemetry but can turn it off
    - <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com</a>
  - VSCodium
    - Does not have telemetry
    - <a href="https://vscodium.com" target="_blank">https://vscodium.com</a>

### Recommended VSCod(e/ium) Extensions

- ESlint
  - <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank">https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint</a>
- Move TS - Move TypeScript files and update relative imports
  - <a href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons" target="_blank">https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons</a>
- Typescript Importer
  - <a href="https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter" target="_blank">https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter</a>
- Vue - Official
  - <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">https://marketplace.visualstudio.com/items?itemName=octref.vetur</a>
- Vue TypeScript Snippets
  - <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.vue-vscode-snippets" target="_blank">https://marketplace.visualstudio.com/items?itemName=dsznajder.vue-vscode-snippets</a>
- Vue 3 Snippets
  - <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.vue3-snippets" target="_blank">https://marketplace.visualstudio.com/items?itemName=dsznajder.vue3-snippets</a>
- Vue VSCode Snippets
  - <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode</a>

### Recommended Browser Extension(s)

- Vue DevTools
  - <a href="https://devtools.vuejs.org/guide/installation.html" target="_blank">https://devtools.vuejs.org/guide/installation.html</a>

### Getting the code

- Clone the repository
  - `git clone https://github.com/broge-community/broge-website.git`
- Install the dependencies
  - `cd broge-website`
  - `npm install`
- Run the formatter
  - `npm run format`
- Build the website
  - `npm run build`
- Run the development server
  - `npm run dev`

## Contributing

Obviously as we are sticking to open source and open communication for Broge this will, eventually be released as completely open source.
However, during the initial development of the new Broge community website we're keeping it private until launch.

### Workflow

1. Create a branch for each new feature or bug fix
2. Make changes on that new branch
3. Push the branch to the remote repository
4. Create a pull request to merge the changes into the main branch
5. Discuss, & review the changes w/ other members of the community.
6. Assuming approval, merge the changes into the main branch.

### Standardization of naming conventions

We are going to utilize semantic versioning, commits, and branch naming conventions.

#### Semantic Branch Naming

When creating a branch you should utilize the format
`<type>/#<issue-number>-<alias>`
If you do not have, or there is not an issue number, create an issue and assign it to yourself (assuming appropriate access.) This is the number you'll use in the branch name.

For branch types you have the following options.

- feat
  - New feature for the user
- fix
  - Bug fix
- docs
  - Documentation only changes
- chore
  - Miscellaneous changes
- style
  - Visual changes
- test
  - Tests
- refactor
  - Refactoring
  - This will include things like code-style cleanup, renaming, etc.
    Ref: <a href="https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082" target="_blank">https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082</a>

So, if you're making a new login feature your branch name might be
`feat/#328545-login`

#### Semantic commits

Much like semantic branch naming, semantic commits should follow a similar structure.

- feat
  - New feature for the user
- fix
  - Bug fix
- docs
  - Documentation only changes
- chore
  - Miscellaneous changes
- style
  - Visual changes
- test
  - Tests
- refactor
  - Refactoring
  - This will include things like code-style cleanup, renaming, etc.

Ref: <a href="https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716" target="_blank">https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716</a>

Yes these are pretty much the same and it seems tedious, but if we want our development to be clear for those who wish to review it, we must adhere to a standard.

#### Variable naming conventions

Ultimately, variable naming conventions became a thing in the past due to the nature of programming languages not always having explicit typings. As we are using TypeScript for this project, there is no purpose in enforcing a variable naming convention.

#### Unique modifications/revisions

There is a utility that adds to the functionality of Vue to enhance the use of Bulma called Buefy. There is a type-error with the version being used, as such there is a redefinition of those types within this project.
These are in `src/types/buefy.d.ts`

#### Other enforcements

We do have eslint, and prettier configured in `src/.eslintrc.js` and `src/.prettierrc.js`. Please do not change them.

#### Optional Vue DevTools

While the Vue DevTools extension(s) for the appropriate web browsers are super useful, there is a built in DevTool. It is considered beta at the moment, though.
If you wish to use it make sure you disable it before building for production.

Enable and disable this utility via the `vite.config.ts` file. You will see two successive commended lines towards the top. Uncomment those, and re-run your formats and builds.

Again, please make sure to comment these out again before building for production, we don't need to have the debugging overhead deployed for a production website.

#### Merge Requests
Upon the completion of your branch, you will want to push the branch to this repository.
You must then submit a merge request (do NOT just merge to the main branch!)
That merge request will then be reviewed by other members of the community and responded to for changes, or accepted and merged into the main branch.

#### Deployment
The web site will be automatically updated via a CI once the main branch gets its updated.

## License

MIT License

Copyright (c) 2024 Broge Community

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
