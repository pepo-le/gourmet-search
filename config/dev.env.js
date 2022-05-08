'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  RECRUIT_APIURL: '"https://webservice.recruit.co.jp/hotpepper/gourmet/v1/"',
  RECRUIT_BUDGETAPIURL: '"https://webservice.recruit.co.jp/hotpepper/budget/v1/"',
  RECRUIT_APIKEY: '"****************"'
})
