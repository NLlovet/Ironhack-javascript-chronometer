class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick() {
    this.intervalId = setInterval( () => {
       this.currentTime += 1;
    }, 1000);
  }  
  
   getMinutes() {
    if (this.currentTime > 59) {
      return Math.floor(this.currentTime / 60);
      }
     return 0;
    }
    //THIS IS MILLISECONDS
    getSeconds() {      
      return this.currentTime % 60;
    }

  twoDigitsNumber(value) {
    
  return (value < 10) ? '0' + value.toString() : value.toString();

  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    console.log(`Current time is now ${this.currentTime}`);
    this.intervalId = 0;
    console.log(`Interval ID is now ${this.intervalId}`);
  }
  // splitClick() {}
}