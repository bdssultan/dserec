<template>
  <v-container>
    <v-data-table :headers="headers" :items="appointments" hide-default-footer class="elevation-1">
      <template v-slot:item.iscompleted="{ item }">
        <v-checkbox v-model="item.iscompleted"  @change="save"></v-checkbox>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { REMOVE_APPOINTMENT,SAVE_ALL } from "actions";

export default {
  name: "Appointments",
  data: () => ({
    headers: [
      {
        text: "Date",
        align: "start",
        sortable: false,
        value: "date",
      },
      { text: "Name", sortable: false, value: "name" },
      { text: "Complete", sortable: false, value: "iscompleted" },
      { text: "Actions",sortable: false,value: "actions"  },
    ]
  }),
  computed: {
    appointments () {
      return this.$store.state.appointment.list;
    },
  },
  methods: {
    deleteItem(item) {
      const index = this.appointments.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch(REMOVE_APPOINTMENT, index);
    },
    save(){
       this.$store.dispatch(SAVE_ALL);
    }
  },
};
</script>


<style scope>
</style>