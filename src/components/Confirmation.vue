<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          <v-text-field
            v-model="data.date"
            readonly
            :rules="[() => !!data.date || 'This field is required']"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="data.name"
            readonly
            :rules="[() => !!data.name || 'This field is required']"
            label="Full Name"
            placeholder
            required
          ></v-text-field>
          <v-text-field ref="note" v-model="data.note" label="Note" placeholder readonly></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text @click="back">Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="create">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { ADD_APPOINTMENT } from "actions";

export default {
  name: "Confirmation",
  props: {
    data: {
      type: Object,
    },
    backLink:String
  },
  data: () => ({
    valid: true,
  }),
  computed: {},
  mounted: function () {},
  methods: {
    back () {
      this.$router.push(this.backLink);
    },
    create () {
      if (this.$refs.form.validate()) {
        const { date, name, note } = this.data;
        this.$store.dispatch(ADD_APPOINTMENT, { date, name, note });
        this.$router.push("/");
      }
    },
  },
};
</script>


<style scope>
</style>
