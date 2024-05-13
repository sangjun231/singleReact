module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    //초심자에겐 오히려 헷갈릴 수 있는 설정이라 꺼둠
    "no-unused-vars": "off", // 사용되지 않는 변수를 오류로 알려주는 설정
    "react/prop-types": "off", // 리액트를 안전하게 사용해주는 설정
  },
};
