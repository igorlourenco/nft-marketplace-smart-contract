describe("Create Marketplace Smart Contract", function() {
  it("Should create Marketplace Smart Contract", async function() {
    const Marketplace = await ethers.getContractFactory("Marketplace");
    await Marketplace.deploy();
  });
});
