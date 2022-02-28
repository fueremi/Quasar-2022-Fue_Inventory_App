<template>
  <q-header bordered class="bg-primary text-white">
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

  <q-page-container
    class="q-px-md bg-secondary"
    style="min-height: calc(100vh - 64px)"
  >
    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">Sales Activity</h1>

    <Card1
      v-for="item in dataCard1"
      :key="item"
      :color="item.color"
      :icon="item.icon"
      :text="item.text"
      :quantity="item.quantity"
    />

    <h1 class="text-bold text-h5 q-ma-none q-my-lg q-mt-lg">
      Inventory Summary <span style="font-size: 12px">(In Quantity)</span>
    </h1>

    <div class="row justify-around items-center q-mb-lg">
      <Card2
        v-for="item in dataCard2"
        :key="item.text"
        :color="item.color"
        :quantity="item.quantity"
        :text="item.text"
      />
    </div>
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import Card1 from "../../components/Card1.vue";
import Card2 from "../../components/Card2.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Card1,
    Card2,
  },
  data() {
    return {
      tab: ref("dashboard"),
      dataCard1: ref([
        {
          icon: "print",
          quantity: "5",
          color: "red",
          text: "Quantity To be Packed",
        },
        {
          icon: "local_shipping",
          quantity: "10",
          color: "#2f89fd",
          text: "Packages To be Shipped",
        },
        {
          icon: "check_circle",
          quantity: "4",
          color: "#fbae48",
          text: "Packages To be Delivered",
        },
        {
          icon: "receipt",
          quantity: "3",
          color: "#6bd292",
          text: "Quantity To be Invoiced",
        },
      ]),
      dataCard2: [
        {
          color: "#2f89fd",
          text: "In Hand",
          quantity: 500,
        },
        {
          color: "#6bd292",
          text: "To Be Received",
          quantity: 500,
        },
      ],
    };
  },
});
</script>
