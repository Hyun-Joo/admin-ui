import moment from 'moment';

const CommonUtil = {  
  isEmpty(val){
    if(val === '' || val === null || val === undefined || val === false){
      return true;
    }else{
      return false;
    }
  },
  ignoreEmptyValue(val) {
    if(val === '' || val === null || val === undefined){
      return '';
    }else{
      return val;
    }
  },
  ignoreEmptyNumber(val){
    if(val === '0' || val === null || val === undefined || isNaN(val)){
      return 0;
    }else{
      return val;
    }
  },
  setTimeFormat(time){
    //뒷부분 .000+00:00로 인해 자동으로 +9시간 노출 방지
    if(time.indexOf('.') > -1){
      time = time.split('.');
      return moment(time[0]).format('YYYY-MM-DD HH:mm:ss');
    }else{
      return moment(time).format('YYYY-MM-DD HH:mm:ss');
    }
  }
};

export default CommonUtil;