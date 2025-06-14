# Token Autocomplete Monorepo

Welcome to the **Token Autocomplete** monorepo! This open source project provides a modern, full-stack solution for token search and autocomplete, built with React, Node.js, and Turborepo.

## Project Structure

```
.
├── apps/
│   └── web/            # React frontend app
├── packages/
│   └── token-fetch/    # Node.js package for fetching token data
├── data/               # Shared data (e.g., tokens.json)
├── turbo.json          # Turborepo pipeline config
├── package.json        # Monorepo root config
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Install dependencies
```bash
npm install
```

### Development
To start the frontend React app:
```bash
npm run dev:web
```

To run the token-fetch package (Node.js):
```bash
cd packages/token-fetch
npm run dev
```

## Contributing
We welcome contributions! Please open issues or pull requests for features, bug fixes, or improvements.

## License
[MIT](LICENSE)

## Acknowledgements
- [Turborepo](https://turbo.build/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) 