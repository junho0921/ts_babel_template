const presets = [
    [
        "@babel/env",
        {
            targets: {
                chrome: "10"
            },
            useBuiltIns: "usage"
        }
    ],
    "@babel/typescript",
    "@babel/react"
];

module.exports = { presets };