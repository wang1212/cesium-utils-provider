# Cesium utils - Provider

这是 [Cesium.js](https://cesium.com/cesiumjs/) 的一个工具库。

该工具库提供了日常使用的 [ImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ImageryProvider.html) 和 [TerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/TerrainProvider.html)， 以方便在每个基于 Cesium.js 开发的项目中使用。

[Demo](./test/index.html)

## 地图资源

包含以下的地图服务资源：

-   TianDiTu

    -   TianDiTu.Satellite.Map
    -   TianDiTu.Satellite.Annotation
    -   TianDiTu.Road.Map
    -   TianDiTu.Road.Annotation

-   Google

    -   Google.Satellite.Map
    -   Google.Road.MapWithAnnotation
    -   Google.Road.Annotation

## 打包文件

提供了以下捆绑包文件:

    types/
    build/
    ├── bundle.js
    ├── bundle.min.js
    ├── bundle.esm.js
    ├── bundle.esm.min.js
    ├── bundle.cjs.js
    ├── bundle.cjs.min.js
    ├── bundle.umd.js
    └── bundle.umd.min.js

同时也提供了对应的 **sourcemap** 文件。

## 用法

### 浏览器

在浏览器中，通过 `<script>` 标签引用：

```html
<script src="https://cesium.com/downloads/cesiumjs/releases/1.69/Build/Cesium/Cesium.js"></script>
<!-- 引用该工具库 -->
<script src="/path/to/bundle.min.js"></script>
```

该工具库挂载在 `Cesium._utils.Provider` 位置，所以你可以这样使用：

```js
const { TianDiTu, Google } = Cesium._utils.Provider
```

**_如果你无法获取捆绑包文件, 你可以尝试 [自己构建](#build)._**

### Node.js

通过 npm 安装：

```bash
npm install cesium-utils-provider
```

这样使用：

```js
// ES Module
import { TianDiTu, Google } from 'cesium-utils-provider'

// CommonJS
const utilsProvider = require('cesium-utils-provider')
```

## 构建

出于你无法获取到 bundle 文件，或者想自己添加额外的地图服务资源等其它原因，你可以自己构建。

首先， `clone` 到本地

```bash
git clone https://github.com/wang1212/cesium-utils-provider.git <dir>
cd <dir>/
npm install
```

然后，您可以自己修改 **src/** 中的文件，并在完成后运行以下命令：

```bash
npm run build
```

捆绑包文件将在 **build/** 文件夹中生成，包括 **sourcemap** 文件。

## 许可

[MIT](./LICENSE).
