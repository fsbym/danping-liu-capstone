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
dfx deploy --argument='("mantou #123", principal "g5ol2-szlgi-lr4pf-4zo46-tugsr-5tmot-enkpt-4b5wt-kelgw-ijpyi-nae", (vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}))' nft
```
