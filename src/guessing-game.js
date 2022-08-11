class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.low = min;
      this.top = max;  
    }

    guess() {
		return this.mid = Math.round((this.low + this.top) / 2);
    }

    lower() {
		this.top = this.mid;
    }

    greater() {
		this.low = this.mid;
    }
}

module.exports = GuessingGame;
