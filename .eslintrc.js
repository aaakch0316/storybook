module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "prettier",
        "@emotion",
        "jest",
        "jest-dom"
    ],
    "rules": {
        "prettier/prettier": "error",
    },
    "settings": {
        "import/resolver": {
          "typescript": {}
        }
    }
}