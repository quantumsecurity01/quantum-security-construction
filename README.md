![don Pablo](https://xn--dn-8bb.com/assets/img/signature.png)

# Quantum Security

Website Development Project for Quantum Security

# Installation

After downloading the file from Themeforest, You will find Deadline.zip file. Then unzip the Deadline.zip and run the following commands on Deadline folder to get started with the project.

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```

GatsbyJs server will start in `localhost:8000`

```
// For starting NextJs Server run
yarn nextjs-dev
```

NextJs Server will start in `localhost:3000`

Available routes are below

```
/one
/two
/three
/four
/five
/six
/seven
/eight
/nine
/ten
/elevel
/twelve
/thirteen
/fourteen
/fifteen
/sixteen
/seventeen
/eighteen
/nineteen
/twenty
/twenty-one
/twenty-two
```

<br/><br/><br/><br/><br/><br/>

# Folder Structure

```
/common [All the common resource throughout the project]
	/data
		/social-share
		/translation
	/demoSwitcher
	/hooks
	/LanguageSwitcher
	/static
	/theme
	/ui
/components [Components throughout the project ]
/gatsbyjs [Gatsby dependend components and containers]
/nextjs [NextJs dependend component, pages and containers]
```

# Development

Follow the below procedure to go with the development process.

## GatsbyJs

If you want to develop only for gatsbyjs then then you don't need the `/nextjs` folder. You can delete the folder.

For any specific template like the template under `/one` route. If you want to use this template only then you have to follow below procedure.

1. Go to `/gatsbyjs/src/pages/`
2. now copy all the content from `one.js`
3. Paste all the content in `/gatsbyjs/src/pages/index.js`
4. Now you have to edit some code check below

```
// use
import { Container, SocialShare, SEO } from '../components';
// instead of
import { Container, SocialShare, SEO } from '../../components';
```

Now if you start your gatsbyjs server with `yarn gatsby-dev` then you will get your server running on `localhost:8000`

> You could/should delete all others files and folder which is not used in your `/gatsbyjs/src/pages/index.js` file.
> <br/><br/>

## NextJs

If you want to develop only for gatsbyjs then then you don't need the `/gatsbyjs` folder. You can delete the folder.

Follow the same steps for nextjs on `/nextjs` folder. Except starting the server for nextjs you have to run `yarn nextjs-dev` and the server will start on `locahost:3000`.

# Data

Theres two folders in `/commod/data` folder

### /social-share

`/social-share` folder contains template specific social share data like `/social-share/one.js` contains data for `/pages/one.js` template

### /translation

In this folder, you will find all the translations that we have used in our template . We have used `react-intl` (https://github.com/formatjs/react-intl) to Internationalise our template . You can translate the template into any language you want. We have already given support for 6 languages. They are English(en), Arabic(ar), German(de), Spanish(es), Chinese(zh) and Hebrew(he).

We have also provided Right to Left(RTL) alignment supports.

# SendGrid Integration

We have provided support for SendGrid (https://sendgrid.com/) integration for email delivery/ Newsletter/ Contact form.

## GatsbyJs

SendGrid Integration for Gatsby JS Server For local development follow below procedure.

1.  For development Go to `/gatsbyjs/` and rename `.env.development.example` to `.env.development`
2.  For production, go to , `/gatsbyjs/` rename `.env.production.example` to `.env.production`
3.  Open the file and put your SendGrid Api Key there .(SENDGRID_API_KEY=your api key without any quotation)

<br/><br/><br/><br/><br/><br/>

## NextJs

1. Go to , `/nextjs/next.config.js` find the code section and put your SendGrid Api Key there.

```
const nextConfig = {
	env: { SENDGRID_API_KEY: 'Put your SendGrid Api Key here' }
}
```

NOTE: We have commented out the sendgrid implementation, you will able to use that code that way or you can run separate node js server to send it to your sendgrid. it's upto you.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build
// To check the build version locally run below command
// Not necessary if you don't want to check on your local.
yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

### NextJs

To build the nextjs version run below commands.

```
yarn nextjs-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.
yarn nextjs-serve
```

<br/><br/><br/><br/><br/><br/><br/><br/>

## Deployment Support

### Gatsby on now.sh

We have given now.sh deployment by default. For hosting the project in now.sh you have to run below command after building the project.

```
now
```

### NextJs on now.sh

For deploying nextjs on now.sh you have rename `next.now.json` to `now.json`. Now run below command after building the project.

```
now
```

> **Make sure you have `now-cli` installed in your system.**
