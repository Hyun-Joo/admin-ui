<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="account"
            v-model="account"
            label="ID"
            placeholder="아이디를 입력하세요."
            required
          />
          <v-text-field
            ref="password"
            v-model="password"
            label="PASSWORD"
            placeholder="비밀번호를 입력하세요."
            required
            type="password"
          />
          <v-text-field
            ref="pwcheck"
            v-model="pwcheck"
            label="PW CHECK"
            placeholder="비밀번호를 한 번 더 입력하세요."
            @keyup="pwdCheck"
            required
            type="password"
          />
          <small class="red--text" id="pwChkMsg"></small>
          <v-text-field
            ref="email"
            v-model="email"
            label="E-MAIL"
            required
            placeholder="이메일을 입력하세요."
          />
          <v-text-field
            ref="phoneNumber"
            v-model="phoneNumber"
            label="H.P."
            required
            placeholder="연락처를 입력하세요."
          />
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn reset>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              left
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import CommonUtil from '../assets/js/utils';
import Constants from '../assets/js/constants';
import axios from 'axios';

export default {
  name: 'SignUp',
  data(){
    return {
      account: "", password: "", pwcheck: "", email: "", phoneNumber: "", chkCnt: 0
    }
  },
  methods: {
    pwdCheck(){
      if(CommonUtil.isEmpty(this.password) || (this.password != this.pwcheck)){
        document.getElementById('pwChkMsg').innerHTML = Constants.PWD_NOT_EQUAL_MSG;
        return false;
      }else{
        document.getElementById('pwChkMsg').innerHTML = '';
        this.chkCnt += 1;
      }
    },
    async submit(){
      if(CommonUtil.isEmpty(this.account)){
        alert(Constants.INPUT_INFO_EMPTY);
        this.$refs.account.focus();
        return false;
      }
      if(this.chkCnt < 1){
        alert(Constants.PWD_CHECK_MSG);
        this.$refs.password.focus();
        return false;
      }

      let paramData = {};
      paramData.account = this.account;
      paramData.password = this.password;
      paramData.email = this.email;
      paramData.phoneNumber = this.phoneNumber;
      
      try {
        let res = await axios.post(`${process.env.VUE_APP_URL}/member/signup`, paramData);
        console.log('insert result => ',res);
        if(res.status === 200){
          alert(Constants.INSERT_SUCCESS_MSG);
          location.reload();
        }
      }catch(e){
        console.log(e);
      }
    }
  }
}
</script>