<template>
  <div>
    <v-ons-list>
      <v-ons-list-title>店舗一覧</v-ons-list-title>
      <v-ons-list-item v-for="(shop, index) in shopList" :key="shop.name" @click="shopClick(index)" tappable>
        {{ index }}. {{ shop.name }}
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
export default {
  computed: {
    shopList () {
      return this.$store.state.shopList
    }
  },
  methods: {
    shopClick (index) {
      this.$store.state.shop = this.$store.state.shopList[index]
      this.$emit('shopClick')
    }
  }
}
</script>
