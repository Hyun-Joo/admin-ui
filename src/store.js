import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import CommonUtil from './assets/js/utils.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jdmsMenuInfo: [],
    memberList: []
  },
  mutations: {},
  actions: {
    getMenuInfo(){
      let items = [
        { id: 0, text: '고객 관리', link: 'MemberList' },
        { id: 1, text: '상품 관리' },
        { id: 2, text: '파트너사 관리' },
        { id: 3, text: '주문 관리' },
        { id: 4, text: '카테고리 관리' },
        { id: 5, text: '어드민 사용자 관리' }
      ];
      this.state.jdmsMenuInfo = items;
    },
    async getMemberList(){
      let self = this;
      try {
        let res = await axios.get(`${process.env.VUE_APP_URL}/member/list`);
        const list = res.data.data;
        console.log('리스트 호출결과 => ',res);
        if(res.status === 200 && !CommonUtil.isEmpty(list) && Object.keys(list).length > 0){
          list.forEach(element => {            
            element.registered_at = CommonUtil.setTimeFormat(element.registered_at);
            self.state.memberList.push(element);
            console.log('memberList => ',self.state.memberList);
          });
        }
      }catch(e){
        console.log(e);
      }
    }
  }
});