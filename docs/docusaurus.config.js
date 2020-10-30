module.exports = {
    title: "Evolve",
    tagline: "Improved visibility of your electricity network",
    url: "https://zepben.github.io/evolve",
    baseUrl: "/evolve/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "zepben",
    projectName: "evolve",
    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            logo: {
                alt: "Zepben",
                src: "img/logo.svg",
                srcDark: "img/logo-dark.svg",
                href: "https://www.zepben.com/",
            },
            items: [
                {
                    to: "/",
                    activeBasePath: "/",
                    label: "Home",
                    position: "left",
                },
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/zepben/evolve/",
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Zeppelin Bend Pty. Ltd.`,
        },
        googleAnalytics: {
            trackingID: "UA-81287323-1",
            anonymizeIP: false,
        },
        algolia: {
            apiKey: "bd9b85d42d37ebf66b352f07513f4d6a",
            indexName: "evolve-docs",
            appId: "IU0L20J0JX"
        },
    },
    presets: [
        [
            "@zepben/docusaurus-preset",
            {
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
