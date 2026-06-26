// /// /////water Masking///// // //
// NDWI calculation
var ndwi = image.normalizedDifference(['SR_B3','SR_B5']).rename('NDWI');

// Land mask (remove water)
var landMask = ndwi.lt(0);  // increase if you need to remove more water body

// Apply mask to LST
var lst_land = lst_celsius.updateMask(landMask);   // Apply land mask to Celsius LST

// Show result
Map.addLayer(lst_land, lst_vis, 'LST Land Only');
