/**
 * TiDiTu - 天地图地图服务
 *
 * @see {@link http://lbs.tianditu.gov.cn/server/MapService.html docs}
 */
import { WebMapTileServiceImageryProvider } from 'cesium'
// !由于WebMapTileServiceImageryProvider使用{s}占位符后其他参数请求时丢失, 临时使用random函数随机一个子域区间值
/**
 * Vector streets Image - 矢量道路图地图
 * - Spherical Mercator projection（球面墨卡托投影）
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html WebMapTileServiceImageryProvider}
 * @author wang1212
 * @param {{ token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }} { token, options }
 * @returns {WebMapTileServiceImageryProvider}
 */
function streetsMap({ token, options }: { token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t${(Math.random() * (7 - 0 + 1) + 0) | 0}.tianditu.gov.cn/vec_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'vec',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...(options || {}),
	})
}

/**
 * Vector streets Annotation Image - 矢量道路图注记
 * - Spherical Mercator projection（球面墨卡托投影）
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html WebMapTileServiceImageryProvider}
 * @author wang1212
 * @param {{ token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }} { token, options }
 * @returns {WebMapTileServiceImageryProvider}
 */
function streetsAnnotation({
	token,
	options,
}: {
	token: string
	options?: WebMapTileServiceImageryProvider.ConstructorOptions
}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t${(Math.random() * (7 - 0 + 1) + 0) | 0}.tianditu.gov.cn/cva_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'cva',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...(options || {}),
	})
}

/**
 * Satellite Image - 卫星影像地图
 * - Spherical Mercator projection（球面墨卡托投影）
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html WebMapTileServiceImageryProvider}
 * @author wang1212
 * @param {{ token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }} { token, options }
 * @returns {WebMapTileServiceImageryProvider}
 */
function satelliteMap({ token, options }: { token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t${(Math.random() * (7 - 0 + 1) + 0) | 0}.tianditu.gov.cn/img_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'img',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...(options || {}),
	})
}

/**
 * Satellite Annotation Image - 卫星影像注记
 * - Spherical Mercator projection（球面墨卡托投影）
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html WebMapTileServiceImageryProvider}
 * @author wang1212
 * @param {{ token: string; options?: WebMapTileServiceImageryProvider.ConstructorOptions }} { token, options }
 * @returns {WebMapTileServiceImageryProvider}
 */
function satelliteAnnotation({
	token,
	options,
}: {
	token: string
	options?: WebMapTileServiceImageryProvider.ConstructorOptions
}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t${(Math.random() * (7 - 0 + 1) + 0) | 0}.tianditu.gov.cn/cia_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'cia',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...(options || {}),
	})
}

export const streets = {
	map: streetsMap,
	annotation: streetsAnnotation,
}

export const satellite = {
	map: satelliteMap,
	annotation: satelliteAnnotation,
}

export default {
	streets,
	satellite,
}
