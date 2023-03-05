# Carbon-Project

Summary

We aim to create a Gender Equality(gequi) Credit Ecosystem on the Ethereum blockchain to bring more liquidity, transparency, accessibility, and standardization to gender equality in industries. This ecosystem includes all stakeholders, a tokenization mechanism with clear minting and burning protocols (ERC20), a transparent distribution of tokens. We also issue a gender equality certificate as an Ethereum-based non-fungible token (NFTs) as an incentive for companies and individuals that successfully use the gequi credit and verify it.


Background

Climate change and global warming are the significant challenges of the new century. Kyoto protocol (1997) regards the market mechanism as a way to solve the greenhouse gas emission reduction problem. In this view, the carbon dioxide emission is considered a commodity, forming a carbon trading system. According to the United Nations, carbon offsetting is particularly crucial for meeting the Paris Climate Agreement’s goal. There have been efforts to mitigate this problem using a carbon tax or credit. Carbon offsetting allows companies and individuals to reduce carbon emissions by purchasing carbon credits from carbon reduction projects. These projects include planting new trees, avoiding deforestation, investment in renewable energy, carbon capture, and sequestration projects. However, there has not been a global adaptation of these ideas, mainly due to a lack of transparency on issuance, usage, and life cycle of carbon credits. 

Project Description

In this project, different stakeholders involved are “Generators” of gequi credit (gender equality initiatives) and “Consumers” of gequi credit (inequality in organizations) as well as other stakeholders such as regulators, concerned citizens, and validators. “Validators” are an essential part of this ecosystem. They are accredited, globally distributed, technically competent consultants are incentivized to parameterize appropriately and onboard projects to an open architecture marketplace that matches interested parties generating and retiring gequi credits.
We will onboard gequi credits to the Ethereum by converting them into ERC-20 tokens distributed to carbon credit generators after proper validation of their projects. Buyers and sellers of gequi credit will use a decentralized exchange platform on Ethereum to trade gequi credits. The price could be determined by market dynamics driven by supply and demand. The gequi Tokens would be retired via a “buy and burn” model by sending the given gequi Tokens to a smart contract or defined Ethereum address whose private key is not known by any party and can be visible to the collective of validators as well as regulators or other stakeholders. The companies and individuals who successfully burn their ERC20 tokens will be issues Ethereum-based non-fungible tokens as a gender equality certificate.

Technical Descirption

1.	gequicredits.sol: Creates a registration template that takes in details from 3 groups:
•	Group 1 - Verifiers: They validate gequi credits from credit holders. They also verify that gequi tokens burnt are equivalent to the inequality prevelant in that organization.
•	Group 2 – Creditholders: They are organizations that already hold gequi credits in the trading ecosystem
•	Group 3 – Customers: They are individuals and companies interested in offsetting their carbon footprint by buying carbon credits and burning the carbon token.
2.	credittoken.sol: Creates an ERC20 token based on supplied and approved gequi credits through a series of functions:
•	Approve credits entered by the creditholders, which is certified by the verifiers.
•	Mint the gequi token.
•	Make the gequi token transferrable and burnable.
3.	certification.sol: Creates an ERC721 token (NFT) as a badge of successful burning gequi tokens, representing offsetting inequality in the organization.
•	Mint an ERC721 token for every 20 gequi tokens burnt.


