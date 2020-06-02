<template>
    <v-content class="blue-grey lighten-4">
      <v-container
        v-if="!showSignUpPage"
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="ID"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="account"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success" @click.stop="showSignUpPage = !showSignUpPage">
                  회원가입
                </v-btn>
                <v-spacer />
                <small class="red--text" id="loginFailMsg"></small>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- 아래 회원가입 페이지 -->
      <sign-up v-if="showSignUpPage" />
    </v-content>
</template>

<script>
import axios from 'axios';
import SignUp from './SignUp';
import CommonUtil from '../assets/js/utils';
import Constants from '../assets/js/constants';

export default {
  name: 'Login',
  components: {
    SignUp
  },
  props: ["name"],
  data(){
    return {
      account: "",
      password: "",
      showSignUpPage: false
    }
  },
  created(){
    this.account = this.name;
  },
  methods: {
    async login(){
      let me = this;
      if(CommonUtil.isEmpty(me.account) || CommonUtil.isEmpty(me.password)){
        alert(Constants.INPUT_INFO_EMPTY);
        return false;
      }      
      const params = { account: this.account, password: this.password };
      try {
        let res = await axios.post(`${process.env.VUE_APP_URL}/member/login`, params);
        // console.log(res.data);
        const rslt = res.data;
        if(res.status === 200 && rslt.result && rslt.data === 1){
          console.log('FUCK U');
          me.$emit('updateName', me.account);
        }else{
          document.getElementById('loginFailMsg').innerHTML = Constants.LOGIN_FAIL_MSG;
          return;
        }
      }catch(e){
        console.log(e);
      }      
    }
  }
}
</script>