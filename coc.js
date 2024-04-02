// Your Clash of Clans API token
const COC_API_TOKEN = "YOUR_COC_API_TOKEN"
const clashApi = require('clash-of-clans-api')

// Creating a Clash of Clans API client instance
let client = clashApi({
  token: COC_API_TOKEN // Optional, can also use COC_API_TOKEN env variable
});

// Function to fetch and display player information by tag
async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag)
    console.log("this is the player info:", playerInfo)

  } catch (error) {
    console.error(error)
  }
}

// Example usage
// showPlayerInfo('#2CP9LL0LC');

// Function to fetch and display clan information by tag
async function showClanByTag(tag) {
    try {
      const ClanByTag = await client.clanByTag(tag)
      console.log("this is the player info:", ClanByTag)
  
    } catch (error) {
      console.error(error)
    }
  }

// Example usage
// showClanByTag('#UPC2UQ');