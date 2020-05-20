/**
 * TiDiTu - 天地图地图服务
 *
 * 天地图 see docs: http://lbs.tianditu.gov.cn/server/MapService.html
 */
import { WebMapTileServiceImageryProvider } from 'cesium'

/**
 * Satellite Image - 卫星影像地图
 *
 * @author wang1212
 * @param {{ token: string; options?: any }} { token, options = {} }
 * @returns {WebMapTileServiceImageryProvider}
 */
function SatelliteMap({ token, options = {} }: { token?: string; options?: any } = {}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t0.tianditu.com/img_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'img',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...options,
	})
}

/**
 * Satellite Annotation Image - 卫星影像注记
 *
 * @author wang1212
 * @param {{ token: string; options?: any }} { token, options = {} }
 * @returns {WebMapTileServiceImageryProvider}
 */
function SatelliteAnnotation({ token, options = {} }: { token?: string; options?: any } = {}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t0.tianditu.com/cia_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'cia',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...options,
	})
}

/**
 * Vector road Image - 矢量道路图地图
 *
 * @author wang1212
 * @param {{ token: string; options?: any }} { token, options = {} }
 * @returns {WebMapTileServiceImageryProvider}
 */
function RoadMap({ token, options = {} }: { token?: string; options?: any } = {}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t0.tianditu.com/vec_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'vec',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...options,
	})
}

/**
 * Vector road Annotation Image - 矢量道路图注记
 *
 * @author wang1212
 * @param {{ token: string; options?: any }} { token, options = {} }
 * @returns {WebMapTileServiceImageryProvider}
 */
function RoadAnnotation({ token, options = {} }: { token?: string; options?: any } = {}): WebMapTileServiceImageryProvider {
	return new WebMapTileServiceImageryProvider({
		url: `http://t0.tianditu.com/cva_w/wmts?tk=${token}`,
		format: 'tiles',
		layer: 'cva',
		style: 'default',
		tileMatrixSetID: 'w',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
		...options,
	})
}

export const Satellite = {
	Map: SatelliteMap,
	Annotation: SatelliteAnnotation,
}

export const Road = {
	Map: RoadMap,
	Annotation: RoadAnnotation,
}

export default {
	Satellite,
	Road,
}
