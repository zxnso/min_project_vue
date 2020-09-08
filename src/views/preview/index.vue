<template>
  <div class="preview-page">
    <div class="preview">
      <van-search
        v-model="keyword"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      <div class="hot-list">
        <p>今日热词</p>
        <div class="list">
          <p v-for="(item, index) in hotList" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { search, getHotList } from '@/api/hot'
export default {
  name: 'Preview',
  components: {},
  props: {},
  data() {
    return {
      keyword: '',
      hotList: []
    }
  },
  created() {
    this.getHotList()
  },
  mounted() {},
  methods: {
    onSearch(val) {
      search({ hotWord: val}).then(res => {
        this.$message.success(res.message)
        this.getHotList()
      })
    },
    onCancel() {
      this.keyword = ''
    },
    getHotList() {
      getHotList().then(res => {
        this.hotList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-page {
  display: flex;
  justify-content: center;
  .preview {
    width: 375px;
    height: 630px;
    overflow-y: auto;
    border: 1px solid #333;
    border-radius: 10px;
    .hot-list {
      padding: 0 10px;
      .list {
        display: flex;
        p {
          border: 1px solid #ccc;
          border-radius: 15px;
          margin: 0 5px 5px;
          background: #f2f2f2;
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>
