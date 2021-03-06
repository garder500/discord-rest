module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "ignorePatterns": ["node_modules/*","test/*","src/*","scripts/*"],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-irregular-whitespace": "off",
    }
};
