<template>
  <v-app>
    <p>
      <router-link to="/">Appointments</router-link>
      <router-link to="/make">Make Appointments</router-link>
    </p>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>


<style>
p {
  margin: 0 auto;
}
a {
  margin-right: 5px;
}
</style>