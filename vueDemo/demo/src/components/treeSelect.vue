<template>
  <div>
      <!--check-strictly 为true时不默认展示子节点-->
    <el-tree  :data="data" show-checkbox default-expand-all node-key="id" check-strictly  ref="tree" highlight-current :props="{label: 'title'}">
    </el-tree>

    <div class="buttons">
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "一级 1",
          children: [
            {
              id: 4,
              title: "二级 1-1",
              children: [
                {
                  id: 9,
                  title: "三级 1-1-1",
                },
                {
                  id: 10,
                  title: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "一级 2",
          children: [
            {
              id: 5,
              title: "二级 2-1",
            },
            {
              id: 6,
              title: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          title: "一级 3",
          children: [
            {
              id: 7,
              title: "二级 3-1",
            },
            {
              id: 8,
              title: "二级 3-2",
            },
          ],
        },
      ],
      // defaultProps: {
      //   children: "children",
      //   label: "title",
      // },
    };
  },
  methods: {
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
  },
};
</script>

<style>
</style>