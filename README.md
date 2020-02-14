# Auction Dapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Prerequisite:
1. Introduction to Smart Contracts and Solidity
2. Getting Started with MetaMask
3. Using Remix IDE and Truffle Framework
5. Introduction to Vue.
6. Using Web3.js Library.

# Tools and Components: 
Solidity, Truffle, Remix IDE, VS code, Metamask, Vue-cli, Web3.js and Boostrap-vue.
 
## Building an Auction Dapp for Art works?
The auction system is a broad and sophisicated application to build but for the purpose exercise, I am foucing on showing understanding of Decentralized Applications and writing Smart Contracts.

# Work Process flow
1. Smart Contract Development and Deployment
2. Frontend development of the App and making  Web3.js settings.
3. Defining the Frontend Code for the contract Methods.


# For backend
You create your application with
```
vue create artauctiondapp
cd artauctiondapp
```

Initialize Git, Truffle and npm
```
git init
truffle init
npm init -y
```

Install Zeppelin Library
```
npm install -E zeppelin-solidity
```

You write your smart contract on Remix IDE and compile
Then you move the code to your Contract folder in your app folder

At your App folder, you compile and miggrate to a local node which is running. You can use Ganache. Make sure you set the network and compiler configurations right in the truffle-config.js file.

# For the Frontend
I am using vue framework for my Frontend and web3 to connect it to the blockchain where my contract was migrated to.

Update npm and install web3 with 
```
npm install
npm install -s web3
````


