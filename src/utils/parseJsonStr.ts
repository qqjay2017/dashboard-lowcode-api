

import * as  dayjs from 'dayjs';
import Handlebars from 'handlebars'
import { systemIds } from './systemIds';



export function compileJsFn(jsStr=""){
  const funCode = new Function(
    "dayjs",
    "systemIds",
    `option=null;${jsStr};return option||{};`
  );

  try {
    return funCode(dayjs,systemIds)
  } catch (error) {
    console.error(error,"error")
    return {}
    
  }

}

function  parseHandlebarsjsStr(str="{}"){


  try {
    const  template = Handlebars.compile(str);
    return template({
   
    })
  } catch (error) {
    console.error(error,"error")
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
