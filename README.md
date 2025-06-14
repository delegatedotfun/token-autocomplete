# Token Autocomplete Monorepo

Welcome to the **Token Autocomplete** monorepo maintained by delegatedotfun.

![Demo](https://storage.googleapis.com/delegatedotfun-public/autocomplete.png)

## Project Structure

```
.
├── apps/
│   └── web/            # React frontend app
├── packages/
│   └── token-fetch/    # Node.js package for fetching token
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
Check out the demo by starting the React app as such:
```bash
npm run start:web
```

### Component
If you want to use the component in your projects, just copy-paste TokenAutocomplete.tsx and TokenAutocomplete.styles.ts (or use your own styling)


### Jupiter Verify token fetch
Running this script will automatically save the data fetched into a file (tokens.json) within the demo's public repo to make the data available to view in the demo.

<b>WARNING!!!</b> using the demo with the fetched data will result in heavy data consumption due to image links

In real-world apps, you probably want to cache the images

To run the token-fetch service (Node.js):
```bash
npm run start:token-fetch
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