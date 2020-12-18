// noinspection JSUnusedGlobalSymbols
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/toolbox/'
        : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Toolbox'
                return args
            })
    }
}
