const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var output = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output


app.use(cors())

app.post('/reqs', (req, res) => {
	console.log(req.body)
	
	res.set(
		'Content-Type', 'application/json'
	);
	
	if (output.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      output.writeSync(1); //set pin state to 1 (turn LED on)
      res.send({data: 
		{'message':'Light is turned on!'}
	  })
    } else {
      output.writeSync(0); //set pin state to 0 (turn LED off)
      res.send({data: 
		{'message':'Light is turned off!'}
	  })
    }
    
	
	
});

app.get('/reqs', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
