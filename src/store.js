import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import axiosJsonpAdapter from 'axios-jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    isToastVisible: false,
    shop: {
    },
    shopList: [
    ],
    budgetList: [
    ],
    error: null
  },
  mutations: {
    getShopListRequest (state) {
      state.isFetching = true
    },
    getShopListSuccess (state, shopList) {
      state.isFetching = false
      if (shopList) {
        state.shopList = shopList
      } else {
        // TODO:
        // state.isToastVisible = true
        alert('お店が見つかりませんでした')
      }
    },
    getShopListFailure (state, err) {
      state.isFetching = false
      state.shopList = []
      state.error = err
    },
    getBudgetListSuccess (state, budgetList) {
      state.budgetList = budgetList
    }
  },
  actions: {
    getShopList (context, payload) {
      context.commit('getShopListRequest')

      axios.get(process.env.RECRUIT_APIURL, {
        adapter: axiosJsonpAdapter,
        params: {
          'key': process.env.RECRUIT_APIKEY,
          'format': 'jsonp',
          'count': 30,
          'keyword': payload.shopKeyword,
          'address': payload.shopAddress,
          'budget': payload.budget
        }
      })
      .then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          context.commit('getShopListSuccess', res.data.results.shop)
        }
      })
    },
    getBudgetList (context) {
      axios.get(process.env.RECRUIT_BUDGETAPIURL, {
        adapter: axiosJsonpAdapter,
        params: {
          'key': process.env.RECRUIT_APIKEY,
          'format': 'jsonp'
        }
      })
      .then((res) => {
        if (res.status === 200) {
          context.commit('getBudgetListSuccess', res.data.results.budget)
        }
      })
    }
  }
})
