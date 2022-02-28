<template>
  <q-page class="q-mt-md q-px-md">
    <q-header
      elevated
      class="text-primary"
      style="background-color: #2da0e4; padding-top: 8px"
    >
      <q-toolbar>
        <q-toolbar-title
          class="text-center text-white text-lato text-bold row items-end q-py-md"
        >
          <div class="col-2" style="position: relative">
            <q-icon
              name="notifications_none"
              color="white"
              style="font-size: 24px"
            >
            </q-icon>
            <q-badge color="red" floating>10+</q-badge>
          </div>
          <h1 class="text-h5 self-center col-8 text-center text-bold q-ma-none">
            Dashboard
          </h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">Sales Activity</h1>

    <div
      class="row flex-center bg-white q-px-md q-py-lg"
      style="
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
      "
    >
      <div class="col-3">
        <q-icon
          name="print"
          style="
            font-size: 40px;
            background-color: red;
            border-radius: 100%;
            padding: 10px;
            color: white;
          "
        />
      </div>
      <div class="col-7">
        <h1 style="font-size: 24px; line-height: 1" class="q-ma-none text-bold">
          5
        </h1>
        <p class="q-ma-none" style="font-size: 16px">Quantity To be Packed</p>
      </div>
      <div class="col-2 column flex-center">
        <q-icon name="navigate_next" style="font-size: 30px" />
      </div>
    </div>

    <div
      class="row flex-center bg-white q-px-md q-py-lg"
      style="
        margin-top: 8px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
      "
    >
      <div class="col-3">
        <q-icon
          name="local_shipping"
          style="
            font-size: 40px;
            background-color: #2f89fd;
            border-radius: 100%;
            padding: 10px;
            color: white;
          "
        />
      </div>
      <div class="col-7">
        <h1 style="font-size: 24px; line-height: 1" class="q-ma-none text-bold">
          0
        </h1>
        <p class="q-ma-none" style="font-size: 16px">Packages To be Shipped</p>
      </div>
      <div class="col-2 column flex-center">
        <q-icon name="navigate_next" style="font-size: 30px" />
      </div>
    </div>

    <div
      class="row flex-center bg-white q-px-md q-py-lg"
      style="
        margin-top: 8px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
      "
    >
      <div class="col-3">
        <q-icon
          name="check_circle"
          style="
            font-size: 40px;
            background-color: #fbae48;
            border-radius: 100%;
            padding: 10px;
            color: white;
          "
        />
      </div>
      <div class="col-7">
        <h1 style="font-size: 24px; line-height: 1" class="q-ma-none text-bold">
          4
        </h1>
        <p class="q-ma-none" style="font-size: 16px">
          Packages To be Delivered
        </p>
      </div>
      <div class="col-2 column flex-center">
        <q-icon name="navigate_next" style="font-size: 30px" />
      </div>
    </div>

    <div
      class="row flex-center bg-white q-px-md q-py-lg"
      style="
        margin-top: 8px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
      "
    >
      <div class="col-3">
        <q-icon
          name="receipt"
          style="
            font-size: 40px;
            background-color: #6bd292;
            border-radius: 100%;
            padding: 10px;
            color: white;
          "
        />
      </div>
      <div class="col-7">
        <h1 style="font-size: 24px; line-height: 1" class="q-ma-none text-bold">
          10
        </h1>
        <p class="q-ma-none" style="font-size: 16px">Quantity To be Invoiced</p>
      </div>
      <div class="col-2 column flex-center">
        <q-icon name="navigate_next" style="font-size: 30px" />
      </div>
    </div>

    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">
      Inventory Summary <span style="font-size: 12px">(In Quantity)</span>
    </h1>

    <div class="row justify-around items-center q-mb-lg">
      <div class="col-5 bg-white q-px-md q-py-lg" style="border-radius: 10px">
        <div style="border-left: 3px solid #2f89fd">
          <p class="q-ma-none q-pl-md" style="font-size: 14px">In Hand</p>
          <p class="q-ma-none q-pl-md" style="font-size: 20px; border-left">
            500
          </p>
        </div>
      </div>
      <div class="col-5 bg-white q-px-md q-py-lg" style="border-radius: 10px">
        <div style="border-left: 3px solid #fbae48">
          <p class="q-ma-none q-pl-md" style="font-size: 14px">
            To Be Received
          </p>
          <p class="q-ma-none q-pl-md" style="font-size: 20px; border-left">
            500
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      test: null,
    };
  },
});
</script>
