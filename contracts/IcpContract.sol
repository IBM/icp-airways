pragma solidity ^0.4.18;
contract Contract {

    function set(string _value) public {
        value = _value;
    }
    
    function get() public constant returns (string) {
        return value;
    }
    string public value;
}