/**
 * ref: https://prettier.io/docs/en/configuration.html
 * ref: https://prettier.io/docs/en/options.html
 */
module.exports = {
  semi: false,
  overrides: [
    {
      files: "*.test.js",
      options: {
        semi: true
      }
    },
    {
      files: ["*.html"],
      options: {
        printWidth: 150,
        tabWidth: 2
      }
    },
    {
      files: ["*.js.html"],
      options: {
        printWidth: 180,
        tabWidth: 2,
        semi: true,
        bracketSpacing: false
      }
    },
    {
      files: ["*.css"],
      options: {
        tabWidth: 2
      }
    },
    {
      files: ["*.js"],
      options: {
        printWidth: 180,
        tabWidth: 2,
        semi: true,
        bracketSpacing: false
      }
    },
    {
      files: ["*.json", ".eslintrc"],
      options: {
        printWidth: 150,
        tabWidth: 2
      }
    },
    {
      files: [".prettierrc.js"],
      options: {
        printWidth: 150,
        tabWidth: 2,
        semi: true,
        trailingComma: "none"
      }
    }
  ]
};
