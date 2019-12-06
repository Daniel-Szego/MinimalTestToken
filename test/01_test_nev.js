var TestContract = artifacts.require("TestContract");
var TestContractInstance;
var Supply;

contract('TestContract', function(accounts) {
    it("test of the TestContract token name", function() {
        return TestContract.deployed().then(function(instance) {
            TestContractInstance = instance;
            return TestContractInstance.name({from: accounts[0]});             
        }).then(function(result) {
            CoinName = result;
            assert.equal(CoinName, "Test", "coinname is not ok");            
        });
    });
});
