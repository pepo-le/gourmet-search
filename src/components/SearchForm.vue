<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Search</div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <label style="margin-right: 1rem;">キーワード：</label>
          <v-ons-search-input v-model="shopKeyword" @keydown.enter="fetchShopList"></v-ons-search-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <label style="margin-right: 1rem;">所在地：</label>
          <v-ons-search-input v-model="shopAddress" @keydown.enter="fetchShopList"></v-ons-search-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <label style="margin-right: 1rem;">予算：</label>
          <v-ons-select v-model="budget">
            <option></option>
            <option v-for="item in budgetList" :value="item.code" :key="item.code">
              {{ item.name }}
            </option>
          </v-ons-select>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-button @click="fetchShopList">検索</v-ons-button>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-modal :visible="isFetching">
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        wait
      </p>
    </v-ons-modal>

    <v-ons-toast :visible.sync="isToastVisible" animation="ascend">
      お店が見つかりませんでした
    </v-ons-toast>

    <ShopList v-on:shopClick="pushShopPage"/>
  </v-ons-page>
</template>

<script>
import { mapState } from 'vuex'
import Shop from './Shop'
import ShopList from './ShopList'

export default {
  data () {
    return {
      shopKeyword: '',
      shopAddress: '',
      budget: ''
    }
  },
  components: {
    ShopList
  },
  computed: {
    ...mapState(['isFetching', 'isToastVisible', 'budgetList'])
  },
  methods: {
    pushShopPage () {
      this.$emit('push-page', Shop)
    },
    fetchShopList () {
      const payload = {
        shopKeyword: this.shopKeyword,
        shopAddress: this.shopAddress,
        budget: this.budget
      }
      this.$store.dispatch('getShopList', payload)
    }
  },
  mounted: function () {
    this.$store.dispatch('getBudgetList')
  }
}
</script>
