<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="blue-grey darken-4"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in jdmsMenuInfo">
          <v-list-item
            :key="item.text"
            link
          >
            <v-list-item-content>
              <v-list-item-title style="color:white;letter-spacing:2px;font-weight:400;">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Admin</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 아랫부분을 계정명으로 할지 하드코딩으로 놔둘지.... -->
      <span style="letter-spacing:1px;" v-if="loginYn == 'Y'">
        {{ account }}
      </span> 
      <span style="letter-spacing:1px;" v-else>
        Administrator
      </span>
    </v-app-bar>
    <login v-if="loginYn == 'N'" 
      :name="account"       
      @updateName="updateName" 
    />
    <member-list v-else-if="loginYn == 'Y'" :list="memberList" />
  </v-app>
</template>

<script>
import MemberList from './components/MemberList';
import Login from './components/Login';
// import MenuBar from './components/MenuBar';
import CommonUtil from './assets/js/utils'
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    Login,
    MemberList
  },

  computed: {
    ...mapState(["jdmsMenuInfo", "memberList"])
  },

  data: () => ({
    posts: [],
    dialog: false,
    drawer: null,
    loginYn: 'N',
    account: "",
    showSignUpPage: false
  }),
  created(){
    if(CommonUtil.isEmpty(this.jdmsMenuInfo) || this.jdmsMenuInfo.length < 1){
      this.$store.dispatch("getMenuInfo");
    }    

    if(CommonUtil.isEmpty(this.memberList) || this.memberList.length < 1){
      this.$store.dispatch("getMemberList");
    }
  },
  methods: {
    updateName(name){
      this.loginYn = 'Y';
      this.account = name.toUpperCase();
    },
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
.hidden-sm-and-down {
  font-size: 28px;
  letter-spacing: 3px;
  font-weight: 600;
}
</style>