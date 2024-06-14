<template>
    <el-card>
        <el-timeline style="max-width: 600px">
            <el-timeline-item
                v-for="(i, index) in 10"
                :key="index"
            
                >
                <!-- :timestamp="activity.timestamp" -->
                {{ i }} Cute
            </el-timeline-item>
        </el-timeline>
        <div class="example-pagination-block">
            <div class="example-demonstration">
                When you have few pages
            </div>
            <el-pagination small layout="prev, pager, next" :total="50" />
        </div>
    </el-card>
</template>
  
<script>

export default{
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.el-card{
    background-color: aqua
}
.example-pagination-block{
    max-width: 100%;
}
</style>