# Data Directory

## Overview

This folder contains the datasets and supporting files used for the Urban Heat Island (UHI) analysis conducted using Google Earth Engine (GEE) and Landsat 8 imagery.

## Data Sources

### Satellite Imagery

* **Dataset:** Landsat 8 Collection 2 Level-2
* **Source:** United States Geological Survey (USGS)
* **Access Platform:** Google Earth Engine (GEE)
* **Temporal Coverage:** January 2026 – March 2026
* **Spatial Resolution:** 30 meters

### Area of Interest (AOI)

The study area boundary shapefile used for clipping and analysis is stored in the `AOI/` folder.

## Folder Structure

data/
├── AOI/
│ ├── dhaka.cpg
│ ├── dhaka.dbf
│ ├── dhaka.prj
│ └── dhaka.sbn
| |__ dhaka.shp
| |__ dhaka.shp.xml
| |__ dhaka.shx

## Notes

* Raw Landsat imagery is not included in this repository because it is accessed directly through Google Earth Engine.
* Large output files may be stored externally using Google Drive, Zenodo, or Git Large File Storage (Git LFS).
* Sample outputs are provided for demonstration and reproducibility purposes.

## Coordinate Reference System

* Datum: BUTM2010
* EPSG Code: 4326

## Author

Acia Alam
M.Sc. in Geography and Environment
