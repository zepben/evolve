import React, {FunctionComponent} from "react";
import Showcase from "../../components/showcase";

const Ui: FunctionComponent = () => {
    return (
        <Showcase
            title={"Docs"}
            description={"Documentation and guides for Evolve Productss and SDKss"}
            items={[
                {
                    title: "Evolve JVM",
                    description:
                        "The JVM SDK to communicate with the Energy Workbench Server",
                    siteRelUrl: "evolve-sdk-jvm",
                    repoUrl: "https://github.com/zepben/evolve-sdk-jvm",
                    type: "SDKs",
                },
                {
                    title: "Evolve C#",
                    description:
                        "C# SDK to communicate with the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/evolve-sdk-c#",
                    type: "SDKs",
                },
                {
                    title: "Evolve Python",
                    description:
                        "Python SDK to communicate with the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/evolve-sdk-py",
                    type: "SDKs",
                },
                {
                    title: "Energy Workbench Server",
                    description:
                        "Data platform for energy networks based on the Common Information Model. ",
                    repoUrl: "https://github.com/zepben/energy-workbench-server",
                    apiUrl: "ewb/api",
                    type: "Products",
                },
                {
                    title: "PoF Extractor",
                    description:
                        "PoF DMS adapter to extract network into a format consumable by the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/pof-extractor",
                    type: "Products",
                },
                {
                    title: "GIS Extractor",
                    description:
                        "GIS adapter to extract network into a format consumable by the Energy Workbench Server",
                    repoUrl: "https://github.com/zepben/gis-extractor",
                    type: "Products",
                },
                {
                    title: "EDNAR",
                    description:
                        "Application to support planner network access request workflow for distribution networks",
                    type: "Products",
                },
                {
                    title: "Planner Toolbox",
                    description:
                        "Provides tools for planning engineers to understand load patterns in the networks, build modes for load flow and fault level analysis for SINCAL and pandapower",
                    type: "Products",
                },
                {
                    title: "LASARUS",
                    description:
                        "GIS - ADMS Data synchronization and reconciliation",
                    type: "Products",
                },
            ]}
        />
    );
};

export default Ui;
