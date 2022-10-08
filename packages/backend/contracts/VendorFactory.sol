
import "./Vendor.sol";

contract VendorFactory {
  // instantiate Bank contract
  Vendor vendor;
  //keep track of created Bank addresses in array
  Vendor[] public list_of_vendors;

  // function arguments are passed to the constructor of the new created contract
  function createVendor(address _owner, uint256 _funds) external {
    vendor = new Vendor(_owner, _funds);
    list_of_vendors.push(vendor);
  }

  //create a function that returns all the vendors
  function getVendors() external view returns (Vendor[] memory) {
    return list_of_vendors;
  }
}