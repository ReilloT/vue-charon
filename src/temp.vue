<template>
<el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">

      <a class="me-article-title">{title}</a>
      <el-button> 0" class="me-article-icon" type="text">置顶</el-button>
      <span class="me-pull-right me-article-count">
	    	<i class="me-icon-comment"></i>&nbsp;{commentCounts}
	    </span>
      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-view"></i>&nbsp;{viewCounts}
	    </span>
    </div>

    <div class="me-artile-description">
      {summary}
    </div>
    <div class="me-article-footer">
	  	<span class="me-article-author">
	    	<i class="me-icon-author"></i>&nbsp;{author.nickname}
	    </span>

      <el-tag v-for="t in 5" size="mini" type="success">{t.tagName}</el-tag>

      <span class="me-pull-right me-article-count">
	    	<i class="el-icon-time"></i>&nbsp;{createDate | format}
	    </span>

    </div>
  </el-card>
</template>