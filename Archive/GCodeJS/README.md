# Send gcode from the web

## Prerequisite

Install node and serialport

```bash
npm install -g serialport
npm install -g express
```

Upload [grbl](https://github.com/bdring/Grbl_Pen_Servo) file to arduino. Servo signal pin to Z+

## Run

Check serialport interface name of Arduino and adapt server.js in line:

```js
const portName = '/dev/cu.usbmodem11101';
```


```bash
node server.js
```

open web-browser and go to link [http://localhost:8000/](http://localhost:8000/)
