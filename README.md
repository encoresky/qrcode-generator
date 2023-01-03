# React Easy QR-Code Generator

Easilty generate QR code from any text or url. It is based on [QR Server API](https://goqr.me/api/doc/create-qr-code/).

## 💡 Features

- Generate QR code for any text and url.
- Small and lightweight.
- Works on all platforms Web, Android and iOS.

## 🔧 Installation

```bash
npm i react-easy-qrcode-generator    # npm
yarn add react-easy-qrcode-generator # yarn
```

## 🖥️ Example

[![Try with CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/beautiful-ives-56h5f3?file=/src/App.js)

## 🖥️ Preview

![Web](https://raw.githubusercontent.com/encoresky/qrcode-generator/main/demo-image.png)

## 📦 Usage

```tsx
import React, { useState } from "react";
import { qrcodeGenerator } from "react-easy-qrcode-generator";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          qrcodeGenerator({
            value: value,
            size: "180x180",
            title: "Title",
            qrAlt: "QR Code Image",
            showQrId: "qr-code",
          })
        }
      >
        Generator QR
      </button>
      <div id="qr-code" />
    </div>
  );
}
```

## 👀 API References

#### Functions

```
  qrcodeGenerator({value, size, title, qrAlt, showQrId})
```

Takes the following parameters:

| Parameter  | Type     | Default value             | Description  |
| :--------- | :------- | :------------------------ | :----------- |

| `value`    | `string` | `null`                    | **Required** |
| `size`     | `string` | `180x180`                 | **Optional**  |
| `title`    | `string` | `React easy QR generator` | **Optional**  |
| `qrAlt`    | `string` | `React easy QR image`     | **Optional**  |
| `showQrId` | `string` | `null`                    | **Required** |
| `color`    | `string` | `0-0-0`                   | **Optional**  |
| `bgcolor`  | `string` | `255-255-255` Valid examples for color and bgcolor: 255-0-0 (red),f00 (red), FF0000 (red),              0-255-0 (green), 0f0 (green), 00ff00 (green), 0-0-255 (blue), 00f (blue), 0000ff (blue), 556B2F (DarkOliveGreen)             | **Optional**  | 

## 📜 License

[MIT](https://github.com/encoresky/qrcode-generator/blob/main/LICENSE)
