const { MARKETPLACE_CONTRACT_ADDRESS } = process.env;

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(MARKETPLACE_CONTRACT_ADDRESS);
  await nft.deployed();

  console.log("NFT deployed to address:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
