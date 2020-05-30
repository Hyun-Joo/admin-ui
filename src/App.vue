<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1>Admin</h1>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
      >
        <h3>Administrator</h3>
        <!--<v-icon>mdi-open-in-new</v-icon>-->
      </v-btn>
    </v-app-bar>

    <v-content class="blue lighten-5">
      <login />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
// import MenuBar from './components/MenuBar';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    posts: []
  }),
  async created(){
    this.posts = await this.test();
  },
  methods: {
    async test(){
      let arr = [];
      await axios('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log('res => ',res.data);
          arr = res.data;
        }).catch(err => {
          console.log(err);
        });
        return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  letter-spacing: 6px;
}
</style>