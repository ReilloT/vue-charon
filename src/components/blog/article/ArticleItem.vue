<template>
  <el-card class="article-item">
    <template #header>
      <div class="card-header">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-link class="article-item-title" type="default" @click="routerTo(id)">{{title}}</el-link>
          </el-col>
          <el-col :span="3" :offset="8">
            <el-button type="primary" plain v-if="weight>0">置顶</el-button>
          </el-col>
          <el-col :span="3">
            <el-icon><i-ep-View /></el-icon>
            {{viewCounts}}
          </el-col>
          <el-col :span="1">
            <el-divider direction="vertical" />
          </el-col>
          <el-col :span="3">
            <el-icon><i-ep-ChatDotRound /></el-icon>
            {{ commentCounts }}
          </el-col>
        </el-row>
      </div>
    </template>
    

    <el-row :gutter="20">
      <el-col :span="24">
        {{ summary }}
      </el-col>
    </el-row>

    <el-row class="fotter":gutter="20">
      <el-col :span="3">
        {{ author }}
      </el-col>
      <el-col :span="12">
        <el-tag type="primary" v-for="tag in tags" :key="tag.tagname">{{ tag.tagname }}</el-tag>
      </el-col>
      <el-col :span="9">
        <el-icon><i-ep-Clock /></el-icon>
        {{ $filter.formateDate(createDate) }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default{
  name:"ArticleItem",
  props: {
    id: String,
    weight: Number,
    title: String,
    commentCounts: Number,
    viewCounts: Number,
    summary: String,
    author: String,
    tags: Array,
    createDate: String
  },
  methods:{
    routerTo(id){
      this.$router.push({path:"/"})
    }
  }
  
}
</script>

<style scoped>
.el-card{
  margin-left: 20%;
  margin-right: 10%; 
}
.el-link{
  font-size: x-large;
}

.view-counts{
  text-align: right;
  vertical-align: middle;
}

.article-item{
  margin-top: 10px
}

.el-tag{
  margin-right: 2px;
}

.article-item-title{
  font-size: larger;
}
.fotter{
  margin-top: 15px;
  margin-bottom: -10px;
}
</style>