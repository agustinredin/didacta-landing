# Didacta — Landing (Next.js)

Static marketing site built with Next.js. Optimized for fast loads, clean markup, and easy deploys.

---

## Access

Access to debugging this project's files and environment is restricted due to restricted access to the project's environment variables. Once provided with credentials, do as specified below.

- 1: Configure AWS CLI with (1) Access Key ID and (2) Secret Access Key

```bash
AWS Access Key ID [****************XXXX]: *(1)*
AWS Secret Access Key [****************XXXX]: *(2)*
Default region name [us-east-2]: [Enter]
Default output format [None]: [Enter]

```

---

## Tech Stack

- Next.js (App Router)
- React 18
- TypeScript (optional)
- Tailwind CSS
- ESLint

---

## Scripts

Use exactly as defined in `package.json`.

```json
  "scripts": {
    "build": "DIDACTA_ENV=production node sync-env.js && next build",
    "dev": "npm run clean-cache && node sync-env.js && next dev",
    "lint": "next lint",
    "start": "node sync-env.js && next start",
    "clean-cache": "rm -rf .next",
    "clear-cache": "rm -rf .next"
  },
```
