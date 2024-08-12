

import * as  dayjs from 'dayjs';
import Handlebars from 'handlebars'


export function compileJsFn(jsStr=""){
  const funCode = new Function(
    "dayjs",
    
    `option=null;${jsStr};return option||{};`
  );

  try {
    return funCode(dayjs)
  } catch (error) {
    console.log(error,"error")
    return {}
    
  }

}

function  parseHandlebarsjsStr(str="{}"){


  try {
    const  template = Handlebars.compile(str);
    return template({
   
    })
  } catch (error) {
    console.log(error,"error")
      return str
  }

}


export  function parseJsonStr(str="{}") {
  const  _str = parseHandlebarsjsStr(str) ;


  try {
    return JSON.parse(_str)
  } catch (error) {
        return {}
  }
}
