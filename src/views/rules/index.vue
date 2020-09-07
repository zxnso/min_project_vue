<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="更新频率">
        <el-input v-model="formInline.updateTimes" />
      </el-form-item>
      <el-form-item label="返回数量">
        <el-input v-model="formInline.number" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>

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
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="热词">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="排序位置" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加规则" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm">
        <el-form-item label="热词名称">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="排序位置">
          <el-input v-model="ruleForm.sortNumber" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table'

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
      list: null,
      listLoading: true,
      formInline: {
        updateTimes: 1,
        number: 10
      },
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        sortNumber: 1
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    save() {
      console.log(this.formInline)
    }
  }
}
</script>
