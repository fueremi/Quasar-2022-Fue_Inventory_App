<template>
  <div
    class="row flex-center bg-white q-px-md q-py-lg q-mt-sm"
    style="
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    "
  >
    <div class="col-3">
      <q-icon
        :name="icon"
        style="
          font-size: 40px;
          border-radius: 100%;
          padding: 10px;
          color: white;
        "
        :style="[`background-color: ${color}`]"
      />
    </div>
    <div class="col-7">
      <h1 style="font-size: 24px; line-height: 1" class="q-ma-none text-bold">
        {{ quantity }}
      </h1>
      <p class="q-ma-none" style="font-size: 16px">{{ text }}</p>
    </div>
    <div class="col-2 column flex-center">
      <q-icon name="navigate_next" style="font-size: 30px" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card1",
  props: ["icon", "text", "color", "quantity"],
});
</script>
