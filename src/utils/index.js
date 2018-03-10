/* 合法uri*/
export function validateURL(textval) {
    const urlregex =/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
  }
  
  /* 小写字母*/
  export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
  }
  
  /* 大写字母*/
  export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }
  
  /* 大小写字母*/
  export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  }
  //合法邮箱
  export function validatEmile(str) {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
    return reg.test(str)
  }
  //合法整数和小数
  export function validatNumber(str) {
    const reg =   /^[0-9]+([.]{1}[0-9]+){0,1}$/
    return reg.test(str)
  }
  //百分数
  export function validatPercent (str) {
    const reg =   /^(100|[1-9]\d|\d)(.\d{1,2})?%$/
    return reg.test(str)
  }
  //整数
  export function validatInteger(str) {
    const reg =  /^[0-9]*[1-9][0-9]*$/
    return reg.test(str)
  }//手机号
  export function validatPhoneNum(str) {
    const reg =    /^1[34578]\d{9}$/
    return reg.test(str)
  }
  //身份证
  export function validatManCard(str) {
    const reg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
  }
  //分变成元
  export function validatVal(params) {
    if (params > 0) {
      return val / 100
    } else {
      return 0
    }
  }
  //去除空格
  export function validatTrim(params) {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
    //去除.0
  export function validatZero(params) {
    return params.split(".");
  }

