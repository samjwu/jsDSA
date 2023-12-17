function palindrome(str) {
  let filtered = str.replace(/[^\w]|_/g, "").toLowerCase();

  for (let i = 0; i < filtered.length / 2; i++) {
    if (filtered[i] != filtered[filtered.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
