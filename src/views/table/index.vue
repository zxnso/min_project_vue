c<template>
  <div class="app-container">
     <el-button type="primary" @click="dialogFormVisible = true"
      >添加热词</el-button
    >
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="margin-top:15px;"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="热词">
        <template slot-scope="scope">{{ scope.row.hotWord }}</template>
      </el-table-column>
      <el-table-column label="排序位置" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sequence }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加热词" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm">
        <el-form-item label="热词名称">
          <el-input v-model="ruleForm.hotWord" />
        </el-form-item>
        <el-form-item label="排序位置">
          <el-input v-model="ruleForm.sequence" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList, addHotWord } from '@/api/hot'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: true,
      dialogFormVisible: false,
      ruleForm: {
        hotWord: '',
        sequence: 1
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      const params = {
        pageNum: 1,
        pageSize: 999,
        param: {}
      }
      getList(params).then(res => {
        this.list = res.data.records
        this.listLoading = false
      })
    },
    add() {
      addHotWord(this.ruleForm).then(res => {
        this.$message.success(res.message)
        this.dialogFormVisible = false
        this.fetchData()
      })
    }
  }
}
</script>
