# Cesium utils - Provider

This is a utils of [Cesium.js](https://cesium.com/cesiumjs/).

The utils provide the commonly used [ImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ImageryProvider.html) and [TerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/TerrainProvider.html) for easy use in every project developed based on Cesium.js.

[Demo](./test/index.html)

## Content

Including the following map services:

-   TianDiTu

    -   TianDiTu.Satellite.Map
    -   TianDiTu.Satellite.Annotation
    -   TianDiTu.Road.Map
    -   TianDiTu.Road.Annotation

-   Google

    -   Google.Satellite.Map
    -   Google.Road.MapWithAnnotation
    -   Google.Road.Annotation

## Bundle

The following bundles are provided:

    build/
    ├── bundle.js
    ├── bundle.min.js
    ├── bundle.esm.js
    ├── bundle.esm.min.js
    ├── bundle.cjs.js
    ├── bundle.cjs.min.js
    ├── bundle.umd.js
    └── bundle.umd.min.js

It also provides the corresponding **sourcemap** file.

## Usage

### Browser

In the browser, referenced by the `<script>` tag:

```html
<script src="https://cesium.com/downloads/cesiumjs/releases/1.69/Build/Cesium/Cesium.js"></script>
<!-- Reference the utils library -->
<script src="/path/to/bundle.min.js"></script>
```

It is mounted at `Cesium._utils.Provider`, so you can use it like this:

```js
const { TianDiTu, Google } = Cesium._utils.Provider
```

**_If you can't get the bundle file, you can try to [build it yourself](#build)._**

### Node.js

Install via npm:

```bash
npm install cesium-utils-provider
```

Use it like this:

```js
// ES Module
import { TianDiTu, Google } from 'cesium-utils-provider'

// CommonJS
const utilsProvider = require('cesium-utils-provider')
```

## Build

If you cannot get the bundle file, or you want to add additional map service resources and other reasons, you can build your own.

First, `clone` to local

```bash
git clone https://github.com/wang1212/cesium-utils-provider.git <dir>
cd <dir>/
npm install
```

Then you can modify the files in **src/** by yourself, and run the following command when finished:

```bash
npm run build
```

The bundle file will be generated in the **build/** folder, include **sourcemap** file.

## License

[MIT](./LICENSE).
