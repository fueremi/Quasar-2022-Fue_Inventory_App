<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title
        class="text-center text-white text-lato text-bold row items-end q-py-md"
      >
        <h1 class="text-h5 self-center col-12 text-center text-bold q-ma-none">
          Sales Orders
        </h1>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-page-container
    class="q-px-md bg-secondary"
    style="min-height: calc(100vh - 64px)"
  >
    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">Scan Barcode</h1>

    <q-btn
      color="dark"
      size="lg"
      icon="qr_code_scanner"
      class="text-center q-mx-auto flex"
      style="border-radius: 10px"
      @click="onClick"
    />
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesOrders",
  methods: {
    onClick() {
      console.log("Onclick");
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert(
            "We got a barcode\n" +
              "Result: " +
              result.text +
              "\n" +
              "Format: " +
              result.format +
              "\n" +
              "Cancelled: " +
              result.cancelled
          );
        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          preferFrontCamera: true, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "CODE_128", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false, // iOS and Android
        }
      );
    },
  },
});
</script>
