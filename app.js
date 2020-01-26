var express = require('express');
var path = require('path');

var app = express();

// // view engine setup
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'view')));

// // なんかこれ入れるとダメだったNot Foundになっちゃった
// // // その他のリクエストに対する404エラー
// app.use((req, res) => {
//   res.sendStatus(404);
// });

app.get('/', (req, res) => {
  res.render('index', {
    'title': 'test',
    'content': 'Express Test'
  });
});

app.listen(8080, () => {
  console.log('Running at Port 8080...');
});