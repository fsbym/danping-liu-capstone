# danping-liu-NFTMarketplace

## Overview

I want to creating a website for NFT exchange involves building a platform where users can buy, sell, or trade Non-Fungible Tokens (NFTs), which are digital assets verified using blockchain technology to certify ownership and authenticity. This platform would need to integrate with various blockchain networks where NFTs are hosted (such as Ethereum, Polygon, etc.), provide secure wallet connections for users to manage their assets, and offer a user-friendly interface for browsing, listing, and transacting NFTs. Additionally, it should include features for price setting, auctions, and possibly community engagement tools to foster a vibrant marketplace.

### Problem

Beside Javascript, react, node, and express, I need to use Motoko as a specific programming language to help deal with thing realted to NFT.

### User Profile

Building a website akin to OpenSea necessitates a deep understanding of the diverse ecosystem of users and technological intricacies involved. my platform will cater to a wide array of users including collectors, artists, gamers, developers, and traders, each engaging in activities like browsing, buying, selling, minting, and community participation. Key considerations for success include ensuring robust security and trust, providing an exceptional user experience, integrating with the right blockchains, adhering to legal and regulatory requirements, fostering a strong community, and prioritizing sustainability. Addressing these considerations with strategic planning and thoughtful design is essential for creating a platform that stands out in the dynamic and competitive NFT marketplace landscape.

### Features

My platform will include and not limited to foolowing fuctionality:
1.NFT Minting: Artists and creators can mint new NFTs, specifying details like title, description, and royalty percentages.
2.NFT Browsing and Discovery: A feature-rich browsing experience that allows users to discover NFTs by categories, collections, or artists, including search and filter options.
3.Buying NFTs: Secure transaction processes for users to buy NFTs, either through bidding in auctions or purchasing at fixed prices.
4.Selling and Trading NFTs: Enable users to list their NFTs for sale or trade, including the ability to accept offers from potential buyers.
5.User Dashboards: Personalized dashboards for users to track their activity, manage their collections, and view transaction history.

## Implementation

### Tech Stack

Frontend:Javascript, React, CSS
Backend: Node, Express, Motoko

### APIs

To develop a comprehensive NFT marketplace,there are two primary components: the NFT products themselves and a digital currency (token) that can be used within the platform for transactions.

### Sitemap

For a comprehensive NFT marketplace, having distinct pages dedicated to discovery, minting, and user-owned NFTs (MyNFTs) is essential for a seamless user experience. Below is an overview of the purpose and key features for each of these pages: 1. Discover Page: To allow users to explore and discover NFTs available for purchase or auction on the platform. 2. Minting Page: To provide creators and artists with a simple and intuitive interface for creating (minting) new NFTs. 3. MyNFTs Page: To enable users to view and manage their own NFT collection, including items they've created, bought, or are currently selling.

### Mockups

TBD

### Data

TBD

### Endpoints

TBD

### Auth

TBD

## Roadmap

Sprint One: Setting up frontend website by EOD of Feb 18th.
Sprint Two: Migrating token and NFT and setting up backend server by EOD od Feb 22th.
Sprint Three: Testing and Debugging by EOD of Feb 25.

## Nice-to-haves

I am going to design my own Crypto Token for trading NFT.

1. start local dfx

```
dfx start --background
```

2. Run NPM server

```
npm run dev

```

3. Deploy canisters

```
https://4rylk-6yaaa-aaaao-a3ibq-cai.icp0.io/



```

# Dkeeper

Welcome to your new Dkeeper project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with Dkeeper, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd Dkeeper/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
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

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
