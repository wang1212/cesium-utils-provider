/**
 * OpenStreetMap map service -  OSM 地图服务
 *
 * @see {@link https://operations.osmfoundation.org/policies/tiles/ OpenStreetMap}
 */
import { UrlTemplateImageryProvider } from 'cesium'

/**
 * Streets Map with Annotation - OSM 街道地图 + 注记
 *
 * @author wang1212
 * @param {{ options?: UrlTemplateImageryProvider.ConstructorOptions }} [{ options }={}]
 * @returns {UrlTemplateImageryProvider}
 */
function streetsMapWithAnnotation({ options }: { options?: UrlTemplateImageryProvider.ConstructorOptions } = {}): UrlTemplateImageryProvider {
	return new UrlTemplateImageryProvider({
		url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		maximumLevel: 18,
		subdomains: ['a', 'b', 'c'],
		...(options || {}),
	})
}

export const streets = {
	mapWithAnnotation: streetsMapWithAnnotation,
}

export default {
	streets,
}
