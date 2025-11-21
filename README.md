# GameFord License Check - NPM Package

![Node.js](https://img.shields.io/badge/Node.js-18-green?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)
![NPM](https://img.shields.io/badge/NPM-Package-blue?style=flat-square)

**gameford-license-check** is a secure NPM package to validate licenses for GameFord projects. It ensures that only users with a valid license key can run the main application.

---

## Features

* Validate `LICENSE_KEY` securely
* Works with `.env` configuration
* Obfuscated internal logic
* Lightweight and easy to integrate

---

## Installation

```bash
pnpm add gameford-license-check
# or
npm install gameford-license-check
```

---

## Usage

```ts
import checkLicense from "gameford-license-check";

const result = checkLicense();
if (!result.valid) {
  console.log(result.message);
  // Handle unauthorized access
} else {
  console.log(result.message); // Welcome!
}
```

You can also pass the key explicitly:

```ts
const result = checkLicense(process.env.LICENSE_KEY);
```

---

## Environment Variable

Create a `.env` file in your project root:

```
LICENSE_KEY=your-secret-license
```

The package will read the key automatically if not provided.

---

## Security Notes

* The license length check is hidden inside the package and obfuscated.
* Users cannot read the validation logic from `index.js` after publishing.

---

## License

This package is for internal use with GameFord projects only.
