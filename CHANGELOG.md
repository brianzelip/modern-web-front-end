# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.10.0] - 2019-06-15

### Meta

- branch: real-grid

### TODO

- src/components/Resources/\*.vue: create components for each of the 6 swapi resources; each resource renders different attributes, so that's why there are 6 components -- it was just easier/quicker this way.
- TheDataGrid.vue: use dynamic components to render whichever resource type the user selects
- models/resources.js: Notes to help think about what and how to render from swapi data

## [0.9.0] - 2019-06-05

### Meta

- branch: star-wars-crawl

### Added

- TheStarWarsCrawl.vue: Adapt code from the excellent [StarWarsIntro.css](https://polarnotion.github.io/starwarsintro/)
- App.vue: Render TheStarWarsCrawl in place of TheUserInstructions - maybe make this a little easter egg in the workshop, ie: have the crawl component in the file system, but star with the normal instructions first. then show how to load up a component, and see the change
- TheHeader.vue: Make site name a link to reload the page

## [0.8.0] - 2019-06-05

### Meta

- branch: user-instructions

### Added

- TheUserInstructions.vue
- App.vue: Render TheUserInstructions.vue conditionally

## [0.7.0] - 2019-06-05

### Meta

- branch: loading-spinner

### Added

- TheLoadingSpinner.vue: via [W3C loader demo](https://www.w3schools.com/howto/howto_css_loader.asp)
- App.vue:
  - Render TheLoadingSpinner component
  - Refactor use of .flex-push for sticky footer and spinner rendered closer to the center of the screen
  - Refactor layout of TheFooter
- TheFooter.vue: Refactor styles to keep it semantic and yet fight back against how display:flex ignores white space characters but not non-breaking space html entity

## [0.6.1] - 2019-06-04

### Meta

- branch: flex-item-data-grid-width

### Added

- TheDataGrid.vue: max-width of 100% via `.col-12` to force the size of the flex item

## [0.6.0] - 2019-06-03

### Meta

- branch: add-footer

### Added

- src/components/TheFooter.vue: Add links to remote sources and deployments
- main.css: Add styles
- App.vue: Abstract the particular styles related to component layout into this parent component; this separates the layout-agnostic component from the app's layout design, thus allowing the developer to deal with the overall layout in one file view (App.vue), and deal with the more micro component layouts via each component. ie:

```html
<!-- old App.vue template -->
<template lang="pug">
  div#app
    TheHeader(v-on:resource-update="getData")
    TheDataGrid(resourceTitle="resourceTitle" :swapiData="swapiPayload.results")
    TheFooter
</template>
```

```html
<!-- new App.vue template -->
<template lang="pug">
  div#app.vh100
    TheHeader(v-on:resource-update="getData")
    TheDataGrid(class="flex-grow" :resourceTitle="resourceTitle" :swapiData="swapiPayload.results")
    TheFooter.pb2
</template>
```

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
