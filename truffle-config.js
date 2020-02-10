require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note office comfort install kitten outer tag'; 
let testAccounts = [
"0xea4e4d05d2fdfdfb71b34221cd9b8fffffb7229892ab03617eb4d8045a8c32ec",
"0x57b480a30f04234b0b0eea44601fc4a7f6c2126f9d47a206649fd4758e841a39",
"0x33ae10ce50ea9532aa9038049ff5baa935792e61266418a5e6206c7e2739bc1d",
"0xe8e1e5b424b1348c6956e17cfcfb423db84334419f7b79542bd534b22d6f428f",
"0xecc2b12c2df8a582d72d9763f7363445ec85f5f043b02f007210d9eca2ad7b91",
"0x63f9e9c63135613b1287a33819d33efd1a4b3d6f5cbee4584699ce4fb81f2c88",
"0x24a9ad847f7f78495450d081c67dfcefcc833a122462116b4ca5ab53fe55e52b",
"0x603cd540915f5d8da634968a40b56ed7fda938a3c83fae65239497ac22bc6dc3",
"0xee6b6202541562a641cf3b4d94e2999847c81a62bc46c56cc27fcd4bc2a275b1",
"0x4a77921f113a295774a8b615da1acb391437e40826837b16aa6d45eea3c4442a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
