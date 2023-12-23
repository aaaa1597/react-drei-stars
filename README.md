# react-drei-stars
React +TypescriptのWebアプリで、React Three Dreiのサンプル。 (星のバーティクル)

# @react-three/dreiをインストール
npm install --save @react-three/drei

# es-lintに免除設定
```ts:.eslintrc.js
-        "react/no-unknown-property": ['error', { ignore: ['css', "args", 'wireframe'] }],
+        "react/no-unknown-property": ['error', { ignore: ['css', "args", 'wireframe', 'attach'] }],
```
