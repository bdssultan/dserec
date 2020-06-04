<template>
  <v-container>
    <v-btn to="/add">add</v-btn>
    <v-switch v-model="draggble" label="dragbble"></v-switch>
    <v-row class="text-center">
      <v-col cols="3" v-for="(card,index) in cards " :key="index">
        <v-card        
          class="scroll"
          height="200"
          :id="index"
          @dragstart="dragStart(index, $event)"
          @dragover.prevent
          @dragend="dragEnd"
          @drop="dragFinish(index)"
          :draggable="draggble"
        >
          <h1>{{card.name}}</h1>
          <div>{{card.description}}</div>
        </v-card>
        <v-btn text color="deep-purple accent-3" @click="openDialog(index)">Просмотр</v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog"  scrollable max-width="800">
      <v-card v-if="cards[openItem]">
        <v-card-title class="headline">{{cards[openItem].name}}</v-card-title>

        <v-card-text>{{cards[openItem].description}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  data: () => ({
    draggble: true,
    dragging: -1,
    openItem: -1,
    dialog: false
  }),
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    dragStart: function(which, ev) {
      if (this.draggble) {
        ev.dataTransfer.setData("index", this.id);
        this.dragging = which;
      }
    },
    dragEnd: function() {
      this.dragging = -1;
    },
    dragFinish: function(to) {
      if (this.draggble) {
        this.$store.commit("replaceCard", {
          to: to,
          from: this.dragging
        });
      }
    },
    openDialog:function(index){
        this.openItem=index;
        this.dialog=true;
    }
  }
};
</script>


<style scope>
.scroll {
  overflow: auto;
}
</style>