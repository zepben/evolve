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
                    type: "SDK",
                },
                {
                    title: "Evolve C#",
                    description:
                        "C# SDK to communicate with the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/evolve-sdk-c#",
                    type: "SDK",
                },
                {
                    title: "Evolve Python",
                    description:
                        "Python SDK to communicate with the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/evolve-sdk-py",
                    type: "SDK",
                },
                {
                    title: "Energy Workbench Server",
                    description:
                        "Data platform for energy networks based on the Common Information Model. ",
                    repoUrl: "https://github.com/zepben/energy-workbench-server",
                    siteRelUrl: "energy-workbench-server",
                    apiUrl: "energy-workbench-server/api",
                    type: "Server",
                },
                {
                    title: "Energy Network Server",
                    description:
                        "Headless network server",
                    repoUrl: "https://github.com/zepben/ewb-network-server",
                    siteRelUrl: "network-server",
                    apiUrl: "network-server/api",
                    type: "Server",
                },
                {
                    title: "PoF Extractor",
                    description:
                        "PoF DMS adapter to extract network into a format consumable by the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/pof-extractor",
                    siteRelUrl: "pof-extractor",
                    type: "Extractor",
                },
                {
                    title: "GIS Extractor",
                    description:
                        "GIS adapter to extract network into a format consumable by the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/gis-extractor",
                    siteRelUrl: "gis-extractor",
                    type: "Extractor",
                },
                {
                    title: "Evolve Profile",
                    description:
                        "Evolve profile of the CIM data model",
                    siteRelUrl: "cim/Evolve",
                    type: "Data Model",
                },
                {
                    title: "CIM Profile",
                    description:
                        "CIM100 profile of the CIM data model",
                    siteRelUrl: "cim/Model",
                    type: "Data Model"
                },
            ]}
        />
    );
};

export default Ui;
