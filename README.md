# Awesome Agriculture [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome open source technology for agriculture, farming, and gardening.

[Agriculture](https://en.wikipedia.org/wiki/Agriculture) is the science and art of cultivating plants and livestock for food and materials.

Contributions welcome! Please follow the [contributing guidelines](https://github.com/brycejohnston/awesome-agriculture/blob/master/contributing.md).

## Contents

- [Automation and Robotics](#automation-and-robotics)
- [Calculators](#calculators)
- [Climate, Environment and Weather](#climate-environment-and-weather)
- [Crop Modeling, Phenotyping, and Pathology](#crop-modeling-phenotyping-and-pathology)
- [Datasets](#datasets)
  - [Research and General Data](#research-and-general-data)
  - [Regional Data](#regional-data)
    - [India](#india)
    - [United States](#united-states)
- [Data Standardization, Interoperability and APIs](#data-standardization-interoperability-and-apis)
- [Farm Management Systems and Record Keeping](#farm-management-systems-and-record-keeping)
- [Geospatial and GIS](#geospatial-and-gis)
- [IoT, Hardware](#iot-hardware)
- [Knowledgebases and Learning Resources](#knowledgebases-and-learning-resources)
- [Machine Learning and AI](#machine-learning-and-ai)
- [Remote Sensing and Imagery](#remote-sensing-and-imagery)

## Automation and Robotics

- [Acorn Rover](https://github.com/Twisted-Fields) - precision farming rover, Odrive, Python.
- [Ant Robotics](https://antrobotics.de/) - development from Ecoterra bot
- [Earth Rover](https://github.com/earthrover) - Ag AGV ROS1 precision farming rover
- [FarmBot](https://github.com/farmbot) - Open source precision gardening project.
- [FarmBot-ROS](https://github.com/farmbot-ros/) - Open source farming robot.
- [Feldfreund Dev Kit](https://github.com/zauberzeug/feldfreund_devkit) - Open source development platform for autonomous outdoor robotics and agricultural weeding.
- [Field Mission Planner](https://github.com/tecelskyyivan-alt/ardu-field-planner) - Open-source spraying route planner for ArduPilot drones (coverage routes around obstacles, MAVLink upload, offline).
- [Fields2Cover](https://github.com/Fields2Cover/Fields2Cover) - Robust and efficient coverage paths for autonomous agricultural vehicles.
- [Romi project](https://media.romi-project.eu/documents/index.html) - Europe-funded research project
- [ROS Agriculture](https://rosagriculture.org/) - Open Source community focusing on using Robot Operating System to empower farmers with robotics tools.
- [Weedinator](https://hackaday.io/project/53896-weedinator-2019) - Line following weeding robot

## Calculators

- [CoverCalc Pro Landscape Quantity Kit](https://github.com/LydiaTools/covercalcpro-landscape-quantity-kit) - MIT-licensed offline browser checker for landscape volumes and whole-bag counts.
- [Direct Beef Tools](https://github.com/cmhenry79/direct-beef-tools) - Browser-only worksheet for comparing another-sale net value with direct-to-customer beef break-even and target prices.
- [farm-calculators](https://github.com/brycejohnston/farm-calculators) - WordPress plugin for calculating various farming and crop related information.
- [flower-farm-math](https://github.com/SaschaHeyer/flower-farm-math) - Zero-dependency JavaScript library for flower farm and farmer-florist math: wedding stem counts, costs-up CSA bouquet pricing, and a bloom-to-sales weekly reconciliation of stems cut vs. promised by variety.
- [mycro-grow](https://github.com/SaschaHeyer/mycro-grow) - JavaScript library and CLI for gourmet mushroom cultivation math: substrate hydration, spawn ratio, biological-efficiency yield, and batch economics.
- [yard-material-coverage-data](https://github.com/demi-valerith/yard-material-coverage-data) - Open landscape material coverage, density, and bag conversion data with a reusable calculator component.

## Climate, Environment and Weather

- [agroclimatology](https://github.com/brycejohnston/agroclimatology) - Ruby client for interacting with the NASA (POWER) Agroclimatology Web Resource.
- [evapotranspiration](https://github.com/brycejohnston/evapotranspiration) - Ruby library for calculating reference crop evapotranspiration (ETo).
- [frostline](https://github.com/waldoj/frostline) - A dataset, API, and python parser for USDA plant hardiness zones.
- [GSODR](https://github.com/ropensci/GSODR) - Global summary daily weather data in R.
- [iem](https://github.com/akrherz/iem) - Code that makes the Iowa Environmental Mesonet run.
- [PyETo](https://github.com/woodcrafty/PyETo) - Python package for calculating reference/potential evapotranspiration (ETo).
- [pyTSEB](https://github.com/hectornieto/pyTSEB) - A python two source energy balance model for estimation of evapotranspiration with remote sensing data.
- [soilDB](https://github.com/ncss-tech/soilDB) - R library for simplified access to NCSS soil databases.

## Crop Modeling, Phenotyping, and Pathology

- [Open Plant Pathology](https://openplantpathology.netlify.app/) - A community that values open data and computational tools for advancing epidemiology and pathogen population biology and ecology.

## Datasets

### Research and General Data

Research datasets and collections with broad agricultural applications.

- [Agriculture Datasets Collection](https://lacunafund.org/datasets/agriculture/) - Curated collection of machine learning datasets specifically designed to address food security challenges in developing regions.
- [CEAOD](https://ceaod.github.io/) - Controlled Environment Agriculture Open Data repository providing standardized datasets for greenhouse and indoor farming research with data analysis tools.
- [CropHarvest](https://github.com/nasaharvest/cropharvest) - Open source remote sensing dataset for global crop type mapping with 95,186 labeled datapoints from satellite imagery, supporting machine learning research for food security.
- [CWFID](https://github.com/cwfid/dataset) - Dataset comprising field images, vegetation segmentation masks and crop/weed plant type annotations.
- [FAO/NASA Harvest Crop Type Dataset](https://data.harvestportal.org/dataset/fao-bha-nasa-harvest-public-crop-type-datasets) - Ground truth crop type observations dataset with geolocated field data for validation and training of cropland classification models.
- [Furrow](https://furrow.land/farmland-price-index) - Farmland prices in 37 countries on 6 continents from national statistics.
- [Growstuff](https://www.growstuff.org/crops) - Record keeping & crop database, nice API
- [PlantVillage](https://www.kaggle.com/datasets/emmarex/plantdisease) - Dataset containing leaf images of healthy and diseased plants, covering 38 disease classes across 14 different crops.
- [Robot Lawn Mower Specs](https://yumaheymans.github.io/robot-lawn-mower-specs/) - CC BY 4.0 dataset of robotic mower specifications with cited sources and CSV/JSON downloads.
- [SoybeanYield](https://github.com/saeedkhaki92/CNN-RNN-Yield-Prediction) - A multimodal agricultural dataset for soybean yield forecasting, integrating yield performance, management practices, weather data, and soil parameters.
- [TERRA REF](https://terraref.org) - 1PB public domain high resolution sensor data from sorghum breeding trials ([data publication](https://doi.org/10.5061/dryad.4b8gtht99) with large files available on [globus.org at ncsa#terra-public](https://app.globus.org/file-manager?origin_id=e8feaff4-96cd-11ea-bf90-0e6cccbb0103&origin_path=%2F))

### Regional Data

Country and location-specific reference data for markets, land records, and growing conditions.

#### India

- [India Agri Export Price Index](https://nidhi-bhai.github.io/india-agri-export-prices/) - Weekly reference prices for Indian agri exports (USD/kg from UN Comtrade, INR/quintal mandi prices from Agmarknet) with sources, an append-only history and CSV/JSON downloads.
- [India Land Data](https://github.com/Vyzma-AI/india-land-data) - Official land-record portals for 11 Indian states and Indian land area units (gunta, bigha, kanal and others) with state variations, as CC BY 4.0 JSON.
- [VarshaKrishi Field NDVI](https://www.varshakrishi.com/open-data) - One year of Sentinel-2 NDVI for a farm field near Katol, India, with field-level cloud and haze flags (CC BY 4.0, CSV/JSON).

#### United States

- [massachusetts-frost-dates-zones](https://github.com/sackio/massachusetts-frost-dates-zones) - CC BY 4.0 CSV datasets of Massachusetts frost dates from NOAA normals and USDA hardiness zones for towns and villages.
- [US Farmers Market Statistics](https://harvestlymarkets.com/farmers-market-statistics/) - USDA-derived state-by-state farmers market counts and SNAP/EBT and organic-vendor statistics, with CC BY 4.0 CSV/JSON downloads.
- [USDA Market Prices](https://juantorresmi.github.io/usda-market-prices/) - Daily USDA boxed beef, pork and fed cattle prices by cut and region, with history since 2020 and free CSV downloads, in English and Spanish.

## Data Standardization, Interoperability and APIs

- [AgGateway’s ADAPT Toolkit](https://adaptframework.org) - Open Source project providing tools to simplify communication between growers, their machines, and their partners.
- [Agro GPS MCP](https://github.com/TheHiddenPandaDev/agro_gps_mcp) - MCP server exposing the official plant protection product registers of 30 European countries (authorisation status, active substances, authorised uses per crop) to AI assistants; free, no key.
- [Agstack](https://github.com/agstack) - Open-Source Digital Infrastructure for the Agriculture Ecosystem.
- [API-Code-Samples](https://github.com/aWhereAPI/API-Code-Samples) - Contains aWhere's API platform code samples.
- [Botanica](https://github.com/Michael-A-Kuykendall/botanica) - Production-ready Rust crate for professional botanical data management with taxonomic hierarchy, cultivation tracking, and Darwin Core compliance.
- [ClearAg API Examples](https://github.com/DTNClearAg/clearag_api_examples) - A collection of code examples using the ClearAg APIs.
- [Fiware AgriFood](https://www.fiware.org/community/smart-agrifood/) - Open Source data standards and IoT framework that help connect farm systems and enable practical smart farming and agrifood solutions—part of the larger Fiware.org project.
- [ISO-15143-3-API-OAuth2-CSharp-Example](https://github.com/JohnDeere/ISO-15143-3-API-OAuth2-CSharp-Example) - C# example for the John Deere ISO 15143-3 machine data API.
- [Open Ag Data Alliance](https://github.com/oada) - OADA is an open project designed to bring interoperability, security, and privacy to agricultural data.
- [Open Agri Common Semantic Model (OCSM)](https://github.com/agstack/OpenAgri-OCSM) - Ontology reusing existing standards to support semantic interoperability across smart farming solutions.
- [Open-Agriculture](https://github.com/Open-Agriculture) - Free and open source ISOBUS (ISO 11783) tools, including the AgIsoStack++ library, a Virtual Terminal, a DDOP editor and a VT object pool designer.
- [OpenTeam](https://openteam.community/) - Open Technology Ecosystem for Agricultural Management
- [OperationsCenterAPI-OAuth2-Java-Example](https://github.com/JohnDeere/OperationsCenterAPI-OAuth2-Java-Example) - Java example for the John Deere Operations Center API.
- [OperationsCenterAPI-OAuth2-NodeJS-Example](https://github.com/JohnDeere/OperationsCenterAPI-OAuth2-NodeJS-Example) - Node.js example for the John Deere Operations Center API.
- [OperationsCenterAPI-OAuth2-Python-Example](https://github.com/JohnDeere/OperationsCenterAPI-OAuth2-Python-Example) - Python example for the John Deere Operations Center API.
- [SampleData](https://github.com/JohnDeere/SampleData) - Sample datacards, shapefiles, and other files you can use for testing.
- [SencropAPI-JavaScript-Client](https://github.com/sencrop/sencrop-js-api-client) - Sencrop API Javascript client implementation. Read and manage Sencrop weather stations.
- [Tilth](https://www.tilth.uk/data) - Free daily UK fertiliser price index API for nine grades, CC BY 4.0 licensed.

## Farm Management Systems and Record Keeping

- [Ekylibre](https://github.com/ekylibre/ekylibre) - Farm management information system for farmers and small enterprises built with Ruby on Rails and PostgreSQL/PostGIS.
- [farmOS](https://github.com/farmOS/farmOS) - Web-based farm record keeping application built with Drupal and PHP.
- [GrowerHub](https://github.com/aspinozaxxx-lab/growerhub) - Greenhouse and small-farm management with Zigbee2MQTT monitoring, plant and watering journals, and lighting and irrigation automation.
- [GrowGood](https://gitlab.com/growgood) - GrowGood is an open-source farm management platform using open standards like ValueFlows and JSON-LD to help track and share interoperable data across agricultural operations and marketplaces.
- [LiteFarm](https://github.com/LiteFarmOrg/LiteFarm) - LiteFarm is the world’s first community-led, not-for-profit, Farm management system
- [Soil Mate](https://github.com/Open-Source-Agriculture/soil_logr) - Helper app designed to assist the collection of soil data.
- [Tania](https://github.com/usetania/tania-core) - Free and open source farming management system for everyone built with Go and Vue.js.

## Geospatial and GIS

### GIS Resources

- [Awesome GIS](https://github.com/sshuair/awesome-gis) - Awesome GIS is a list collecting abundant GIS related sources.

### GIS Platforms

- [AI Segmentation by TerraLab](https://github.com/TerraLabAI/QGIS_AI-Segmentation) - QGIS imagery segmentation plugin with local interactive processing and optional hosted processing with free-tier limits.
- [QGIS](https://qgis.org) - QGIS is a free, open source, cross platform (lin/win/mac) geographical information system.

### Shapefiles

- [pyshp](https://github.com/GeospatialPython/pyshp) - Reads and writes ESRI Shapefiles in pure Python.
- [rgeo-shapefile](https://github.com/rgeo/rgeo-shapefile) - RGeo Shapefile is an optional module for RGeo for reading geospatial data from ESRI shapefiles in Ruby.

## IoT, Hardware

- [AgOpenGPS](https://github.com/AgOpenGPS-Official/AgOpenGPS) - Ag precision mapping and section control software.
- [Farm Hack](https://farmhack.org/tools) - Worldwide community of farmers that build and modify our own tools.
- [Farm-Data-Relay-System](https://github.com/timmbogner/Farm-Data-Relay-System) - System using ESP-NOW, LoRa, and other protocols to transport sensor data in remote areas without relying on WiFi.
- [Open Agriculture Foundation](https://github.com/OpenAgricultureFoundation) -  Open Source ecosystem of technologies that enable and promote transparency, networked experimentation, education, and hyper-local production.
- [Open hydroponics](https://openhydroponics.com/) - Fully Automated Hydroponic OS
- [OpenMinder](https://github.com/autogrow/openminder) - Open Source Rootzone Monitoring, API and open source hat for the RaspberryPi.
- [OpenWeedLocator](https://github.com/geezacoleman/OpenWeedLocator) - Open Source, low-cost, image-based weed detection device for in-crop and fallow scenarios.
- [Simplesteer](https://github.com/matmis/simplesteer) - RTK GPS tractor autosteer system with a web interface that you can control with a smartphone and can run on a Raspberry Pi.
- [Smart Farming Thingsboard](https://github.com/arifulmrislam/Smart-farming-dashboard-with-ThingsBoard) - a demo smart farming project using ThingsBoard to collect sensor data and display it on real-time agricultural dashboards.

## Knowledgebases and Learning Resources

- [Harvest Helper](https://github.com/damwhit/harvest_helper) -  Provides growing, harvesting and recipe information for the 45 plants in the database as well as a JSON API.
- [OpenFarm](https://github.com/openfarmcc/OpenFarm) - A free and open database for farming and gardening knowledge built with Ruby on Rails.

## Machine Learning and AI
- [AgML](https://github.com/Project-AgML/AgML) - Centralized framework for agricultural machine learning.
- [agridat](https://github.com/kwstat/agridat) - R package providing an extensive collection of datasets from agricultural experiments.
- [Crop Yield Prediction](https://github.com/JiaxuanYou/crop_yield_prediction) - Deep gaussian process for crop yield prediction based on remote sensing data.
- [Deep Learning for Biologists with Keras](https://github.com/totti0223/deep_learning_for_biologists_with_keras) - Tutorials for deep learning based analysis (mainly) on biological relavent themes.
- [FarmVibes.AI](https://github.com/microsoft/farmvibes-ai) - Multi-Modal GeoSpatial ML Models for Agriculture and Sustainability.
- [HealthyCropping](https://github.com/keylorpineda/healthycropping) - Android crop disease diagnosis application in development, using on-device computer vision for offline use.
- [PlantCV](https://github.com/danforthcenter/plantcv) - Plant phenotyping software using computer vision.

## Remote Sensing and Imagery

- [Awesome Sentinel](https://github.com/kr-stn/awesome-sentinel) - A curated list of awesome tools, tutorials and APIs related to data from the Copernicus Sentinel Satellites.
- [Awesome Vegetation Index](https://github.com/px39n/Awesome-Vegetation-Index) - List of reference, applications of common Vegetation Indices for Multi-spectral, hyper-spectral and UAV images.
- [Raster Vision](https://github.com/azavea/raster-vision) - Deep learning for aerial/satellite imagery.
- [Sen2Agri](https://github.com/Sen2Agri/Sen2Agri-System) - Software system processing high resolution satellite images for agricultural purposes.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Bryce Johnston](https://github.com/brycejohnston) has waived all copyright and related or neighboring rights to this work.

