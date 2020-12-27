function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }