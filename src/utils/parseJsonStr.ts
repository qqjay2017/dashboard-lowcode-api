

export  function parseJsonStr(str="{}") {
  try {
    return JSON.parse(str)
  } catch (error) {
        return {}
  }
}
