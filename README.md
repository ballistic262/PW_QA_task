# PW_QA_task

This repository is a recruiting task for QA Engineer. It uses the Playwright framework to automate a set of test cases at [saucedemo.com](https://www.saucedemo.com/).

## 🛠️ Setup

### 📋 Requirements

To set up the development environment directly on your host computer:

1.  You'll need to have [Node.js](http://nodejs.org) installed (this must be NodeJS 18, not lower).
1.  Install [Google Chrome](https://www.google.com/chrome/) for running the end-to-end tests.
1.  [Fork repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
1.  [Clone the project on your computer.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
1.  Install all the dependencies by running this command from the **root of the project**.

        npm install

1.  Add the `.env' file with the `BASE_URL' parameter set to https://www.saucedemo.com/.

    ```
    BASE_URL="https://www.saucedemo.com/"
    ```

### 📋 Running tests

- To run tests, use `npm run test` command.
- To use debug mode, use `npm run debug` command.

## 🏋️ Task

The `test-case` folder contains the `e2e.md` file with 2 test cases. Create an automated scripts to cover all the steps mentioned in the file.
