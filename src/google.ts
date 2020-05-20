/**
 * Google - 谷歌地图服务
 *
 */
import { UrlTemplateImageryProvider } from 'cesium'

/**
 * Satellite Image - 卫星影像地图
 *
 * @author wang1212
 * @param {{ options?: any }} { options = {} }
 * @returns {UrlTemplateImageryProvider}
 */
function SatelliteMap({ options = {} }: { options?: any } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=s&x={x}&y={y}&z={z}',
		maximumLevel: 20,
		subdomains: ['0', '1', '2', '3'],
		...options,
	})
}

/**
 * Vector road Image - 矢量道路图地图+注记
 *
 * @author wang1212
 * @param {{ options?: any }} { options = {} }
 * @returns {UrlTemplateImageryProvider}
 */
function RoadMapWithAnnotation({ options = {} }: { options?: any } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=m&x={x}&y={y}&z={z}',
		maximumLevel: 20,
		subdomains: ['0', '1', '2', '3'],
		...options,
	})
}

/**
 * Vector road Annotation Image - 矢量道路图地图注记
 *
 * @author wang1212
 * @param {{ options?: any }} { options = {} }
 * @returns {UrlTemplateImageryProvider}
 */
function RoadAnnotation({ options = {} }: { options?: any } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=h&x={x}&y={y}&z={z}',
		maximumLevel: 18,
		subdomains: ['0', '1', '2', '3'],
		...options,
	})
}

export const Satellite = {
	Map: SatelliteMap,
	// Annotation: SatelliteAnnotation,
}

export const Road = {
	MapWithAnnotation: RoadMapWithAnnotation,
	Annotation: RoadAnnotation,
}

export default {
	Satellite,
	Road,
}
