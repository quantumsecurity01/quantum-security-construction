![don Pablo](https://xn--dn-8bb.com/assets/img/signature.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2a817f8-4f51-4187-8af9-9d821f1c9368/deploy-status)](https://app.netlify.com/sites/keen-kepler-3908d0/deploys)

# Quantum Security

Website Development Project for Quantum Security

<img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/static/images/hugo-logo-wide.svg?sanitize=true" alt="Hugo" width="565">

A Fast and Flexible Static Site Generator built with love by [bep](https://github.com/bep), [spf13](http://spf13.com/) and [friends](https://github.com/gohugoio/hugo/graphs/contributors) in [Go][].

[Website](https://gohugo.io) |
[Forum](https://discourse.gohugo.io) |
[Documentation](https://gohugo.io/getting-started/) |
[Installation Guide](https://gohugo.io/getting-started/installing/) |
[Contribution Guide](CONTRIBUTING.md) |
[Twitter](https://twitter.com/gohugoio)

[![GoDoc](https://godoc.org/github.com/gohugoio/hugo?status.svg)](https://godoc.org/github.com/gohugoio/hugo)
[![Tests on Linux, MacOS and Windows](https://github.com/gohugoio/hugo/workflows/Test/badge.svg)](https://github.com/gohugoio/hugo/actions?query=workflow%3ATest)
[![Go Report Card](https://goreportcard.com/badge/github.com/gohugoio/hugo)](https://goreportcard.com/report/github.com/gohugoio/hugo)

## Overview

Hugo is a static HTML and CSS website generator written in [Go][].
It is optimized for speed, ease of use, and configurability.
Hugo takes a directory with content and templates and renders them into a full HTML website.

Hugo relies on Markdown files with front matter for metadata, and you can run Hugo from any directory.
This works well for shared hosts and other systems where you don’t have a privileged account.

Hugo renders a typical website of moderate size in a fraction of a second.
A good rule of thumb is that each piece of content renders in around 1 millisecond.

Hugo is designed to work well for any kind of website including blogs, tumbles, and docs.

#### Supported Architectures

Currently, we provide pre-built Hugo binaries for Windows, Linux, FreeBSD, NetBSD, DragonFly BSD, Open BSD, macOS (Darwin), and [Android](https://gist.github.com/bep/a0d8a26cf6b4f8bc992729b8e50b480b) for x64, i386 and ARM architectures.

Hugo may also be compiled from source wherever the Go compiler tool chain can run, e.g. for other operating systems including Plan 9 and Solaris.

**Complete documentation is available at [Hugo Documentation](https://gohugo.io/getting-started/).**

## Choose How to Install

If you want to use Hugo as your site generator, simply install the Hugo binaries.
The Hugo binaries have no external dependencies.

To contribute to the Hugo source code or documentation, you should [fork the Hugo GitHub project](https://github.com/gohugoio/hugo#fork-destination-box) and clone it to your local machine.

Finally, you can install the Hugo source code with `go`, build the binaries yourself, and run Hugo that way.
Building the binaries is an easy task for an experienced `go` getter.

### Install Hugo as Your Site Generator (Binary Install)

Use the [installation instructions in the Hugo documentation](https://gohugo.io/getting-started/installing/).

### Build and Install the Binaries from Source (Advanced Install)

#### Prerequisite Tools

* [Git](https://git-scm.com/)
* [Go (we test it with the last 2 major versions; but note that Hugo 0.81.0 only builds with >= Go 1.16.)](https://golang.org/dl/)

#### Fetch from GitHub

Since Hugo 0.48, Hugo uses the Go Modules support built into Go 1.11 to build. The easiest is to clone Hugo in a directory outside of `GOPATH`, as in the following example:

```bash
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install
```

**If you are a Windows user, substitute the `$HOME` environment variable above with `%USERPROFILE%`.**

If you want to compile with Sass/SCSS support use `--tags extended` and make sure `CGO_ENABLED=1` is set in your go environment. If you don't want to have CGO enabled, you may use the following command to temporarily enable CGO only for hugo compilation:

```bash
CGO_ENABLED=1 go install --tags extended
```

## The Hugo Documentation

The Hugo documentation now lives in its own repository, see https://github.com/gohugoio/hugoDocs. But we do keep a version of that documentation as a `git subtree` in this repository. To build the sub folder `/docs` as a Hugo site, you need to clone this repo:

```bash
git clone git@github.com:gohugoio/hugo.git
```
## Contributing to Hugo

For a complete guide to contributing to Hugo, see the [Contribution Guide](CONTRIBUTING.md).

We welcome contributions to Hugo of any kind including documentation, themes,
organization, tutorials, blog posts, bug reports, issues, feature requests,
feature implementations, pull requests, answering questions on the forum,
helping to manage issues, etc.

The Hugo community and maintainers are [very active](https://github.com/gohugoio/hugo/pulse/monthly) and helpful, and the project benefits greatly from this activity.

### Asking Support Questions

We have an active [discussion forum](https://discourse.gohugo.io) where users and developers can ask questions.
Please don't use the GitHub issue tracker to ask questions.

### Reporting Issues

If you believe you have found a defect in Hugo or its documentation, use
the GitHub issue tracker to report the problem to the Hugo maintainers.
If you're not sure if it's a bug or not, start by asking in the [discussion forum](https://discourse.gohugo.io).
When reporting the issue, please provide the version of Hugo in use (`hugo version`).

### Submitting Patches

The Hugo project welcomes all contributors and contributions regardless of skill or experience level.
If you are interested in helping with the project, we will help you with your contribution.
Hugo is a very active project with many contributions happening daily.

We want to create the best possible product for our users and the best contribution experience for our developers,
we have a set of guidelines which ensure that all contributions are acceptable.
The guidelines are not intended as a filter or barrier to participation.
If you are unfamiliar with the contribution process, the Hugo team will help you and teach you how to bring your contribution in accordance with the guidelines.

For a complete guide to contributing code to Hugo, see the [Contribution Guide](CONTRIBUTING.md).

[![Analytics](https://ga-beacon.appspot.com/UA-7131036-6/hugo/readme)](https://github.com/igrigorik/ga-beacon)

[Go]: https://golang.org/
[Hugo Documentation]: https://gohugo.io/overview/introduction/

## Dependencies

Hugo stands on the shoulder of many great open source libraries, in lexical order:

 | Dependency  | License |
 | :------------- | :------------- |
 | [github.com/alecthomas/chroma](https://github.com/alecthomas/chroma) | MIT License |
 | [github.com/armon/go-radix](https://github.com/armon/go-radix) | MIT License |
 | [github.com/aws/aws-sdk-go](https://github.com/aws/aws-sdk-go) | Apache License 2.0 |
 | [github.com/bep/debounce](https://github.com/bep/debounce) | MIT License |
 | [github.com/bep/gitmap](https://github.com/bep/gitmap) | MIT License |
 | [github.com/bep/golibsass](https://github.com/bep/golibsass) | MIT License |
 | [github.com/bep/tmc](https://github.com/bep/tmc) | MIT License |
 | [github.com/BurntSushi/locker](https://github.com/BurntSushi/locker) | The Unlicense |
 | [github.com/BurntSushi/toml](https://github.com/BurntSushi/toml) | MIT License |
 | [github.com/cpuguy83/go-md2man](https://github.com/cpuguy83/go-md2man) | MIT License |
 | [github.com/danwakefield/fnmatch](https://github.com/danwakefield/fnmatch) | BSD 2-Clause "Simplified" License |
 | [github.com/disintegration/gift](https://github.com/disintegration/gift) | MIT License |
 | [github.com/dustin/go-humanize](https://github.com/dustin/go-humanize) | MIT License |
 | [github.com/fsnotify/fsnotify](https://github.com/fsnotify/fsnotify) | BSD 3-Clause "New" or "Revised" License |
 | [github.com/gobwas/glob](https://github.com/gobwas/glob) | MIT License |
 | [github.com/gorilla/websocket](https://github.com/gorilla/websocket) | BSD 2-Clause "Simplified" License |
 | [github.com/hashicorp/golang-lru](https://github.com/hashicorp/golang-lru) | Mozilla Public License 2.0 |
 | [github.com/hashicorp/hcl](https://github.com/hashicorp/hcl) | Mozilla Public License 2.0 |
 | [github.com/jdkato/prose](https://github.com/jdkato/prose) | MIT License |
 | [github.com/kr/pretty](https://github.com/kr/pretty) | MIT License |
 | [github.com/kyokomi/emoji](https://github.com/kyokomi/emoji) | MIT License |
 | [github.com/magiconair/properties](https://github.com/magiconair/properties) | BSD 2-Clause "Simplified" License |
 | [github.com/markbates/inflect](https://github.com/markbates/inflect) | MIT License |
 | [github.com/mattn/go-isatty](https://github.com/mattn/go-isatty) | MIT License |
 | [github.com/mattn/go-runewidth](https://github.com/mattn/go-runewidth) | MIT License |
 | [github.com/miekg/mmark](https://github.com/miekg/mmark) | Simplified BSD License |
 | [github.com/mitchellh/hashstructure](https://github.com/mitchellh/hashstructure) | MIT License |
 | [github.com/mitchellh/mapstructure](https://github.com/mitchellh/mapstructure) | MIT License |
 | [github.com/muesli/smartcrop](https://github.com/muesli/smartcrop) | MIT License |
 | [github.com/nicksnyder/go-i18n](https://github.com/nicksnyder/go-i18n) | MIT License |
 | [github.com/niklasfasching/go-org](https://github.com/niklasfasching/go-org) | MIT License |
 | [github.com/olekukonko/tablewriter](https://github.com/olekukonko/tablewriter) | MIT License |
 | [github.com/pelletier/go-toml](https://github.com/pelletier/go-toml) | MIT License |
 | [github.com/pkg/errors](https://github.com/pkg/errors) | BSD 2-Clause "Simplified" License |
 | [github.com/PuerkitoBio/purell](https://github.com/PuerkitoBio/purell) | BSD 3-Clause "New" or "Revised" License |
 | [github.com/PuerkitoBio/urlesc](https://github.com/PuerkitoBio/urlesc) | BSD 3-Clause "New" or "Revised" License |
 | [github.com/rogpeppe/go-internal](https://github.com/rogpeppe/go-internal) | BSD 3-Clause "New" or "Revised" License |
 | [github.com/russross/blackfriday](https://github.com/russross/blackfriday)  | Simplified BSD License |
 | [github.com/rwcarlsen/goexif](https://github.com/rwcarlsen/goexif) | BSD 2-Clause "Simplified" License |
 | [github.com/spf13/afero](https://github.com/spf13/afero) | Apache License 2.0 |
 | [github.com/spf13/cast](https://github.com/spf13/cast) | MIT License |
 | [github.com/spf13/cobra](https://github.com/spf13/cobra) | Apache License 2.0 |
 | [github.com/spf13/fsync](https://github.com/spf13/fsync) | MIT License |
 | [github.com/spf13/jwalterweatherman](https://github.com/spf13/jwalterweatherman) | MIT License |
 | [github.com/spf13/pflag](https://github.com/spf13/pflag) | BSD 3-Clause "New" or "Revised" License |
 | [github.com/spf13/viper](https://github.com/spf13/viper) | MIT License |
 | [github.com/tdewolff/minify](https://github.com/tdewolff/minify) | MIT License |
 | [github.com/tdewolff/parse](https://github.com/tdewolff/parse) | MIT License |
 | [github.com/yuin/goldmark](https://github.com/yuin/goldmark) | MIT License |
 | [github.com/yuin/goldmark-highlighting](https://github.com/yuin/goldmark-highlighting) | MIT License |
 | [go.opencensus.io](https://go.opencensus.io) | Apache License 2.0 |
 | [go.uber.org/atomic](https://go.uber.org/atomic) | MIT License |
 | [gocloud.dev](https://gocloud.dev) | Apache License 2.0 |
 | [golang.org/x/image](https://golang.org/x/image) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/net](https://golang.org/x/net) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/oauth2](https://golang.org/x/oauth2) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/sync](https://golang.org/x/sync) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/sys](https://golang.org/x/sys) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/text](https://golang.org/x/text) | BSD 3-Clause "New" or "Revised" License |
 | [golang.org/x/xerrors](https://golang.org/x/xerrors) | BSD 3-Clause "New" or "Revised" License |
 | [google.golang.org/api](https://google.golang.org/api) | BSD 3-Clause "New" or "Revised" License |
 | [google.golang.org/genproto](https://google.golang.org/genproto) | Apache License 2.0 |
 | [gopkg.in/ini.v1](https://gopkg.in/ini.v1) | Apache License 2.0 |
 | [gopkg.in/yaml.v2](https://gopkg.in/yaml.v2) | Apache License 2.0 |
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
