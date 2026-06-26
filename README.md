# Scripts Directory

This folder contains the Google Earth Engine (GEE) JavaScript scripts used for Urban Heat Island (UHI) analysis using Landsat 8 Collection 2 Level-2 imagery.

## Files

### `UHI_LST_Analysis.js`

Main script for calculating Land Surface Temperature (LST) and Urban Heat Island (UHI) intensity using the Z-score method.

**Functions included:**

* Cloud masking
* Radiometric scaling
* NDVI calculation
* Fractional vegetation estimation
* Surface emissivity calculation
* Land Surface Temperature (LST) retrieval
* Water body masking
* Urban Heat Island (UHI) mapping
* Statistical analysis

---

### `NDVI_Calculation.js`

Calculates the Normalized Difference Vegetation Index (NDVI) from Landsat 8 imagery.

**Formula:**

NDVI = (NIR - Red) / (NIR + Red)

---

### `Water_Masking.js`

Calculates the Normalized Difference Water Index (NDWI) and masks water bodies from the study area.

**Formula:**

NDWI = (Green - NIR) / (Green + NIR)

---

### `Cloud_Masking.js`

Removes clouds and cloud shadows using the QA_PIXEL band of Landsat 8 Collection 2 Level-2 data.

---

## Data Source

* Landsat 8 Collection 2 Level-2
* Google Earth Engine Data Catalog

---

## Study Area

Dhaka Metropolitan Area, Bangladesh

---

## Requirements

* Google Earth Engine account
* Google Earth Engine JavaScript Code Editor

---

## Author

Acia Alam

M.Sc. in Geography and Environment
