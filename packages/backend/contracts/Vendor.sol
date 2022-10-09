pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract Vendor is ERC721URIStorage {
  string public vendor_name;
  address public owner;
  address public deployer;
  uint totalProducts;

  //create a struct for products
  struct Product {
    string name;
    uint price;
    string image;
    uint quantity;
    uint id;
  }

  mapping(uint => Product) public products;

  event ProductAdded(
    string name,
    uint price,
    string image,
    uint quantity,
    uint id
  );

  event ProductAddedToCart(
    string name,
    uint price,
    string image,
    uint quantity,
    uint id
  );


  event ProductPurchased(
    string name,
    uint price,
    string image,
    uint quantity,
    uint id
  );

  //create a shopping cart to add products to
  struct ShoppingCart {
    uint id;
    uint[] products;
  }

  ShoppingCart public shoppingCart;

  function addProductToCart(uint _id) public {
    shoppingCart.products.push(_id);
    emit ProductAddedToCart(products[_id].name, products[_id].price, products[_id].image, products[_id].quantity, products[_id].id);
  }

 function getCartProductFromListOfProducts(uint _id) public view returns (Product memory) {
   return products[_id];
 }

  function removeProductFromCart(uint _id) public {
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      if (shoppingCart.products[i] == _id) {
        delete shoppingCart.products[i];
      }
    }
  }

  function getProductsInCart() public view returns (uint[] memory) {
    return shoppingCart.products;
  }

  function getTotalPrice() public view returns (uint) {
    uint totalPrice = 0;
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      totalPrice += products[shoppingCart.products[i]].price;
    }
    return totalPrice;
  }

  function sendEtherToVendor() public payable {
    payable(owner).transfer(msg.value);
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      emit ProductPurchased(
        products[shoppingCart.products[i]].name,
        products[shoppingCart.products[i]].price,
        products[shoppingCart.products[i]].image,
        products[shoppingCart.products[i]].quantity,
        products[shoppingCart.products[i]].id
      );
    }
    delete shoppingCart.products;
  }

  function addProduct(string memory _name, uint _price, string memory _image, uint _quantity) public {
    totalProducts++;
    products[totalProducts] = Product(_name, _price, _image, _quantity, totalProducts);

    emit ProductAdded(_name, _price, _image, _quantity, totalProducts);
  }




  function getPrice(uint _id) public view returns (uint) {
    return products[_id].price;
  }

  function getProducts() public view returns (Product[] memory) {
    Product[] memory list_of_products = new Product[](totalProducts);
    for (uint i = 0; i < totalProducts; i++) {
      list_of_products[i] = products[i + 1];
    }
    return list_of_products;
  }

  function getOwner() public view returns (address) {
    return owner;
  }

  function getVendorName() public view returns (string memory) {
    return vendor_name;
  }

  constructor(address _owner,  string memory _vendorName) ERC721 ("Vendor", "VENDOR") {
    vendor_name = _vendorName;
    owner = _owner;
    deployer = msg.sender;
  }

    ///this is the svg experiement
    // Magic given to us by OpenZeppelin to help us keep track of tokenIds.
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  // This is our SVG code. All we need to change is the word that's displayed. Everything else stays the same.
  // So, we make a baseSvg variable here that all our NFTs can use.
  string baseSvg = "";
  // I create three arrays, each with their own theme of random words.
  // Pick some random funny words, names of anime characters, foods you like, whatever!
  string[] firstWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

  string[] secondWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  string[] thirdWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  // We need to pass the name of our NFTs token and its symbol.

  // I create a function to randomly pick a word from each array.
  function pickRandomFirstWord(uint256 tokenId) public view returns (string memory) {
  // I seed the random generator. More on this in the lesson.
  uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));
  // Squash the # between 0 and the length of the array to avoid going out of bounds.
  rand = rand % firstWords.length;
  return firstWords[rand];
  }
  function pickRandomSecondWord(uint256 tokenId) public view returns (string memory) {
  uint256 rand = random(string(abi.encodePacked("SECOND_WORD", Strings.toString(tokenId))));
  rand = rand % secondWords.length;
  return secondWords[rand];
  }
  function pickRandomThirdWord(uint256 tokenId) public view returns (string memory) {
  uint256 rand = random(string(abi.encodePacked("THIRD_WORD", Strings.toString(tokenId))));
  rand = rand % thirdWords.length;
  return thirdWords[rand];
  }
  function random(string memory input) internal pure returns (uint256) {
  return uint256(keccak256(abi.encodePacked(input)));
  }
  function makeAnEpicNFT() public {
    uint256 newItemId = _tokenIds.current();
    // We go and randomly grab one word from each of the three arrays.
    string memory first = pickRandomFirstWord(newItemId);
    string memory second = pickRandomSecondWord(newItemId);
    string memory third = pickRandomThirdWord(newItemId);
    // I concatenate it all together, and then close the <text> and <svg> tags.
    string memory finalSvg = string(abi.encodePacked(baseSvg, first, second, third, "</text></svg>"));
    console.log("\n--------------------");
    console.log(finalSvg);
    console.log("--------------------\n");
    // Actually mint the NFT to the sender using msg.sender.
    _safeMint(msg.sender, newItemId);
    // Set the NFTs data.
    _setTokenURI(newItemId, "");
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
    // Increment the counter for when the next NFT is minted.
    _tokenIds.increment();
  }

}