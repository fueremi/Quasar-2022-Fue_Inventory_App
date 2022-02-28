<template>
  <q-page class="q-mt-md q-px-md">
    <q-header
      bordered
      class="text-primary"
      style="background-color: #2da0e4; padding-top: 30px"
    >
      <q-toolbar>
        <q-toolbar-title
          class="text-center text-white text-lato text-bold row items-end q-py-md"
        >
          <h1
            class="text-h5 self-center col-10 offset-1 text-center text-bold q-ma-none"
          >
            Packages
          </h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div id="barcode-wrapper" class="text-center"></div>
  </q-page>
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
