<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-text-field label="Название" placeholder v-model="name"></v-text-field>
        <v-textarea name="input-7-1" label="Описание" value hint="Hint text" v-model="description"></v-textarea>
      </v-col>
    </v-row>
    <v-btn to="/">Отмена</v-btn>
    <v-btn @click="add">Добавить</v-btn>   
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Edit",
  data: () => ({
    name: "",
    description: ""
  }),
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    add: function() {
      var card = { name: this.name, description: this.description };
      this.$store.commit("addCard", card);
      console.log("added");
      this.$router.push("/");
    }
  }
};
</script>
