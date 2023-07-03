const { app } = require('./handler');
app.listen(8080, () => {
  console.log('sales api is running on local machine, http://localhost:8080 port')
})