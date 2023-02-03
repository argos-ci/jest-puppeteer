# How to Contribute

jest-puppeteer is a small project, it is widely used but has not a lot of contributors. We're still working out the kinks to make contributing to this project as easy and transparent as possible, but we're not quite there yet. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

## [Code of Conduct](https://github.com/smooth-code/jest-puppeteer/blob/master/CODE_OF_CONDUCT.md)

We expect project participants to adhere to our Code of Conduct. Please read [the full text](https://github.com/smooth-code/jest-puppeteer/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Open Development

All work on jest-puppeteer happens directly on [GitHub](/). Both core team members and external contributors send pull requests which go through the same review process.

### Workflow and Pull Requests

_Before_ submitting a pull request, please make sure the following is done…

1.  Fork the repo and create your branch from `master`. A guide on how to fork a repository: https://help.github.com/articles/fork-a-repo/

    Open terminal (e.g. Terminal, iTerm, Git Bash or Git Shell) and type:

    ```sh-session
    $ git clone https://github.com/<your_username>/jest-puppeteer
    $ cd jest-puppeteer
    $ git checkout -b my_branch
    ```

    Note: Replace `<your_username>` with your GitHub username

2.  Run `npm install`.

3.  If you've changed APIs, update the documentation.

4.  Ensure the linting is good via `npm run lint`.

5.  Ensure the test suite passes via `npm run test`.

## Bugs

### Where to Find Known Issues

We will be using GitHub Issues for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new issue, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Please provide a public repository with a runnable example.

## Code Conventions

Please follow the `.prettierrc` in the project.

## License

By contributing to jest-puppeteer, you agree that your contributions will be licensed under its MIT license.
