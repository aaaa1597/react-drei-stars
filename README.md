# react-drei-stars
React +TypescriptのWebアプリで、React Three Dreiのサンプル。 (星のバーティクル)

# @react-three/dreiをインストール
npm install --save @react-three/drei

# es-lintに免除設定
```ts:.eslintrc.js
-        "react/no-unknown-property": ['error', { ignore: ['css', "args", 'wireframe'] }],
+        "react/no-unknown-property": ['error', { ignore: ['css', "args", 'wireframe', 'attach'] }],
```

![image](https://github.com/aaaa1597/react-drei-stars/assets/27885482/85450ef5-94d4-4bd0-8247-3e0ec564fec0)
