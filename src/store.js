import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import CommonUtil from '../assets/js/utils.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jdmsMenuInfo: []
  },
  mutations: {
  },
  actions: {
    getMenuInfo(){
      let items = [
        { id: 0, text: '고객 관리' },
        { id: 1, text: '상품 관리' },
        { id: 2, text: '파트너사 관리' },
        { id: 3, text: '주문 관리' },
        { id: 4, text: '카테고리 관리' },
        { id: 5, text: '어드민 사용자 관리' }
      ];
      this.state.jdmsMenuInfo = items;
    }
  }
});