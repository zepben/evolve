import React, {FunctionComponent} from "react";
import Showcase from "../../components/showcase";

const Ui: FunctionComponent = () => {
    return (
        <Showcase
            title={"Docs"}
            description={"Documentation for components of the Evolve platform"}
            items={[
                {
                    title: "Evolve JVM SDK",
                    description:
                        "Java / Kotlin JVM implementation of the Evolve CIM profile and related tools for working with data models. " +
                        "Also contains interfaces for communicating with the Energy Workbench Network Server.", 
                    siteRelUrl: "jvm-sdk",
                    repoUrl: "https://github.com/zepben/evolve-sdk-jvm",
                    type: "SDKs",
                },
                {
                    title: "Evolve Python SDK",
                    description:
                        "Python implementation of the Evolve CIM profile and related tools for working with data models. " +
                        "Also contains interfaces for communicating with the Energy Workbench Network Server.", 
                    siteRelUrl: "python-sdk",
                    repoUrl: "https://github.com/zepben/evolve-sdk-python",
                    type: "SDKs",
                },
                {
                    title: "Energy Workbench Server",
                    description:
                        "Data server for energy networks built on top of the Evolve SDK.",
                    repoUrl: "https://github.com/zepben/energy-workbench-server",
                    siteRelUrl: "energy-workbench-server",
                    type: "Servers",
                },
                {
                    title: "Energy Network Server",
                    description:
                        "Cut down version of the Energy Workbench server to provide only network models and related functions.",
                    repoUrl: "https://github.com/zepben/ewb-network-server",
                    siteRelUrl: "network-server",
                    type: "Servers",
                },
                {
                    title: "PoF Historian Server",
                    description:
                        "REST-like API access to PowerOn Fusion historical analog data.",
                    siteRelUrl: "pof-historian",
                    type: "Servers",
                },
                {
                    title: "Evolve App Server",
                    description:
                    "Server that provides authentication, user data, and other app data to an Evolve client, while acting as a gateway for other evolve services",
                    siteRelUrl: "evolve-app-server",
                    type: "Servers",
                },
                {
                    title: "Energy Workbench Web Client",
                    description:
                        "Web app to view load profiles, load analysis and geographic views of the network hosted by the Energy Workbench.",
                    siteRelUrl: "ewb-web-client",
                    type: "User Interface",
                },
                {
                    title: "PoF Network Extractor",
                    description:
                        "PowerOn Fusion DMS adapter to extract network models into the Energy Workbench Server format.",
                    siteRelUrl: "pof-network-extractor",
                    type: "Migrators",
                },
                {
                    title: "GIS Network Extractor",
                    description:
                        "GIS adapter to extract network models into the Energy Workbench Server format.",
                    siteRelUrl: "gis-network-extractor",
                    type: "Migrators",
                },
                {
                    title: "Load Aggregator",
                    description:
                        "Data processor to perform aggregations of energy usage to distribution transformers.",
                    siteRelUrl: "load-aggregator",
                    type: "Data Processors",
                },
                {
                    title: "Load Processor",
                    description:
                        "Data processor to process CSV meter energy usage records and create a time series database.",
                    siteRelUrl: "load-processor",
                    type: "Data Processors",
                },
                {
                    title: "Weather Processor",
                    description:
                        "Data processor to process CSV weather data and create a database.",
                    siteRelUrl: "weather-processor",
                    type: "Data Processors",
                },
                {
                    title: "Energy Workbench Bundle",
                    description:
                        "A bundle that contains all the tools with compatible versions needed to setup a workbench.",
                    siteRelUrl: "ewb-bundle",
                    type: "Bundles"
                },
                {
                    title: "Evolve Profile",
                    description:
                        "Evolve profile of the CIM data model.",
                    siteRelUrl: "cim/evolve",
                    type: "Data Models",
                },
                {
                    title: "CIM100 Data Model",
                    description:
                        "CIM100 data model.",
                    siteRelUrl: "cim/cim100",
                    type: "Data Models"
                },
                {
                    title: "IEEE 2030.5 Data Model",
                    description:
                        "The complete IEEE 2030.5 data model.",
                    siteRelUrl: "2030-5",
                    type: "Data Models"
                },
                {
                    title: "Feeder Load Analysis",
                    description:
                        "Runs load analysis of feeder segments on network models provided by the Energy Workbench.",
                    siteRelUrl: "feeder-load-analysis",
                    type: "Tools"
                },
                {
                    title: "SINCAL Exporter",
                    description:
                        "Exporter to create SINCAL models from the network models provided by the Energy Workbench.",
                    siteRelUrl: "sincal-exporter",
                    type: "SINCAL"
                },
                {
                    title: "SINCAL Smart Load Plugin",
                    description:
                        "SINCAL plugin that provides load data from the Energy Workbench when running load flow studies.",
                    siteRelUrl: "smart-load-plugin",
                    type: "SINCAL"
                },
            ]}
        />
    );
};

export default Ui;
