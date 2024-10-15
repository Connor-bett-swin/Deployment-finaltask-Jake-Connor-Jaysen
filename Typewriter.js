class Typewriter {
    constructor(text, onCharAdd, onComplete, delay = 60, newlineDelay = 1000, resetDelay = 3000) {
        this.text = text;
        this.onCharAdd = onCharAdd;
        this.onComplete = onComplete;
        this.delay = delay;
        this.newlineDelay = newlineDelay;
        this.resetDelay = resetDelay;
        this.index = 0;
        this.typing = false;
    }

    start() {
        this.typing = true;
        this.typeCharacter();
    }

    typeCharacter() {
        if (this.index < this.text.length) {
            const char = this.text.charAt(this.index);
            this.onCharAdd(char);
            this.index++;

            const delay = (char === '\n') ? this.newlineDelay : this.delay;
            setTimeout(() => this.typeCharacter(), delay);
        } else {
            this.typing = false;
            setTimeout(() => this.reset(), this.resetDelay);
        }
    }

    reset() {
        this.index = 0;
        this.onComplete();
        this.start();
    }

    stop() {
        this.typing = false;
    }
}

module.exports = Typewriter;
