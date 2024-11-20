const webpack = require("webpack");

module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        vm: require.resolve("vm-browserify"),
    };

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ]);

    config.resolve.fallback = {
        ...config.resolve.fallback,
        os: require.resolve("os-browserify"),
        path: require.resolve("path-browserify"),
        buffer: require.resolve("buffer"),
    };


    return config;
};
