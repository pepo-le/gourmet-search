<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">Shop</div>
    </v-ons-toolbar>

    <v-ons-card>
      <div class="title" style="text-align: center;">{{ shopName }}</div>
      <div style="text-align: center; margin-bottom: 1rem;">
        <img :src="shopImg" :alt="shopName">
      </div>
      <v-ons-list>
        <v-ons-list-header>店舗情報</v-ons-list-header>
        <v-ons-list-item>
          <v-ons-row>
            <v-ons-col width="20%">店舗名</v-ons-col>
            <v-ons-col>{{ shopName }}</v-ons-col>
          </v-ons-row>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-row>
            <v-ons-col width="20%">ジャンル</v-ons-col>
            <v-ons-col>{{ shopGenre }}</v-ons-col>
          </v-ons-row>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-row>
            <v-ons-col width="20%">予算</v-ons-col>
            <v-ons-col>{{ shopBudget }}</v-ons-col>
          </v-ons-row>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-row>
            <v-ons-col width="20%">PR</v-ons-col>
            <v-ons-col>{{ shopCatch }}</v-ons-col>
          </v-ons-row>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-row>
            <v-ons-col width="20%">住所</v-ons-col>
            <v-ons-col>{{ shopAddress }}</v-ons-col>
          </v-ons-row>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-card>

  </v-ons-page>
</template>

<script>
export default {
  computed: {
    shopName () {
      return this.$store.state.shop.name
    },
    shopImg () {
      return this.$store.state.shop.photo.pc.l
    },
    shopGenre () {
      return this.$store.state.shop.genre.name
    },
    shopBudget () {
      return this.$store.state.shop.budget.name
    },
    shopCatch () {
      return this.$store.state.shop.catch
    },
    shopAddress () {
      return this.$store.state.shop.address
    }
  }
}
</script>
