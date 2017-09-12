function fibMemo(position, cache) {
  cache = cache || new Array; // This allows us to invoke our function with only the position argument -> fibMemo(20)
  if (cache[position]) return cache[position];
  else {
    if (position < 3) return 1;
    else {
      cache[position] = fibMemo(position - 1, cache) + fibMemo(position - 2, cache); // Difference from original algo is we are NOT returning anything // we are simply doing the calculations and storing each result in cache
    }
  }
  return cache[position];
};
