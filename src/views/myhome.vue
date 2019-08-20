<template >
  <div>
    <banner ref="myBanner" :imgs="bannerListImgs" v-if="bannerListImgs.length > 0" />
  </div>
</template>
<script>
import banner from '../components/banner'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'myhome',

  components: {
    banner
  },

  computed: {
    ...mapGetters('myhome', ['bannerListImgs']),
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('myhome', ['getBannerList'])
  },
  created () {
    this.getBannerList()

  },

}
</script>
