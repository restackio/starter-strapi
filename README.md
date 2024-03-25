# starter-strapi

Starter repository to deploy Strapi with Restack on your cloud.

## About Restack

[Restack](https://www.restack.io/) is the platform to run your favorite open source products: Build your custom image, scale cost-efficiently with no downtime and upgrade seamlessly to the latest release.

## Features

This starter repository includes:

* Initial [structure](https://docs.strapi.io/dev-docs/project-structure) for building Strapi project.
* Sample strapi configuration.
* Dockerfile to build an image ready for deployment on Restack

## Getting started

Open Strapi application page on Restack and set up `Build custom image with GitHub`:

![Build custom image with GitHub screenshot](/docs/img/build-image-setup.png)

After deployment you need to register admin account. Visit this url:

```
https://{{ restack_application_hostname }}/admin
```

where `{{ restack_application_hostname }}` is a host name assigned to Strapi application by Restack.

### Configuration

Configuration files are located under directory `./config` in this repository.

See official documentation how to configure Strapi: https://docs.strapi.io/dev-docs/configurations

### Strapi version

Strapi version is specified in `package.json` file. Find `@strapi/strapi` field under `dependencies`:
```
"@strapi/strapi": "4.20.5",
```

Specifying custom version here may also require updating versions of other Strapi components listed under `@strapi/` namespace.
