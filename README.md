# Clash of Clans API Client in Node.js

## Introduction
This project demonstrates how to interact with the Clash of Clans API using Node.js. It includes functions to fetch and display player and clan information using their respective tags.

## Requirements
- Node.js installed on your machine
- Clash of Clans API token (replace "YOUR_COC_API_TOKEN" in the code with your actual token)

## How to Run the Code
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:
   ```
   npm install clash-of-clans-api
   ```
4. Replace "YOUR_COC_API_TOKEN" in the code with your actual Clash of Clans API token.
5. Uncomment the function calls `showPlayerInfo('#2CP9LL0LC');` and `showClanByTag('#UPC2UQ');` if you want to test fetching player and clan information.
6. Run the code by executing the following command:
   ```
   node coc.js
   ```
7. Check the console output to view the fetched player and clan information.