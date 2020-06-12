/**
 * Google - 谷歌地图服务
 *
 */
import { UrlTemplateImageryProvider } from 'cesium'

/**
 * satellite Image - 卫星影像地图
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html UrlTemplateImageryProvider}
 * @author wang1212
 * @param {{ options?: UrlTemplateImageryProvider.ConstructorOptions }} [{ options }={}]
 * @returns {UrlTemplateImageryProvider}
 */
function satelliteMap({ options }: { options?: UrlTemplateImageryProvider.ConstructorOptions } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=s&x={x}&y={y}&z={z}',
		maximumLevel: 20,
		subdomains: ['0', '1', '2', '3'],
		...(options || {}),
	})
}

/**
 * Vector road Image - 矢量道路图地图+注记
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html UrlTemplateImageryProvider}
 * @author wang1212
 * @param {{ options?: UrlTemplateImageryProvider.ConstructorOptions }} [{ options }={}]
 * @returns {UrlTemplateImageryProvider}
 */
function streetsMapWithAnnotation({ options }: { options?: UrlTemplateImageryProvider.ConstructorOptions } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=m&x={x}&y={y}&z={z}',
		maximumLevel: 20,
		subdomains: ['0', '1', '2', '3'],
		...(options || {}),
	})
}

/**
 * Vector road Annotation Image - 矢量道路图地图注记
 *
 * @see {@link https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html UrlTemplateImageryProvider}
 * @author wang1212
 * @param {{ options?: UrlTemplateImageryProvider.ConstructorOptions }} [{ options }={}]
 * @returns {UrlTemplateImageryProvider}
 */
function streetsAnnotation({ options }: { options?: UrlTemplateImageryProvider.ConstructorOptions } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://mt{s}.google.cn/vt/lyrs=h&x={x}&y={y}&z={z}',
		maximumLevel: 20,
		subdomains: ['0', '1', '2', '3'],
		...(options || {}),
	})
}

export const streets = {
	mapWithAnnotation: streetsMapWithAnnotation,
	annotation: streetsAnnotation,
}

export const satellite = {
	map: satelliteMap,
	// annotation: satelliteAnnotation,
}

export default {
	streets,
	satellite,
}
