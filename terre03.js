#! node

let arg = process.argv

arg.shift(0)
arg.shift(0)

if (arg[0] === undefined) {
  console.log('Veuillez indiquer au script, un ou plusieurs arguments')
} else {
  for(let x = 0; x < arg.length; x++) {
    console.log(arg[x])
  }
}
