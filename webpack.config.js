const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',  // Indica que el bundle es para ejecutarse en Node.js
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: [nodeExternals()],  // Utiliza nodeExternals como externals
    // Agrega cualquier otra configuración adicional de Webpack aquí
};
