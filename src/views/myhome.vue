<template >
  <div>
    <Banner ref="myBanner" :imgs="bannerListImgs" v-if="bannerListImgs.length > 0" />
  </div>
</template>
<script>
import banner from '../components/banner'
export default {
  name: 'myhome',

  components: {
    banner
  },

  computed: {

  },
  data () {
    return {

    }
  }

}
</script>
