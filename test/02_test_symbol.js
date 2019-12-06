var TestContract = artifacts.require("TestContract");
var TestContractInstance;
var Symbol;

contract('TestContract', function(accounts) {
    it("test of the TestContract token symbol", function() {
        return TestContract.deployed().then(function(instance) {
            TestContractInstance = instance;
            return TestContractInstance.symbol({from: accounts[0]});             
        }).then(function(result) {
            Symbol = result;
            assert.equal(Symbol, "TS", "Symbol is not ok");            
        });
    });
});
