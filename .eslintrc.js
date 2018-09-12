module.exports = {
    env: {
        "node": true,
        "es6": true,
        "browser": true,
        'jest/globals': true,
    },
    extends: ["airbnb"],
    parserOptions: {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    plugins: [ "jest" ],
}
