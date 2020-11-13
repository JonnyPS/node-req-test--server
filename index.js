const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');

app.use(cors())

app.post('/reqs', (req, res) => {
	console.log(req.body)
	res.set(
		'Content-Type', 'application/json'
	);
	res.send({data: 
		{'message':'You have posted!'}
	}
	)
});

app.get('/reqs', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});