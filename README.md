#Stormpath is Joining Okta
We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).


# Stormpath Ionic Pages
[![Build Status](https://travis-ci.org/stormpath/stormpath-sdk-angular-ionic.svg?branch=master)](https://travis-ci.org/stormpath/stormpath-sdk-angular-ionic)
[![npm version](https://badge.fury.io/js/angular-stormpath-ionic.svg)](http://badge.fury.io/js/angular-stormpath-ionic)
[![devDependency Status](https://david-dm.org/stormpath/stormpath-sdk-angular-ionic/dev-status.svg)](https://david-dm.org/stormpath/stormpath-sdk-angular-ionic?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/stormpath/stormpath-sdk-angular-ionic.svg)](https://github.com/stormpath/stormpath-sdk-angular-ionic/issues)
[![GitHub stars](https://img.shields.io/github/stars/stormpath/stormpath-sdk-angular-ionic.svg)](https://github.com/stormpath/stormpath-sdk-angular-ionic/stargazers)
[![GitHub license](https://img.shields.io/badge/license-APACHE-red.svg)](https://raw.githubusercontent.com/stormpath/stormpath-sdk-angular/master/LICENSE)

> Ionic pages for integrating with Stormpath's API

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Ionic pages (Login, Register, and Forgot Password) for integrating with Stormpath's API.

## Installation

Install through npm:
```
npm install --save angular-stormpath-ionic
```

Then include the module and pages in your Ionic app's `app.module.ts`:

```typescript
import { Component, NgModule } from '@angular/core';
import { StormpathIonicModule, LoginPage, ForgotPasswordPage, RegisterPage } from 'angular-stormpath-ionic';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot(MyApp),
    StormpathIonicModule
  ],
  entryComponents: [
    ...
    LoginPage,
    ForgotPasswordPage,
    RegisterPage
  ],
  ...
})
export class AppModule {}
```

<!--
You may also find it useful to view the [demo source](https://github.com/stormpath/stormpath-sdk-angular-ionic/blob/master/demo/demo.component.ts).
-->

### Usage without a module bundler
```
<script src="node_modules/dist/umd/angular-stormpath-ionic/angular-stormpath-ionic.js"></script>
<script>
    // everything is exported stormpathIonic namespace
</script>
```

<!--
## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://stormpath.github.io/stormpath-sdk-angular-ionic/docs/
-->

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

Apache-2.0 © [Stormpath](https://stormpath.com)
