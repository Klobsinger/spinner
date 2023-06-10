const spinny = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']

let index = 0;

const spinner = function() {
  if (index < spinny.length) {
    process.stdout.write(spinny[index]);
    index++;
    setTimeout(spinner, 200);
  }
};
spinner();