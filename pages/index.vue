<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row class="pb-30">
        <v-col cols="12" md="8" sm="10">
          <v-app-bar color="rgba(0,0,0,0.2)" app flat class="pt-3 pb-2">
            <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="11"
                offset-y="13"
              >
                <v-avatar class="mt-n7" size="40" elevation="10">
                  <img src="https://placekitten.com/600/600" />
                </v-avatar>
            </v-badge>
            <v-toolbar-title class="title pl-0 ml-2 mt-n4">
              Cat
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>

          <v-app-bar v-for="cmnt in comments" color="rgba(0,0,0,0)" flat class="mb-16" :key="cmnt.key">
            <template v-if="cmnt.isyou">
              <v-spacer ></v-spacer>
              <v-card class="mt-10 mr-2" min-width="250px" max-width="300px" color="blue" dark >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class=" mb-4">
                      {{cmnt.text}}
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-card >
              <v-badge
                  bordered
                  bottom
                  color="green"
                  dot
                  offset-x="10"
                  offset-y="10"
                >
              <v-avatar class="mt-n5 " size="30" elevation="10">
                    <img src="https://placekitten.com/700/700" />
              </v-avatar>
              </v-badge>
            </template>
            <template v-else>
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="16"
                offset-y="9"
              >
                <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                  <img src="https://placekitten.com/600/600" />
                </v-avatar>
              </v-badge>
              <v-card class="mt-10 " min-width="250px" max-width="300px">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class=" mb-4">
                      {{cmnt.text}}
                    </div>
                    <!-- <v-list-item-subtitle>12 mins ago</v-list-item-subtitle>   -->
                  </v-list-item-content>
                </v-list-item>
              </v-card >
              <v-btn
                color="black"
                icon
                class="mb-n10"
                :key="cmnt.key"
              >
                <v-icon>fas fa-ellipsis-h</v-icon>
              </v-btn>
            </template>  
          </v-app-bar>
        </v-col>
      </v-row>
      <v-footer height="80" fixed>
        <v-app-bar color="rgba(0,0,0,0)" flat>
          <v-text-field
            v-model="message"
            append-icon="mdi-emoticon"
            append-outer-icon="mdi-send"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            hide-details="true"
            @click:append-outer="sendMessage"
            @click:clear="clearMessage"
          ></v-text-field>
         </v-app-bar>
      </v-footer>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
     comments:[
        {isyou: false, text: "meow", key: 1}
     ],
      message: ''
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    sendMessage () {
      if (this.message.trim() == ""){
        return
      }
      this.comments.push({
        isyou: true, text: this.message, key: this.comments.length+1
      })
      this.clearMessage()
      setTimeout(() => {
        this.comments.push({
          isyou: false, text: "meow ".repeat(this.comments.length/2+1), key: this.comments.length+1
        })
      }, 1000)
      
    },
    clearMessage () {
      this.message = ''
    },
  },
};
</script>
<style scoped>
.border {
  border-right: 1px solid grey;
}
</style>