<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title
        class="text-center text-white text-lato text-bold row items-end q-py-md"
      >
        <h1 class="text-h5 self-center col-12 text-center text-bold q-ma-none">
          Packages
        </h1>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-page-container
    class="q-px-md bg-secondary"
    style="min-height: calc(100vh - 64px)"
  >
    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">Examples Data</h1>

    <div id="barcode-wrapper" class="text-center"></div>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Packages",
  data() {
    return {
      data: [
        { id: "auc9134adf", product: "Apple" },
        { id: "aldfka19da", product: "Mango" },
        { id: "afadfak134", product: "Pineapple" },
      ],
    };
  },
  mounted() {
    const barcodeWrapper = document.getElementById("barcode-wrapper");
    this.data.map((item, index) => {
      const canvas = document.createElement("canvas");
      canvas.classList.add(`barcode${index}`);
      const text = document.createElement("p");
      text.classList.add("q-ma-none");
      text.classList.add("text-left");
      text.innerHTML = `Product: ${item.product}`;
      barcodeWrapper.appendChild(text);
      barcodeWrapper.appendChild(canvas);
      JsBarcode(`.barcode${index}`, item.id, { displayValue: true });
    });
  },
});
</script>
