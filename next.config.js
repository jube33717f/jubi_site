const webpack = require('webpack')
const { merge } = require('webpack-merge');
require('dotenv').config();



const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/
  })




const config = {
    webpack:config =>{

        const env = Object.keys(process.env).reduce((acc,curr)=>{
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
        },{});

        config.plugins.push(new webpack.DefinePlugin(env));
        
        return config;
    }
}
// const config2 = withMDX({
//     pageExtensions: ['js', 'jsx', 'mdx']
//   })
module.exports = config


