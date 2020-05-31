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
  }
};

export default CommonUtil;