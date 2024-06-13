<template>
    <div ref="scroll" id="scroll-page" style="overflow: hidden">
        <slot></slot>

        <el-table v-loading="loading" style="width: 100%"></el-table>
        <!-- <div
        style="height: 40px;margin-top: 10px;z-index: 1"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(245,245,245)"></div> -->
  </div>
</template>

<script>
export default{
    name:"ScrollPage",
    data(){
        return{
            //坐标
            scrollAction: {
                x: 'undefined',
                y: 'undefined',
            },
        }
    },
    props: {
        loading:Boolean,
        noData:Boolean,
        offset:Number,
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, false);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        //屏幕滚动
      handleScroll(e) {
        var that = this
        if (!that.noData) {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop
          var scrollPage = document.getElementById('scroll-page');

          if ((curHeight + window.innerHeight >= that.$refs.scroll.offsetHeight + that.offset) && that.isDownDirection()) {
            if (!that.loading) {
              that.$emit('load')
            }
          }
        }
      },
      //触底
      isDownDirection() {
        if (typeof this.scrollAction.x == 'undefined') {
          this.scrollAction.x = window.pageXOffset;
          this.scrollAction.y = window.pageYOffset;
        }
        var diffX = this.scrollAction.x - window.pageXOffset;
        var diffY = this.scrollAction.y - window.pageYOffset;

        this.scrollAction.x = window.pageXOffset;
        this.scrollAction.y = window.pageYOffset;

        if (diffX < 0) {
          // Scroll right
        } else if (diffX > 0) {
          // Scroll left
        } else if (diffY < 0) {
          // Scroll down
          return true
        } else if (diffY > 0) {
          // Scroll up
        } else {
          // First scroll event
        }
        return false
      }
    }
}
</script>

<style scoped>
.el-table{
  margin-top: 5px;
  margin-left: 5%;
}
</style>