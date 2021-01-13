# Evolve
A repo to capture/manage common issues, discussions and tasks between evolve components.

### Links to primary Evolve repositories

- [evolve-sdk-jvm](https://github.com/zepben/evolve-sdk-jvm)
- [evolve-conn-jvm](https://github.com/zepben/evolve-conn-jvm)
- [evolve-grpc](https://github.com/zepben/evolve-grpc)
- [cimcap](https://github.com/zepben/cimcap)
- [energy-workbench-server](https://github.com/zepben/energy-workbench-server)
- [ewb-network-server](https://github.com/zepben/ewb-network-server)
- [cimbend-data-model](https://github.com/zepben/cimbend-data-model)

### Updating Algolia search index

Updating the search index for the zepben docs requires a [docker](https://www.docker.com) setup and two input files: 
1. Search crawler config. For more info about the config, refer to this [link](https://docsearch.algolia.com/docs/config-file/).
1. Env file which defines the application id and the api key used to update the index

To run the crawler you will need to run the following docker command
```
docker run -it --env-file=.env -e "CONFIG=$(cat ./search-config.json | jq -r tostring)" algolia/docsearch-scraper
```

For more info about running the crawler refer to this [link](https://docsearch.algolia.com/docs/run-your-own).

### Adding product links
Adding links to products/services requires updating the algolia search config with links to product documentation sitemaps.
An entry needs to be added to the `sitemap_urls` in the [config](./search-config.json) file.