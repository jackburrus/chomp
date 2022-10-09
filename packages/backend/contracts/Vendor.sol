
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

import "./Utils.sol";
import "./SVG.sol";


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

  event ReceiptMinted(
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

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;


function renderItems() public view returns (string memory) {
      //iterate over the shopping cart and render the items
      string memory items = "";
      for (uint i = 0; i < shoppingCart.products.length; i++) {
        //get the product from the list of products
        Product memory product = getCartProductFromListOfProducts(shoppingCart.products[i]);
        items = string.concat(
                items,
                svg.text(
                    string.concat(
                        svg.prop('margin-bottom', '10px'),
                        svg.prop('x', '20'),
                        svg.prop('y', utils.uint2str(100 + i * 30)),
                        svg.prop('font-size', '16'),
                        svg.prop('fill', 'black')


                    ),
                    string.concat(
                        product.name,
                        ' ',
                        "$",
                        utils.uint2str(product.price),
                        ' ',
                        ' '
                    )
                )
            );



      }


      return items;

    }


  function mintAReceipt() public {
    uint256 newItemId = _tokenIds.current();

    //get a list of products in the shopping cart
    uint[] memory productsInCart = getProductsInCart();

    //fetch the items from the list of products
    Product[] memory items = new Product[](productsInCart.length);
    for (uint i = 0; i < productsInCart.length; i++) {
      items[i] = getCartProductFromListOfProducts(productsInCart[i]);
    }

    console.log(items[0].name, 'items');

   //get the total price of the cart
    uint totalPrice = getTotalPrice();
    //convert total price to string




    string memory finalSvg = string(abi.encodePacked( string.concat(
                '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" style="background:#ffffff; border-radius:10px;  ">',
                svg.text(
                    string.concat(
                        svg.prop('x', '20'),
                        svg.prop('y', '40'),
                        svg.prop('font-size', '22'),
                        svg.prop('fill', 'black')
                    ),
                    string.concat(
                        svg.cdata('Receipt for order #'),
                        utils.uint2str(newItemId)
                    )
                ),
                svg.rect(
                    string.concat(
                        svg.prop('fill', 'black'),
                        svg.prop('x', '20'),
                        svg.prop('y', '50'),
                        svg.prop('width', utils.uint2str(190)),
                        svg.prop('height', utils.uint2str(3))
                    ),
                    utils.NULL
                ),

                renderItems(),

                svg.rect(
                    string.concat(
                        svg.prop('fill', 'black'),
                        svg.prop('x', '20'),
                        svg.prop('y', '260'),
                        svg.prop('width', utils.uint2str(190)),
                        svg.prop('height', utils.uint2str(2))
                    ),
                    utils.NULL
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '20'),
                        svg.prop('y', '280'),
                        svg.prop('font-size', '16'),
                        svg.prop('fill', 'black')
                    ),
                    'Total'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '20'),
                        svg.prop('y', '300'),
                        svg.prop('font-size', '16'),
                        svg.prop('fill', 'black')
                    ),
                    Strings.toString(totalPrice)
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '40'),
                        svg.prop('y', '300'),
                        svg.prop('font-size', '16'),
                        svg.prop('fill', 'black')
                    ),
                    "USD"
                ),
                '</svg>')));
    console.log("\n--------------------");
    console.log(finalSvg);
    console.log("--------------------\n");
    // Actually mint the NFT to the sender using msg.sender.
    _safeMint(msg.sender, newItemId);
    // Set the NFTs data.
    _setTokenURI(newItemId, finalSvg);
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
    // Increment the counter for when the next NFT is minted.
    _tokenIds.increment();
    emit ReceiptMinted(newItemId);
  }

  function getTokenUri (uint256 _tokenId) public view returns (string memory) {
    return tokenURI(_tokenId);
  }

}