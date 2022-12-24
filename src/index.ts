import express, { Express } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(process.platform)
})

app.get('/test', (req, res) => {
  const { exec } = require('child_process')
  exec('lp dany.png -d DS-RX1', (err: Error, data: any ) => {
    console.log(err)
    console.log(data)
  })
  // exec('rundll32 shimgvw.dll ImageView_PrintTo /pt "C:/Users/danyp/Pictures/personal - gradu 31032021/DSC00226.JPG" "DS-RX1"', (err, data) => {
  //   console.log(data.toString())
  // })
  res.send('anything')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
