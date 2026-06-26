                      // // // //cloud masking // // // // 
function maskL8sr(col) {
// Bits 3 and 4 are cloud  and cloud shadow, respectively.
var cloudsBitMask = (1 << 3);
var cloudShadowBitMask = (1 << 4);

// Get the pixel QA band.
var qa = col.select('QA_PIXEL');
// Both flags should be set to zero, indicating clear conditions.
var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
            .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
return col.updateMask(mask);
}


// or you can use these cloud masking function for better result - your study area ////

// function maskL8sr(image) {

//   var qa = image.select('QA_PIXEL');

//   var mask = qa.bitwiseAnd(1 << 1).eq(0) // dilated cloud
//     .and(qa.bitwiseAnd(1 << 2).eq(0))    // cirrus
//     .and(qa.bitwiseAnd(1 << 3).eq(0))    // cloud
//     .and(qa.bitwiseAnd(1 << 4).eq(0));   // cloud shadow

//   return image.updateMask(mask);
// }
