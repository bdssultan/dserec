<template>
  <v-container>
   <Tabs></Tabs>
  </v-container>
</template>

<script>

import { ADD_APPOINTMENT } from 'actions'
import Tabs from 'components/Tabs.vue'

export default {
  name: "Make",
  components: {
    Tabs
  }
};
</script>
