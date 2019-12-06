const MonsterToken = artifacts.require("MonsterToken");

module.exports = function(deployer) {
  deployer.deploy(MonsterToken);
};


