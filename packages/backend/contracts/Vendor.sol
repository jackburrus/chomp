// This is used as a template to initialize state variables
contract Vendor {
  string public vendor_name;
  address public owner;
  address public deployer;
  uint totalProducts;

  //create a struct for products
  struct Product {
    string name;
    uint price;
    uint quantity;
    uint id;
  }

  mapping(uint => Product) public products;

  event ProductAdded(
    string name,
    uint price,
    uint quantity,
    uint id
  );

  //create a shopping cart to add products to
  struct ShoppingCart {
    uint id;
    uint[] products;
  }

  //create a variable to store the shopping cart
  ShoppingCart public shoppingCart;

  //create a functin that adds products to the shopping cart
  function addProductToCart(uint _id) public {
    shoppingCart.products.push(_id);
  }

 //get product in cart from list of products
 function getCartProductFromListOfProducts(uint _id) public view returns (Product memory) {
   return products[_id];
 }



  //create a function that removes products from the shopping cart
  function removeProductFromCart(uint _id) public {
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      if (shoppingCart.products[i] == _id) {
        delete shoppingCart.products[i];
      }
    }
  }

  //create a function that returns the products in the shopping cart
  function getProductsInCart() public view returns (uint[] memory) {
    return shoppingCart.products;
  }

  //create a function that returns the total price of the products in the shopping cart
  function getTotalPrice() public view returns (uint) {
    uint totalPrice = 0;
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      totalPrice += products[shoppingCart.products[i]].price;
    }
    return totalPrice;
  }

  //create a function that accepts the amount of money the customer is paying
  function submitPaymentForShoppingCart(uint _amount) public payable {
    require(_amount == getTotalPrice(), "You must pay the exact amount");
    payable(owner).transfer(_amount);
    for (uint i = 0; i < shoppingCart.products.length; i++) {
      emit ProductAdded(
        products[shoppingCart.products[i]].name,
        products[shoppingCart.products[i]].price,
        products[shoppingCart.products[i]].quantity,
        products[shoppingCart.products[i]].id
      );
    }
  }











  //create a function that adds a product to the list of products
  function addProduct(string memory _name, uint _price, uint _quantity) public {
    totalProducts++;
    products[totalProducts] = Product(_name, _price, _quantity, totalProducts);

    emit ProductAdded(_name, _price, _quantity, totalProducts);
  }

  //create a function to add multiple products to a checkout cart
  // function addProductsToCart(uint[] memory _ids) public {
  //   for (uint i = 0; i < _ids.length; i++) {
  //     products[_ids[i]].quantity--;
  //   }
  // }



  //create a function that returns the price of a product
  function getPrice(uint _id) public view returns (uint) {
    return products[_id].price;
  }

  //return a list of products
  function getProducts() public view returns (Product[] memory) {
    Product[] memory list_of_products = new Product[](totalProducts);
    for (uint i = 0; i < totalProducts; i++) {
      list_of_products[i] = products[i + 1];
    }
    return list_of_products;
  }

  //create a function that returns the owner of the contract
  function getOwner() public view returns (address) {
    return owner;
  }

  //function to get vendor name
  function getVendorName() public view returns (string memory) {
    return vendor_name;
  }

  constructor(address _owner,  string memory _vendorName) {
    vendor_name = _vendorName;
    owner = _owner;
    deployer = msg.sender;
  }
}