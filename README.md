# vue-merge-lang

## require npm install
```
npm i --save-dev @kazupon/vue-i18n-loader
```

## Create `vue.config.js` and add this script
```
module.exports = {
    chainWebpack: config => {
      config.module
        .rule("i18n")
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use("i18n")
          .loader("@kazupon/vue-i18n-loader")
          .end();
    }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
