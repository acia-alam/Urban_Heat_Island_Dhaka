Map.centerObject(aoi, 10);


// Applies scaling factors.
function applyScaleFactors(image) {
var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
return image.addBands(opticalBands, null, true)
          .addBands(thermalBands, null, true);
}

// Filter the collection, first by the aoi, and then by date.
var image = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2') // dataset
.filterDate('2026-01-01','2026-03-01') // change this time period by your own
.filterBounds(aoi)
.map(maskL8sr)
.map(applyScaleFactors)
.median()
.clip(aoi);


var visualization = {
bands: ['SR_B4', 'SR_B3', 'SR_B2'], // RGB = Red band, Green Band, Blue band
min: 0.0,
max: 0.3,
};

Map.addLayer(image, visualization, 'True Color (432)');

  // // ////////LST Calculation start ///////

// fraction of veg
// Fraction of Vegetation = ((NDVI - NDVImin) / (NDVImax -NDVImin))^2

var fv = (ndvi.subtract(ndvi_min).divide(ndvi_max.subtract(ndvi_min))).pow(ee.Number(2))
      .rename('FV')

// em = fv*0.004 + 0.986

var em = fv.multiply(ee.Number(0.004)).add(ee.Number(0.986)).rename('EM')

var thermal = image.select('ST_B10').rename('thermal')



var lst = thermal.expression(
    '(tb / (1 + ((10.895 * (tb / 14380)) * log(em))))',  //use 10.895 instead of 11.5
    {
        'tb': thermal.select('thermal'), // Brightness temperature in Kelvin
        'em': em                        // Emissivity
    }
).rename('LST');

var lst_celsius = lst.subtract(273.15).rename('LST');

var lst_vis = {
min: 21.3420239154542,
max: 31.423525460708397,
palette: ['blue', 'royalblue', 'cyan', 'greenyellow', 'yellow', 'orange', 'red', 'darkred']
}

Map.addLayer(lst_celsius, lst_vis, 'LST')

// // // // // // // //////////////Export Image - Lst map Only Land/////////////////

// Export.image.toDrive({
//   image: lst_land,
//   description: 'Dhaka_2026_lst',
//   scale: 30,
//   maxPixels: 1e13,
//   folder: 'GEE',
//   region: aoi,
//   fileFormat: 'GeoTIFF',
// });

var lst_min = ee.Number(lst_land.reduceRegion({
reducer: ee.Reducer.min(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))

var lst_max = ee.Number(lst_land.reduceRegion({
reducer: ee.Reducer.max(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))

print('LST MIN: ',lst_min );
print('LST MAX: ',lst_max );

var lst_mean = ee.Number(lst_land.reduceRegion({
reducer: ee.Reducer.mean(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))


var lst_std = ee.Number(lst_land.reduceRegion({
reducer: ee.Reducer.stdDev(),
geometry: aoi,
scale: 30,
maxPixels: 1e13
}).values().get(0))



print('Mean LST in AOI', lst_mean)
print('STD LST in AOI', lst_std)

//  UHI or Z-score approach

//  UHI or Z-score approach = (LST - LSTmean) / LstSTD

var uhi = lst_land.subtract(lst_mean).divide(lst_std).rename('UHI')

var uhi_vis = {
min: -3.7866123120570125,
max: 3.166130312523701,
palette:['black','yellow','green', 'blue', 'red']
}

Map.addLayer(uhi.clip(aoi), uhi_vis, 'UHI')

// // // // // // // //////////////Export Image - UHI map/////////////////

// Export.image.toDrive({
//   image: uhi,
//   description: 'Dhaka_2026_uhi',
//   scale: 30,
//   maxPixels: 1e13,
//   folder: 'GEE',
//   region: aoi,
//   fileFormat: 'GeoTIFF',
// });
