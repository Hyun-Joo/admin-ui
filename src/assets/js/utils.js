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
    if(val === 0 || val === '0' || val === null || val === undefined || isNaN(val)){
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
  },
  setCookie(cName, cValue, cDay){
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    let cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
  },
  getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
      cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
  }
};

export default CommonUtil;