import React, { Component } from 'react';
import Intro from './Intro';
import Header from './Header';
import Header1 from './Header1';
import './App.css';
import Web3 from 'web3';
let web3js;
    if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.

    web3js = new Web3(window.web3.currentProvider);
    console.log('ok');
    } else {



       // We are on the server Or the user is not running metamask
        //  Not relavant yet
        console.log('Problem?');

    }
 console.log('WEB3JS: ',web3js);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {balance: ''}
    this.state = {tokenAddress: ''}
    this.state = {walletAddress: ''}

 }
 handletokenAddress = (event) => {
  let n = event.target.value;
  this.setState({tokenAddress: n});
};
handlewalletAddress = (event) => {
  let n = event.target.value;
  this.setState({walletAddress: n});
};
   getERC20TokenBalance(tokenAddress, walletAddress, callback) {

    // ERC20 ト ช ークンの残高を取得するための最小限のABI
    let minABI = [
      // balanceOf
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      },
      // decimals
      {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
      }
    ];
    let contract = web3js.eth.Contract(
      minABI,
      '0x0d01bc6041ac8f72e1e4b831714282f755012764'
  );
  console.log(contract)
    contract.balanceOf(walletAddress, (error, balance) => {
      contract.decimals((error, decimals) => {
        balance = balance.div(10**decimals);
        console.log(balance.toString());
        callback(balance);
      });
    });
  }
  _getTokenBalance = (address) => {
    let minABI = [
      // balanceOf
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      },
      // decimals
      {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
      }
    ];
    let contract = web3js.eth.Contract(
      minABI,
      '0x0d01bc6041ac8f72e1e4b831714282f755012764'
  );
    return new Promise(function(resolve, reject) {
        var tokenBalance = 0;
        contract.methods.balanceOf(address).call().then(function (result) {
            var tokensWei = result;
            console.log("Tokens Wei: " + Object.values(tokensWei));
            contract.methods.decimals().call().then(function (result) {
                var decimals = result;
                console.log("Token decimals: " + decimals);
                //tokenBalance = tokensWei/(10**decimals);
                //tokenBalance = parseFloat(tokensWei) / Math.pow(10, decimals);
                console.log("Token balance: " + tokenBalance.toString());
                resolve(tokenBalance);
            });
        });
    });
}
   onAddressChange(e) {
    let tokenAddress = this.state.tokenAddress;
    let walletAddress = this.state.walletAddress;
    if( walletAddress != "") {
      this._getTokenBalance(walletAddress).then(function(tokenBalance) {
        console.log("Token balance: " + tokenBalance.toString());
    });    
    }
  }
  
  render() {
    return (
      <div className="container mt-4 " > 
          <Header />
          <Intro />
          <h1>Get ERC20 Token Balance</h1>

  <h2>Token Address</h2>
  <input type="text" name="tokenAddress" value={this.state.tokenAddress} onChange={this.handletokenAddress} />
  <p>e.g. 0x0d01bc6041ac8f72e1e4b831714282f755012764</p>

  <h2>Wallet Address</h2>
  <input type="text" name="walletAddress" value={this.state.walletAddress} onChange={this.handlewalletAddress} />
  <p>e.g. 0x6c25FE295Ecee6F0D8D34fC28dca2de68538fA4a</p>
<button onClick={this.onAddressChange()}>submit</button>
  <h2>Result</h2>
  
      </div>
      
    );
  }
}

export default App;