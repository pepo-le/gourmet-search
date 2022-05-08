<template>
  <v-ons-navigator
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
    swipeable
  ></v-ons-navigator>
</template>

<script>
import SearchForm from './components/SearchForm'

export default {
  name: 'app',

  components: {
    SearchForm
  },

  data () {
    return {
      pageStack: [SearchForm]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
