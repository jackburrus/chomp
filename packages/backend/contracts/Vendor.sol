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


  //create a function that adds a product to the list of products
  function addProduct(string memory _name, uint _price, uint _quantity) public {
    totalProducts++;
    products[totalProducts] = Product(_name, _price, _quantity, totalProducts);

    emit ProductAdded(_name, _price, _quantity, totalProducts);
  }

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