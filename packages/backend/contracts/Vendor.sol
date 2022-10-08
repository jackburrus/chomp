// This is used as a template to initialize state variables
contract Vendor {
  uint256 public bank_funds;
  address public owner;
  address public deployer;

  constructor(address _owner, uint256 _funds) {
    bank_funds = _funds;
    owner = _owner;
    deployer = msg.sender;
  }
}