import React, {FunctionComponent} from "react";
import Showcase from "../../components/showcase";

const Ui: FunctionComponent = () => {
    return (
        <Showcase
            title={"Docs"}
            description={"Documentation for components of the Evolve platform"}
            items={[
                {
                    title: "Evolve JVM",
                    description:
                        "The JVM SDK to communicate with the Energy Workbench Server",
                    siteRelUrl: "jvm-sdk",
                    repoUrl: "https://github.com/zepben/evolve-sdk-jvm",
                    type: "SDKs",
                },
                {
                    title: "Evolve Python",
                    description:
                        "Python SDK to communicate with the Energy Workbench Server",
                    siteRelUrl: "python-sdk",
                    repoUrl: "https://github.com/zepben/evolve-sdk-python",
                    type: "SDKs",
                },
                {
                    title: "Energy Workbench Server",
                    description:
                        "Data platform for energy networks based on the Common Information Model. ",
                    repoUrl: "https://github.com/zepben/energy-workbench-server",
                    siteRelUrl: "energy-workbench-server",
                    apiUrl: "energy-workbench-server/api",
                    type: "Servers",
                },
                {
                    title: "Energy Network Server",
                    description:
                        "Headless network server",
                    repoUrl: "https://github.com/zepben/ewb-network-server",
                    apiUrl: "network-server/api",
                    type: "Servers",
                },
                {
                    title: "Energy Workbench Web Client",
                    description:
                        "UI Client to view load profiles, load analysis and geographic view of the network",
                    siteRelUrl: "ewb-web-client",
                    type: "User Interface",
                },
                {
                    title: "PoF Network Extractor",
                    description:
                        "PoF DMS adapter to extract network into a format consumable by the Energy Workbench Server",
                    siteRelUrl: "pof-network-extractor",
                    type: "Migrators",
                },
                {
                    title: "GIS Network Extractor",
                    description:
                        "GIS adapter to extract network into a format consumable by the Energy Workbench Server",
                    siteRelUrl: "gis-network-extractor",
                    type: "Migrators",
                },
                {
                    title: "Load Aggregator",
                    description:
                        "Data processor to perform aggregations of energy usage to distribution transformers",
                    siteRelUrl: "load-aggregator",
                    type: "Data Processors",
                },
                {
                    title: "Load Processor",
                    description:
                        "Data processor to process meter energy usage and create a time series database",
                    siteRelUrl: "load-processor",
                    type: "Data Processors",
                },
                {
                    title: "Weather Processor",
                    description:
                        "Data processor to process weather data and create a database",
                    siteRelUrl: "weather-processor",
                    type: "Data Processors",
                },
                {
                    title: "Evolve Profile",
                    description:
                        "Evolve profile of the CIM data model",
                    siteRelUrl: "cim/Evolve",
                    type: "Data Models",
                },
                {
                    title: "CIM Profile",
                    description:
                        "CIM100 profile of the CIM data model",
                    siteRelUrl: "cim/Model",
                    type: "Data Models"
                },
                {
                    title: "SINCAL Exporter",
                    description:
                        "Exporter to create SINCAL models using the network from DMS or GIS",
                    siteRelUrl: "sincal-exporter",
                    type: "SINCAL"
                },
                {
                    title: "Smart Load Database Creator",
                    description:
                        "Converts a GIS export network data model to a SmartLoad enabled model",
                    siteRelUrl: "smart-load-database-creator",
                    type: "SINCAL"
                },
                {
                    title: "Smart Load Plugin",
                    description:
                        "SINCAL plugin to access load data from energy workbench for running load flow studies",
                    siteRelUrl: "smart-load-plugin",
                    type: "SINCAL"
                },
            ]}
        />
    );
};

export default Ui;
