<template>
  <div>订单</div>
</template>
<script>
import request from '../../utils/request'
export default {
  name: 'Money',

  created () {
    request.post('http://localhost:8080/tapi/getorder').then(res => {
      console.log(res)
    })
  }
}
</script>
