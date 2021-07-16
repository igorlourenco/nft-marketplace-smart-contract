describe("Create NFT Smart Contract", function() {
  it("Should create NFT Smart Contract", async function() {
    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy();
    await marketplace.deployed();
    const marketplaceAddress = marketplace.address;

    const NFT = await ethers.getContractFactory("NFT");
    await NFT.deploy(marketplaceAddress);
  });
});
