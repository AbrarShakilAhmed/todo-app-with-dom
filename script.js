function x() {
  let a = 34
  function b() {
    console.log(a)
  }
  return b
}

x()()
