const {
    SerialPort,
    ReadlineParser
} = require('serialport')

// Define the port name and baud rate
//const portName = '/dev/cu.usbmodem11101'; // Change this to the correct port for your Arduino
const portName = '/dev/cu.usbmodem21301'; 
const baudRate = 115200; // Change this to match the baud rate used by your Arduino

//console.log(SerialPort)
// Create a new SerialPort instance
const port = new SerialPort({
    path: portName,
    baudRate: baudRate
});

// Open the serial port
port.on('open', () => {
    console.log(`Serial port ${portName} is open.`);
});

// Log errors
port.on('error', (err) => {
    console.error('Error:', err);
});

// Listen for incoming data
port.on('data', (data) => {
    console.log('Received data:', data.toString());
});

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle POST requests to send G-code
app.post('/send-gcode', (req, res) => {
  const gcode = req.body.gcode;
  port.write(`${gcode}\n`, (err) => {
    if (err) {
      console.error('Error writing to serial port:', err.message);
      res.status(500).send('Error sending G-code');
    } else {
      console.log(`Sent command: ${gcode}`);
      res.send('G-code sent successfully');
    }
  });
});