const path = require('path')
module.exports = function override(config, env) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
    };
    config.module={
        rules:[
            {
                test:/\.(css|less)$/,
                use:['style-loader', 'css-loader','less-loader']
            }
        ]
    }
    return config;
};