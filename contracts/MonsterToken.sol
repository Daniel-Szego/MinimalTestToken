pragma solidity >=0.4.22 <0.6.0;
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MonsterToken is ERC20Detailed, ERC20 {
    
    constructor() public ERC20Detailed("FridayToken","FTK",2)  {
        _mint(msg.sender,1000);
      //  address initA = address(0xB23Cc7D24A3507eA6eB83AaF57e308674aEb01C6);
      //  _mint(initA,100);
    }
}