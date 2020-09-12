<template>
  <v-container>

    <v-tabs v-model="tab" centered>
      <v-tab :to="routeInfo">Info</v-tab>
      <v-tab :to="routeConfirmation">Confirmation</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" :value="routeInfo">
        <Info :data="appointment" :next-link="routeConfirmation"/>
      </v-tab-item>
      <v-tab-item :key="2" :value="routeConfirmation">
        <Confirmation  :data="appointment" :back-link="routeInfo"/>
      </v-tab-item>
    </v-tabs-items>
    
  </v-container>
</template>

<script>
import Info from "components/Info.vue";
import Confirmation from "components/Confirmation.vue";

export default {
  name: "Tabs",
  components: {
    Info,
    Confirmation,
  },
  data: () => ({
    tab: "info",
    routeInfo:'/make/info',
    routeConfirmation:'/make/confirmation',
    appointment:{
      date:new Date().toISOString().substr(0, 10),
      name:'',
      note:''
    }
  })
};
</script>


<style scope>
</style>

