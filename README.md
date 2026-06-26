# Results

This folder contains the outputs generated from the Urban Heat Island (UHI) analysis using Landsat 8 Collection 2 Level-2 imagery and Google Earth Engine (GEE).

## Output Files

### NDVI.tif

The Normalized Difference Vegetation Index (NDVI) raster map representing vegetation density and distribution within the study area.

**Formula:**
NDVI = (NIR - Red) / (NIR + Red)

---

### LST.tif

The Land Surface Temperature (LST) raster map derived from Landsat 8 thermal infrared band data after emissivity correction.

**Unit:** Degrees Celsius (°C)

---

### UHI.tif

The Urban Heat Island (UHI) raster map calculated using the Z-score normalization approach.

**Formula:**
UHI = (LST - Mean LST) / Standard Deviation of LST

---

### Statistics.csv

Statistical summary of the study area, including:

* Minimum LST
* Maximum LST
* Mean LST
* Standard deviation of LST
* Minimum NDVI
* Maximum NDVI

---

## Coordinate Reference System

All raster outputs are exported using the coordinate reference system provided by Google Earth Engine and Landsat 8 imagery.

---

## Data Format

* Raster format: GeoTIFF (.tif)
* Statistical data: CSV (.csv)

---

## Generated Using

* Google Earth Engine (JavaScript API)
* Landsat 8 Collection 2 Level-2 imagery

---

## Study Area

Dhaka Metropolitan Area, Bangladesh

---
## Data Download

Large datasets are available here:

- https://drive.google.com/file/d/1wml7EKaQR5sEED5wl5Eq6WKEuRQY5iZq/view?usp=sharing
- https://drive.google.com/file/d/1G_MxTnMLJ4ivepEyD08x7NUwiWKA7bYH/view?usp=sharing
- https://drive.google.com/file/d/1ZniB3RZ9RqDB7dYRqw5UcC4f-Dl8wDX6/view?usp=sharing
  ---
## Author

Acia Alam

M.Sc. in Geography and Environment
