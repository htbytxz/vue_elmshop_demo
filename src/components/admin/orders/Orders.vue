<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 商品列表区域 -->
      <el-table :data="orderlist" border stripe>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="orderID" prop="orderId" width="100px"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
        <el-table-column label="下单时间" prop="createTime" width="300px"></el-table-column>
        <el-table-column label="备注" prop="comment"></el-table-column>
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.status === 1">待接单</el-tag>
            <el-tag type="primary" v-else-if="scope.row.status === 2">已接单</el-tag>
            <el-tag type="danger" v-else-if="scope.row.status === 3">待配送</el-tag>
            <el-tag type="primary" v-else-if="scope.row.status === 4">配送中</el-tag>
            <el-tag type="warning" v-else-if="scope.row.status === 5">待领取</el-tag>
            <el-tag type="success" v-else>已完成</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderlist: []
    }
  },
  created () {
    this.getOrdersList()
  },
  methods: {
    async getOrdersList () {
      const { data: res } = await this.$http.post('/customer/getOrdersList', { userId: 21 })
      console.log(res)
      this.$message.success('获取订单列表成功')
      this.orderlist = res
    }
    // async findAllByShopName () {
    //   console.log(JSON.stringify(this.Name))
    //   const { data: res } = await this.$http.post('/admin/findAllByShopName', this.Name)
    //   // console.log(res)
    //   // if (res !== 1) return this.$message.error('查询商家列表失败！')
    //   this.$message.success('查询商家列表成功')
    //   this.storelist = res
    // },
    // 根据Id修改商家的状态（不封号改为封号，封号的则解封
    // async changeStatusById (id) {
    //   this.ID.shopId = id
    //   // console.log(this.ID)
    //   // 弹框询问管理员是否删除数据
    //   const confirmResult = await this.$confirm(
    //     '此操作将改变商家状态, 是否继续?',
    //     '提示',
    //     {
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }
    //   ).catch(err => err)
    //
    //   // 如果管理员确认删除，则返回值为字符串 confirm
    //   // 如果管理员取消了删除，则返回值为字符串 cancel
    //   // console.log(confirmResult)
    //   if (confirmResult !== 'confirm') {
    //     return this.$message.info('已取消修改')
    //   }
    //
    //   const { data: res } = await this.$http.post('/admin/changeShopStatus', this.ID)
    //
    //   if (res !== 1) {
    //     return this.$message.error('修改状态失败！')
    //   }
    //
    //   this.$message.success('修改状态成功！')
    //   this.getStoresList()
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
