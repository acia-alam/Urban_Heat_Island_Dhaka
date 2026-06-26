 // // // NDVI Calculation start ////////////////////

var ndvi  = image.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI')
Map.addLayer(ndvi, {min:-1, max:1, palette: ['blue', 'white', 'green']}, 'ndvi')

// ndvi statistics - ndvi min & ndvi max.

var ndvi_min = ee.Number(ndvi.reduceRegion({
reducer: ee.Reducer.min(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))


var ndvi_max = ee.Number(ndvi.reduceRegion({
reducer: ee.Reducer.max(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))

print('NDVI MIN: ', ndvi_min);
print('NDVI MAX: ', ndvi_max);

                            // // // // //////////////Export Image - ndvi map/////////////////

// Export.image.toDrive({
//   image: ndvi,
//   description: 'Dhaka_2022_ndvi',
//   scale: 30,
//   maxPixels: 1e13,
//   folder: 'GEE',
//   region: aoi,
//   fileFormat: 'GeoTIFF',
// });
