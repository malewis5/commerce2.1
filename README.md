<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
      <img src="https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="128">
    </picture>
    <h1 align="center">MatTech Commerce</h1>
</p>

## Getting Started

#### Step 1: Clone this repository

```
git clone https://github.com/malewis5/commerce2.1.git
```

#### Step 2: Install dependencies

```
npm install
```

#### Step 3: Install [Vercel CLI](https://vercel.com/docs/cli#)

```
npm i -g vercel
```

#### Step 4: Link Vercel Project

1. Configure the Vercel CLI

```
vercel login
```

2. Follow the prompts to login with your credentials
3. This command links your project with the remote Vercel project

```
vercel link
```

#### Step 5: Pull Environment Variables from Vercel

1. This command pulls env variables from the project you linked. You can view them in the `.env` file created

```
vercel env pull
```

#### Step 6: Run local development server

```
npm run dev
```

## Contributing

This project follows a CI/CD strategy that is outlined below. Please follow this strategy as it will be enforced. We enforce [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) and use [release-please](https://www.npmjs.com/package/release-please) to generate release notes and changelog.

1.  Create your feature branch from main `git checkout -b <ticket-number>-<description (optional)>`.
2.  Write and test your code.
3.  When you're ready to commit, use the following convention for your commit message: `<type>[optional scope]: <description> [optional body] [optional footer]`

| Type             | Use Case                                                                                                                                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fix              | patches a bug in your codebase and correlates with the patch version in semantic versioning                                                                                                                                                                    |
| feat             | introduces a new feature to the codebase and correlates with a minor version in semantic versioning                                                                                                                                                            |
| BREAKING CHANGE! | introduces a breaking API change and correlates with a major version in semantic versioning. A breaking change can be part of commits of any type indicated by a exclamation (!) e.g., a fix!: and feat!: types would be valid, in addition to any other type. |
| build            | Changes that affect the build system or external dependencies (example scopes: npm packages)                                                                                                                                                                   |
| ci               | Changes to our CI configuration files and scripts                                                                                                                                                                                                              |
| docs             | Documentation only changes                                                                                                                                                                                                                                     |
| perf             | A code change that improves performance                                                                                                                                                                                                                        |
| refactor         | A code change that neither fixes a bug nor adds a feature                                                                                                                                                                                                      |
| style            | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)                                                                                                                                                         |
| test             | Adding missing tests or correcting existing tests                                                                                                                                                                                                              |

> This table is also available in the commit-template.md file

<p align="center"> <b> FOLLOWING THIS FORMAT IS CRITICAL FOR OUR RELEASE NOTES AND CHANGELOG </b> </p>

5.  This will create a preview deployment in Vercel where QA and UAT tasks will be completed. When the deployment is successful, the URL will be automatically added to the JIRA deployment on the ticket.
