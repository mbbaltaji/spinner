let spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r-  ', '\r|  '];
let time = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}

