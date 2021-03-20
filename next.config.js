const webpack = require('webpack')

require('dotenv').config();

const withFonts = require('next-fonts');
module.exports = withFonts();

module.exports = {
    webpack:config =>{
        const env = Object.keys(process.env).reduce((acc,curr)=>{
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
        },{});

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
    }
}


module.exports = withFonts(
    withCSS(
        withSass({
            enableSvg: true,
            webpack(config, options) {
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                });
                return config;
            }
        })
    )
);