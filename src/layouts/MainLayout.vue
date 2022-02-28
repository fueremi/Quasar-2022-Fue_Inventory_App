<template>
  <q-layout
    view="hhh lpr lFf"
    container
    class="window-height shadow-2 rounded-borders text-lato"
  >
    <q-footer elevated class="bg-dark text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-route-tab
          name="dashboard"
          icon="dashboard"
          label="Dashboard"
          class="col text-sm"
          :to="{ name: 'Dashboard' }"
        />
        <q-route-tab
          name="sales_orders"
          icon="shopping_cart"
          label="Sales Orders"
          class="col"
          :to="{ name: 'SalesOrders' }"
        />
        <q-route-tab
          name="packages"
          icon="content_paste"
          label="Packages"
          class="col"
          :to="{ name: 'Packages' }"
        />
        <q-route-tab
          name="items"
          icon="inventory_2"
          label="Items"
          class="col"
        />
        <q-route-tab name="more" icon="more_horiz" label="More" class="col" />
      </q-tabs>
    </q-footer>

    <q-page-container style="background-color: #eff3f6">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",
  setup() {
    return {
      tab: ref("dashboard"),
    };
  },
};
</script>

<style>
.q-tab__label {
  font-size: 9px;
}
</style>
