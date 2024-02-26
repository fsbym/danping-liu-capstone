# Dkeeper

[Dkeeper](https://4rylk-6yaaa-aaaao-a3ibq-cai.icp0.io/)

## Overview

Welcome to Dkeeper, your innovative venture into blockchain technology and the Internet Computer platform. This project marks the beginning of an exciting journey, and we're delighted to have you onboard. As part of the Dkeeper community, you're now among pioneers exploring the forefront of decentralized applications. Our documentation will guide you through setting up, developing, and deploying your projects, ensuring a smooth and enriching experience. Let's embark on this transformative journey together, shaping the future of the digital world.

### Features

- **CRUD Functionality:** Full suite of CRUD capabilities for managing data and content easily and efficiently within the platform.
- **Decentralized Identity & Authentication:** Secure, privacy-focused user authentication.
- **Smart Contract Management:** Tools for easy deployment and management of smart contracts.
- **Real-time Data Synchronization:** Ensures up-to-date and consistent data across the network.
- **Token & Wallet Integration:** Seamless transaction and token management capabilities.
- **Decentralized Storage:** High-security, accessible, and redundant storage solutions.
- **User-Friendly Interface:** Accessible design for users of all experience levels.
- **Cross-platform Compatibility:** Consistent user experience across web and mobile.
- **Community Governance:** User participation in platform decisions and developments.
- **Developer Tools:** Comprehensive resources including SDKs, APIs, and documentation.
- **Scalability & Cost-Efficiency:** Leveraging Internet Computer technology for efficient scaling.

## Implementation

### Tech Stack

**Frontend:** Javascript, React, CSS

**Backend:** Node.js, Motoko, blockchain

**Tool:** ICSDK

### Before start

Before you begin developing with Dkeeper, ensuring your development environment is correctly set up is crucial. Here's how to install the necessary SDK tools across different operating systems:

#### For macOS and Linux Users:

To install the DFINITY SDK, execute the following command in your terminal:

```
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

This command fetches and runs the install script directly from the DFINITY website, setting up the SDK on your system.

#### For Windows Users:

Currently, there is no native support for the DFINITY SDK (`dfx`) on Windows. However, Windows users can still develop for the Internet Computer by installing the Windows Subsystem for Linux (WSL). Through WSL, you can run `dfx` and other Linux applications on your Windows system. For detailed instructions on setting up WSL and `dfx` on Windows, please visit:

[Installing DFINITY SDK on Windows](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/)

#### Additional Resources:

Once you have the SDK installed, familiarize yourself with the following documentation to effectively utilize the Dkeeper and Internet Computer platform:

- [Quick Start Guide](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally): Get your local development environment ready.
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install): Explore the functionalities of the DFINITY SDK.
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko): Dive into Motoko for smart contract development.
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual): A quick guide to Motoko syntax and features.

Ensuring your environment is set up correctly from the beginning will streamline your development process, allowing you to focus on building innovative solutions on the Dkeeper platform. We're excited to see what you will create!
If you want to start working on your project right away, you might want to try the following commands:

```bash
cd Dkeeper/
dfx help
dfx canister --help
```

### Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Install the necessary packages
npm install

# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Running the project on Internet

To experience Dkeeper live in action, visit our deployed application on the Internet Computer platform:

- [Dkeeper](https://4rylk-6yaaa-aaaao-a3ibq-cai.icp0.io/)

This live version provides you with hands-on interaction with Dkeeper's full suite of features without the need for local setup.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
