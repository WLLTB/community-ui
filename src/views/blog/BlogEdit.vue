<template>
  <div>
    <div class='header-box'>
      <el-input v-model='state.blog.title' placeholder='输入文章名字' style='width: 200px'/>
      <el-select v-model='state.blog.typeId' placeholder='选择分类'>
        <el-option
            v-for='type in state.typeList'
            :key='type.id'
            :label='type.name'
            :value='type.id'
        />
      </el-select>
      <el-button type='primary' round @click='createBlog'>
        发布
      </el-button>
    </div>
    <v-md-editor v-model='state.blog.mdContent' height='92vh'/>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {getBlogType, saveBlog} from '../../api/blog/blog.api';

const state = reactive({
  blog: {
    author: 'zpf',
    title: '',
    typeId: '',
    content: '',
    mdContent: '# 222\n2\n\n2e32e\n2\n@@@\n\n## wewew',
  },
  typeList: [{
    id: '1',
    name: '',
  }, {
    id: '2',
    name: 'abcd',
  }],
});

const createBlog = async () => {
  const result = await saveBlog(state.blog);
  if (result.code === 200) {
    this.$message.success('添加成功!');
  } else {
    this.$message.error(result.message)
  }
};

const initTypeList = async () => {
  const result = await getBlogType();
  state.typeList = result.data;
};
onMounted(() => {
  initTypeList();
});
</script>

<style scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  margin: auto 25%;
  padding: 10px;
}
</style>