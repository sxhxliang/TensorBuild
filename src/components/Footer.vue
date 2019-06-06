<template>
   <div>Design Model Workshop</div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>