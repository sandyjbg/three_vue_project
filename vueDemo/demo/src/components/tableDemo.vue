<template>
  <div>
    <el-dropdown trigger="click">
      <el-button type="primary">分组</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="field in fields" :key="field" @click="groupData(field)">{{ field }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-table :data="groupedData" style="width: 100%">
      <el-table-column v-for="field in fields" :key="field" :prop="field" :label="field" />
      <el-table-column label="数据" width="400">
        <template slot-scope="scope">
          <el-tree :data="scope.row.children" :props="treeProps" :expand-on-click-node="false" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['name', 'age', 'gender', 'score'],
      tableData: [
        { name: '张三', age: 18, gender: '男', score: 80 },
        { name: '李四', age: 19, gender: '女', score: 85 },
        { name: '王五', age: 20, gender: '男', score: 90 },
        { name: '赵六', age: 21, gender: '女', score: 95 },
      ],
      groupedData: [],
    };
  },
  methods: {
    groupData(field) {
      const groups = {};
      this.tableData.forEach((item) => {
        const key = item[field];
        if (!groups[key]) {
          groups[key] = {
            [field]: key,
            children: [],
          };
        }
        groups[key].children.push(item);
      });
      this.groupedData = Object.values(groups).map((group) => {
        return {
          ...group,
          children: group.children.map((child) => {
            return {
              ...child,
              children: undefined, // 避免出现嵌套的 "children" 属性
            };
          }),
        };
      });
    },
  },
  computed: {
    treeProps() {
      return {
        label: (data) => data.name || data.gender,
        children: 'children',
      };
    },
  },
  mounted() {
    this.groupData('name');
  },
};
</script>