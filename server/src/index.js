import app from './app.js'

async function main () {
  await app.listen(3000)
  console.log('Server is running on port 3000')
}

main()
