const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

const IconResolver = require('unplugin-icons/resolver')
const Icons  =require('unplugin-icons/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconResolver({
            prefix:'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconResolver({
            enabledCollections:['ep'],
          })
        ],
      }),
      Icons({
        autoInstall:true,
      }),
    ]
  }
})