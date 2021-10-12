# Changelog

## _0.1.2（2021-10-12）_

- docs: add bugs address :memo:  41164d9
- build: add github package release ci process  e93ac88
- fix: 天地图使用random函数随机一个子域区间值 (#19)  ffc0187

https://github.com/wang1212/cesium-utils-provider/compare/v0.1.1...v0.1.2

## _0.1.1（2020-06-12）_

### Add

Add [OpenStreetMap](https://operations.osmfoundation.org/policies/tiles/) street annotation map service.

`OSM.streets.mapWithAnnotation()`

### Breaking changes

-   Word case changes

examples:

```
Google.Satellite.Map -> Google.satellite.map
```

-   Property name changes

`road` change to `streets`.

examples:

```
Google.road.annotation -> Google.streets.annotation
```

## _0.1.0 (2020-05-20)_
