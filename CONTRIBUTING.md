# Contributing to Project-CHHI

We're excited that you're interested in contributing to `Project-CHHI`! This project aims to be a comprehensive global hub for cybercrime and security resources, and your contributions are invaluable in making it truly international and up-to-date.

This document outlines the guidelines and processes for contributing to the project.

## How to Contribute

As `Project-CHHI` is primarily a curated list of resources, the main ways to contribute involve improving the data and the presentation:

1.  **Reporting Broken Links or Incorrect Information:** Help keep the portal accurate.
2.  **Suggesting Enhancements or New Features:** Share ideas to improve the portal's functionality or user experience.
3.  **Contributing New Countries, Portals, or Categories:** Add resources for countries not yet listed, or new relevant portals for existing countries/categories.
4.  **Contributing Code:** Help build out features mentioned in the roadmap (like the AI chatbot) or improve the website structure.
5.  **Improving Documentation:** Enhance the README or other project explanations.

We use GitHub Issues and Pull Requests to manage contributions.

### Reporting Broken Links or Incorrect Information

Found a link that doesn't work, information that's outdated, or a description that's inaccurate? Please open a new issue on the GitHub repository. To help us fix it quickly, please include:

* A clear and descriptive title (e.g., "Broken link for Germany - Cybercrime reporting").
* The specific country and category where the issue occurs.
* The link or piece of information that is incorrect.
* What the expected link/information should be (if you know it).

### Suggesting Enhancements or New Features

Have an idea to make `Project-CHHI` more user-friendly, add new functionality (like search or filters), or implement features from the roadmap (like the AI chatbot)? Please open a new issue on GitHub to propose it. When suggesting a feature, please describe:

* The proposed feature or enhancement.
* Why it would be useful for users.
* How it might work or look (if you have specific ideas).

### Contributing New Countries, Portals, or Updating Information

This is a key way to contribute! If you know of official government cybercrime, security, or related complaint portals for a country not yet listed, or know of additional relevant portals/categories for countries that are listed, please contribute them.

The best way to do this is via a Pull Request (PR):

1.  **Fork the Repository:** Click the "Fork" button on the top right of the `Project-CHHI` GitHub page.
2.  **Clone Your Fork:** Clone your forked repository to your local machine:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/project-chhi.git](https://github.com/YOUR_USERNAME/project-chhi.git)
    cd project-chhi
    ```
3.  **Set Up Upstream Remote:** Add the original repository as an "upstream" remote to sync with future changes:
    ```bash
    git remote add upstream [https://github.com/gigachad80/project-chhi.git](https://github.com/gigachad80/project-chhi.git)
    ```
4.  **Create a New Branch:** Create a branch for your contribution (e.g., `add/france-links`, `update/uk-police`).
    ```bash
    git checkout -b your-new-branch-name
    ```
5.  **Add/Update Data:** Locate where the country and portal data is stored within the project files (this might be in an HTML file, a data file like JSON, etc.). Add or update the information according to the existing format.
6.  **Commit Your Changes:** Commit your changes with a clear message (e.g., `feat: Add cybercrime links for France`, `fix: Update broken link for UK finance fraud`).
    ```bash
    git commit -m "feat: Add links for [Country]"
    ```
7.  **Push Your Changes:** Push your branch to your forked repository:
    ```bash
    git push origin your-new-branch-name
    ```
8.  **Create a Pull Request (PR):** Go to the original `Project-CHHI` repository on GitHub. Create a new pull request from your branch. Clearly describe the countries, portals, or updates you've added/changed.

Your PR will be reviewed, and we may ask for clarification or confirmation of the links/information.

### Contributing Code

While contributing data is the primary need, code contributions are also welcome! This includes:

* Implementing suggested features.
* Working on roadmap items like the AI chatbot.
* Improving the structure, styling, or underlying code of the portal website itself.

If you wish to contribute code, please follow the standard GitHub flow (Fork, Branch, Code, Commit, Push, PR) as outlined in the "Contributing New Countries..." section above. It's often a good idea to discuss larger code contributions by opening an issue first.

### Improving Documentation

Clear documentation helps users understand and use `Project-CHHI` effectively. If you find areas in the README or other project files that could be clearer, more detailed, or corrected for typos, please feel free to submit a Pull Request with your improvements.

## Development Setup

For contributing new countries, portals, or updates to the data, you likely don't need a complex development setup – just a text editor to modify the relevant data file(s).

If you plan to contribute code (e.g., for the AI chatbot or website structure), the required setup will depend on the technologies used for that specific part of the project. Check the project's main files or README for any development dependencies if you're looking to contribute code.

## Pull Request Guidelines

* Ensure new links are official government or reputable organization resources.
* Check that your additions/updates follow the existing data format.
* Write clear and concise commit messages.
* Link your PR to any related issues (e.g., if you're fixing a reported broken link).
* Be prepared to address feedback during the review process.

## Thank You!

Thank you for considering contributing to `Project-CHHI`. Your commitment to gathering and sharing these important resources helps people worldwide report cybercrimes and enhance their security!
