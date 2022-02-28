<template>
  <div class="col-5 bg-white q-px-md q-py-lg" style="border-radius: 10px">
    <div :style="[`border-left: 3px solid ${color}`]">
      <p class="q-ma-none q-pl-md" style="font-size: 14px">{{ text }}</p>
      <p class="q-ma-none q-pl-md" style="font-size: 20px; border-left">
        {{ quantity }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card2",
  props: ["color", "quantity", "text"],
});
</script>
