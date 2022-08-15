# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.29](https://github.com/snickbit/quasar-plugins/compare/@snickbit/quasar@0.2.28...@snickbit/quasar@0.2.29) (2022-08-15)

### Bug Fixes

* add ts-expect-error for unaugmentation redeclare ([4be7e12](https://github.com/snickbit/quasar-plugins/commit/4be7e120b5e97e5fd43448a6acff9b39a6a0f59f))
* export umd instead of cjs ([a585cae](https://github.com/snickbit/quasar-plugins/commit/a585caef3e74b6979e9d1e11819c867656c01c9f))
* simplify component registration ([e38b290](https://github.com/snickbit/quasar-plugins/commit/e38b2907a364f2a065c4f71eacfb46b26b7af63d))

## [0.2.28](https://github.com/snickbit/quasar-plugins/compare/@snickbit/quasar@0.2.27...@snickbit/quasar@0.2.28) (2022-08-15)

### Bug Fixes

* build dts with vite-plugin-dts ([#17](https://github.com/snickbit/quasar-plugins/issues/17)) ([507bbc0](https://github.com/snickbit/quasar-plugins/commit/507bbc00980d54564c619f919a9bb1203d1ae577))
* **currency-input:** make compatible with vue-currency-input@3.0.0 ([fac7e4c](https://github.com/snickbit/quasar-plugins/commit/fac7e4cdaff2a2a0052493ed6fd4397210548c52))
* **deps:** update dependency vue-currency-input to v3 ([#8](https://github.com/snickbit/quasar-plugins/issues/8)) ([ad1179c](https://github.com/snickbit/quasar-plugins/commit/ad1179c297af44de178050c94d796ea8ba6f13c2))

# @snickbit/quasar Changelog

## 0.2.17

### Patch Changes

- [8a493d0](https://github.com/snickbit/quasar/commit/8a493d0) **chore**:  update dependencies
- [618985d](https://github.com/snickbit/quasar/commit/618985d) **chore**:  add missing peer dependencies
- [75c6b3a](https://github.com/snickbit/quasar/commit/75c6b3a) **build**:  add source maps
- [2c365e2](https://github.com/snickbit/quasar/commit/2c365e2) **build**:  add type declarations to dist
- [599d1c5](https://github.com/snickbit/quasar/commit/599d1c5) **fix**:  add missing type prop
- [a1659dd](https://github.com/snickbit/quasar/commit/a1659dd) **fix**:  convert to typescript format
- [8652e74](https://github.com/snickbit/quasar/commit/8652e74) **refactor**:  add ElementAnchor type definition
- [da899e7](https://github.com/snickbit/quasar/commit/da899e7) **fix**:  define required modelValue
- [60b7417](https://github.com/snickbit/quasar/commit/60b7417) **fix**:  table grid title should expect falsy-able value prop
- [3a59c8a](https://github.com/snickbit/quasar/commit/3a59c8a) **fix**:  getTitle should always return an object
- [14c1b81](https://github.com/snickbit/quasar/commit/14c1b81) **fix**:  pagination total should come from table object, not scope
- [daba82b](https://github.com/snickbit/quasar/commit/daba82b) **fix**:  declare private quasar composable
- [acdff98](https://github.com/snickbit/quasar/commit/acdff98) **fix**:  ensure components var is defined
- [d8b1c61](https://github.com/snickbit/quasar/commit/d8b1c61) **refactor**:  migrate to typescript

## 0.2.16

### Patch Changes

- [e696205](https://github.com/snickbit/quasar/commit/e696205) **fix**:  migrate to @snickbit/indexer
- [e8343c9](https://github.com/snickbit/quasar/commit/e8343c9) **chore**:  bump dependencies
- [e3601f9](https://github.com/snickbit/quasar/commit/e3601f9) **chore**:  bump dependencies

## 0.2.10

### Patch Changes

- [cad6bbc](https://github.com/snickbit/quasar/commit/cad6bbc) **chore**:  update dependencies

## 0.2.9

### Patch Changes

- [76aa66c](https://github.com/snickbit/quasar/commit/76aa66c) **feat**:  add error dialog
- [db0a168](https://github.com/snickbit/quasar/commit/db0a168) **fix**:  fallback for missing field
- [42bacc3](https://github.com/snickbit/quasar/commit/42bacc3) **fix**:  improve STable grid styles
- [b93a2cb](https://github.com/snickbit/quasar/commit/b93a2cb) **fix**:  increase default currency max
- [2cd7ddf](https://github.com/snickbit/quasar/commit/2cd7ddf) **feat**:  add currency input component
- [2a47005](https://github.com/snickbit/quasar/commit/2a47005) **fix**:  replace forEach with for..of loop for performance
- [926377e](https://github.com/snickbit/quasar/commit/926377e) **feat**:  add date input component
- [6376a80](https://github.com/snickbit/quasar/commit/6376a80) **fix**:  STable reactivity
- [55f04b2](https://github.com/snickbit/quasar/commit/55f04b2) **style**:  lint

## 0.2.6

### Patch Changes

- [cacf3d6](https://github.com/snickbit/quasar/commit/cacf3d6) **chore**(release):  publish
- [87d973a](https://github.com/snickbit/quasar/commit/87d973a) **style**:  heavy code restyling
- [95f605a](https://github.com/snickbit/quasar/commit/95f605a) **chore**:  bump indexer version, and rerun
- [30087c3](https://github.com/snickbit/quasar/commit/30087c3) **chore**:  bump indexer version
- [e5bbe56](https://github.com/snickbit/quasar/commit/e5bbe56) **fix**:  set default spacing to md

## 0.2.5

### Patch Changes

- [87d973a](https://github.com/snickbit/quasar/commit/87d973a) **style**:  heavy code restyling
- [95f605a](https://github.com/snickbit/quasar/commit/95f605a) **chore**:  bump indexer version, and rerun
- [30087c3](https://github.com/snickbit/quasar/commit/30087c3) **chore**:  bump indexer version
- [e5bbe56](https://github.com/snickbit/quasar/commit/e5bbe56) **fix**:  set default spacing to md

## 0.2.4

### Patch Changes

- [12a9ccf](https://github.com/snickbit/quasar/commit/12a9ccf) **fix**:  typo

## 0.2.3

### Patch Changes

- [6e4c4be](https://github.com/snickbit/quasar/commit/6e4c4be) **fix**:  adjust default SPage options
- [89ddf50](https://github.com/snickbit/quasar/commit/89ddf50) **refactor**:  move STable
- [7b8cad5](https://github.com/snickbit/quasar/commit/7b8cad5) **chore**:  update indexer config
- [31fefdb](https://github.com/snickbit/quasar/commit/31fefdb) **build**:  enable reactivityTransform option
- [9c29808](https://github.com/snickbit/quasar/commit/9c29808) **fix**:  implement useCopyHelper in SCopy
- [8f01589](https://github.com/snickbit/quasar/commit/8f01589) **refactor**:  restructure ui index
- [bb18fe1](https://github.com/snickbit/quasar/commit/bb18fe1) **refactor**:  move copy helper to composable
- [b1c5f43](https://github.com/snickbit/quasar/commit/b1c5f43) **feat**:  add SSeperator component
- [6a7a95f](https://github.com/snickbit/quasar/commit/6a7a95f) **fix**:  improve STooltip
- [722fa3c](https://github.com/snickbit/quasar/commit/722fa3c) **chore**:  bump dependencies
- [f385a80](https://github.com/snickbit/quasar/commit/f385a80) **fix**:  update indexer, export copyHelper as camelCase
- [41a6aab](https://github.com/snickbit/quasar/commit/41a6aab) **fix**:  add script setup to properly export
- [aacded9](https://github.com/snickbit/quasar/commit/aacded9) **feat**:  add SPage layout
- [afe95f6](https://github.com/snickbit/quasar/commit/afe95f6) **build**:  overhaul build to allow for full installation
- [e5a4e53](https://github.com/snickbit/quasar/commit/e5a4e53) **fix**:  add default export
- [fc5229d](https://github.com/snickbit/quasar/commit/fc5229d) **build**:  add watchable build script for scss variables
- [3cddd1f](https://github.com/snickbit/quasar/commit/3cddd1f) **fix**:  incorrectly named file
- [b211e96](https://github.com/snickbit/quasar/commit/b211e96) **build**:  switch to pnpm
- [84a45f7](https://github.com/snickbit/quasar/commit/84a45f7) **feat**:  add container atomic class

## 0.2.2

### Patch Changes

- [bad67a7](https://github.com/snickbit/quasar/commit/bad67a7) **chore**:  update dependencies
- [8d03325](https://github.com/snickbit/quasar/commit/8d03325) **build**:  remove nx
- [a5f9aa8](https://github.com/snickbit/quasar/commit/a5f9aa8) **style**:  sort package.json
- [8dc5689](https://github.com/snickbit/quasar/commit/8dc5689) **style**:  relint
- [b85cfca](https://github.com/snickbit/quasar/commit/b85cfca) **chore**:  update indexer and indexer config

## 0.2.1

### Patch Changes

- [1b62429](https://github.com/snickbit/quasar/commit/1b62429) **fix**:  remove debugging console logs

## 0.2.0

### Minor Changes

- [d53a429](https://github.com/snickbit/quasar/commit/d53a429) **chore**:  remove deprecated dependency
- [57b8a04](https://github.com/snickbit/quasar/commit/57b8a04) **chore**:  remove unused code
- [de62609](https://github.com/snickbit/quasar/commit/de62609) **refactor**:  rewrite into typescript
- [bd63f58](https://github.com/snickbit/quasar/commit/bd63f58) **build**:  bump indexer, regenerate indexes

## 0.1.48

### Patch Changes

- [fd4cdcf](https://github.com/snickbit/quasar/commit/fd4cdcf) **chore**(dep):  update dependencies
- [79cfafb](https://github.com/snickbit/quasar/commit/79cfafb) **style**:  reformat
- [cbea8fc](https://github.com/snickbit/quasar/commit/cbea8fc) **chore**:  update dependencies

## 0.1.47

### Patch Changes

- [a5ed59c](https://github.com/snickbit/quasar/commit/a5ed59c) **feat**(quasar):  add bg-rainbow
- [dc36beb](https://github.com/snickbit/quasar/commit/dc36beb) **build**:  migrate to nx
- [6d34a0c](https://github.com/snickbit/quasar/commit/6d34a0c) **chore**:  update dependencies

## 0.1.46

### Patch Changes

- [cf4b65f](https://github.com/snickbit/quasar/commit/cf4b65f) **chore**:  minor adjustments

## 0.1.45

### Patch Changes

- [2fe6119](https://github.com/snickbit/quasar/commit/2fe6119) **docs**:  update
- [11a521a](https://github.com/snickbit/quasar/commit/11a521a) **feat**(quasar):  adjust "display" typography styles
