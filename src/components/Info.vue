<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="data.date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="data.date"
                :rules="[() => !!data.date || 'This field is required']"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="data.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(data.date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field
            ref="name"
            v-model="data.name"
            :rules="[() => !!data.name || 'This field is required']"
            label="Full Name"
            placeholder
            required
          ></v-text-field>
          <v-text-field ref="note" v-model="data.note" label="Note" placeholder></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text @click="back">Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="next">Next</v-btn>
        </v-card-actions>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Info",
  props: {
    data: {
      type: Object,
    },
    nextLink:String
  },
  data: () => ({
    menu: false,
    valid:true
  }),
  methods: {
    back() {
      this.$router.push("/");
    },
    next () {
      if (this.$refs.form.validate()) this.$router.push(this.nextLink);
    },
  },
};
</script>


<style scope>
</style>

