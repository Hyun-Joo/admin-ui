<template>
    <v-content class="blue-grey lighten-4">
      <v-container
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
                    label="Login"
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
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  props: ["name"],
  data(){
    return {
      account: "",
      password: ""
    }
  },
  created(){
    this.account = this.name;
  },
  methods: {
    async login(){
      let me = this;
      const params = { account: this.account, password: this.password };
      try {
        let res = await axios.post(`${process.env.VUE_APP_URL}/member/login`, params);
        console.log(res.data);
        const rslt = res.data;
        if(res.status === 200 && rslt.result && rslt.data === 1){
          console.log('FUCK U');
          me.$emit('updateName', me.account);
        }
      }catch(e){
        console.log(e);
      }      
    }
  }
}
</script>