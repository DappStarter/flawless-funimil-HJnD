require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain solid hover enter fog suit'; 
let testAccounts = [
"0x3ae30a3217d53cc13453d76bf8ec1bf05a95773523821785be0b71a7b228289b",
"0x7d40c4e564bcc72347162c1f51340096ff0f68676714c7298327729933dd8428",
"0x6fc5626d4f4205afe02fea59aa272c37a4290c25486d1d74f1827f8c4b581e09",
"0xb750d954a3b0629deababf67eea8db91fd0ef03d887bdb2b9237618eac506443",
"0xc22cc55a1913b416a7667c92da9c7a2f5fa3e3f1dc1fd9e43ac5676e517f178a",
"0x2e3f7f834fa1cfd0e4c75641812fc2e912548961113cc8f9db9b22079322d860",
"0x708bd47e7112c08578f574b170da377270ca54dbc5859e4e7fff1e0c43202fe3",
"0xd581ef69f6719084cefb44c80c1995aefaa0833caa8800ace17a582d59c79709",
"0xa8124ceb1cc8f2502a05363225865f8feae187a00b5c093e2466862e80f4d270",
"0x424d385903a444c02e1cbb37afb0f690d9c2c169be06fc80bb52aedf131754aa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

