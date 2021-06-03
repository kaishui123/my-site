<template>
  <div class="test-container">
    <Layout>
      <template #header>
        <div class="header">我是头</div>
      </template>
      <template #default>
        <div class="main">我是主区域</div>
      </template>
      <template #footer>
        <div class="footer">我是页脚</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 700px;
  border: 2px solid #000;
  margin: 0 auto;
}
.header {
  width: 150px;
  height: 100%;
  background: lightblue;
}
.main {
  width: 100%;
  height: 100%;
  background: #f40;
}
.footer {
  width: 150px;
  height: 100%;
  background: lightcoral;
}
</style>