c<template>
  <div class="app-container">
    <el-button type="primary" @click="dialogFormVisible = true"
      >添加规则</el-button
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
      <el-table-column label="更新频率">
        <template slot-scope="scope">{{ scope.row.refreshCycle }}</template>
      </el-table-column>
      <el-table-column label="返回数量" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.hotNum }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加热词" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm">
        <el-form-item label="更新频率">
          <el-input v-model="ruleForm.refreshCycle" />
        </el-form-item>
        <el-form-item label="返回数量">
          <el-input v-model="ruleForm.hotNum" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getRule, setHotRule, updateHotRule } from '@/api/hot'

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
        refreshCycle: 1,
        hotNum: 10
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
      getRule(params).then(res => {
        this.list = res.data.records
        this.listLoading = false
      })
    },
    save() {
      if (this.list.length === 0) {
        setHotRule(this.ruleForm).then(res => {
          this.$message.success(res.message)
          this.dialogFormVisible = false
          this.fetchData()
        })
      } else {
        updateHotRule({ ...this.ruleForm, id: this.list[0].id }).then(res => {
          this.$message.success(res.message)
          this.dialogFormVisible = false
          this.fetchData()
        })
      }
    }
  }
}
</script>
