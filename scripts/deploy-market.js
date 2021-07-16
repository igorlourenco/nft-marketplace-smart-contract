async function main() {
    const Market = await ethers.getContractFactory("Market");
    
    const market = await Market.deploy();
    console.log("Market deployed to address:", market.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });