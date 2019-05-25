module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        /* last comma rules */
        "comma-dangle": [
            2,
            "never"
        ],
        /* indent rules */
        "indent": [
            2,
            4
        ],
        /* allow console.log
           it's only for study.
           in production level, do not allow this option.
         */
        "no-console": [
            0
        ],
        /* quotes option rules */
        "quotes": [
            0
        ]
    }
};
