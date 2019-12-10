class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  
  startClick() {
    this.intervalId = setInterval(addSecond, 1000);
    
    function addSecond() {
      let i = 0;
      i++;
      this.currentTime = i;
    }
  }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}