<template>
    <div id="home">
      <el-container>
          
          <BaseHeader  :activeIndex="activeIndex"></BaseHeader >

          <!-- <BaseMain class="me-container"></BaseMain> -->
            
          <RouterView class="me-container"></RouterView>
            
          <BaseFooter v-show="footerShow"></BaseFooter>
            
      </el-container>
          
    </div>
    
  </template>
  
  <script>
  import BaseFooter from "@/views/BaseFooter.vue";
  import BaseHeader from "@/views/BaseHeader.vue";

  import BaseMain from "./BaseMain.vue";
  
  export default {
    name: 'BlogHome',
    data (){
        return {
              activeIndex: '/',
              footerShow:true
        }
    },
    components:{
        BaseHeader,BaseFooter,BaseMain
    },
    props:{
      msg:String,
    },
    onMounted(){
      if(msg == "blog"){
        console.log(msg);
      }
    },
    beforeRouteEnter (to, from, next){
      console.log(to);
         next(vm => {
          vm.activeIndex = to.path
        })
    },
    beforeRouteUpdate (to, from, next) {
      console.log("update");
        if(to.path == '/'){
            this.footerShow = true
        }else{
            this.footerShow = false
        }
        this.activeIndex = to.path
        next()
      }
  }
  </script>
  
  <style>
  
  .me-container{
    /*      上  左   下   右 */
    margin: 5% auto 15% auto;
  }
  </style>
  