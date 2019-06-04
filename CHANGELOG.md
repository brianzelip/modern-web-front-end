# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.0] - 2019-06-03

### Meta

- branch: add-footer

### Added

- src/components/TheFooter.vue: Add links to remote sources and deployments
- main.css: Add styles

## [0.5.0] - 2019-06-02

### Meta

- branch: glitch

### Added

- App.vue: Update url data prop

## [0.4.0] - 2019-06-02

### Meta

- branch: render-user-selected-swapi-data

### Added

- src/components/\*: custom events from user input starting at TheHeader
- axios dependency
- TheHeader: added form into the markup
- TheHeader: made inputs in markup hidden via `position: absolute` and `opacity: 0`
- TheDataGrid: removes hardcoded data

```
TheHeader.vue --> App.vue --> TheDataGrid.vue
```

### TODO

- later on when thinking about getting images from wikipedia, figure out if getting only the first page of swapi data images is doable and good enough

### Related to another repo

- This requires updating the back end to accept params sent from front end, see [modern-web-back-end/issues/3](https://github.com/brianzelip/modern-web-back-end/issues/3)

## [0.3.0] - 2019-06-01

### Meta

- branch: mockup-list

### Added

- TheDataGrid.vue, which renders out data using CSS Grid, template for loops, component data, and hardcoded mockup data
- TheHeader.vue: hardcoded active state to show connection between the resource type selected by the user and the rendering of that data

## [0.2.0] - 2019-05-31

### Meta

- branch: vue-init

### Added

- scaffold out new vue project
  - vue
  - parcel
  - palette.css
- Sketch out general direction via App and TheHeader components
