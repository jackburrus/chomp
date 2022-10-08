
import "./Vendor.sol";

contract VendorFactory {
  // instantiate Bank contract
  Vendor vendor;
  //keep track of created Bank addresses in array
  Vendor[] public list_of_vendors;

  //VendorCreated event
  event VendorCreated(address vendor_address, address owner, string vendor_name);

  // function arguments are passed to the constructor of the new created contract
  function createVendor(address _owner, string memory _vendorName) external {
    vendor = new Vendor(_owner, _vendorName);
    list_of_vendors.push(vendor);
    //emit an event with the address of the new contract
    emit VendorCreated(address(vendor), _owner, _vendorName);
  }

  //create a function that returns all the vendors
  function getVendors() external view returns (Vendor[] memory) {
    return list_of_vendors;
  }
}