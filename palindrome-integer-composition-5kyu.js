/**

The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2 = 595.

There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums. Note that 1 = 0^2 + 1^2 has not been included as this problem is concerned with the squares of positive integers.

Given an input n, find the count of all the numbers less than n that are both palindromic and can be written as the sum of consecutive squares.

For instance: values(1000) = 11. See test examples for more cases.

 */

function values(high) {
  let rev = n => {
    let res = 0
    while (n > 0) {
      res = res * 10 + n % 10;
      n = (n / 10) | 0
    }
    return res;
  }

  let arr = [], n = 1;
  while (n * n < high) {
    let temp = n + 1, total = n * n + temp * temp;
    while (total < high) {
      if (total == rev(total)) arr.push(total)
      temp++
      total += temp * temp;
    }
    n++;
  }
  return (Array.from(new Set(arr))).length;
}

console.log(values(200))
console.log(values(400))
console.log(values(1000))

/****************** */

class InfiniteList {
  constructor(generator) {
    this.generator = generator()
    this.list = []
  }

  get(index) {
    for (let i = this.list.length; i <= index; i++) {
      this.list.push(this.generator.next())
    }
    return this.list[index]
  }
}

const cache = new InfiniteList(generateSpecialNums)

function* generateSpecialNums() {
  for (let i = 1; ; i++)
    if (satisfiesCondition(i))
      yield i
}

function satisfiesCondition(n) {
  return isPalindrome(n) && isSumOfConsecutiveSquares(n)
}

function isPalindrome(n) {
  const s = n.toString()
  for (let i = 0; i < s.length / 2 + 1; i++)
    if (s[i] !== s[s.length - 1 - i])
      return false

  return true
}

function isSumOfConsecutiveSquares(n) {
  for (let t = 1; t ** 2 < n; t++) {
    let terms = t, sum = 0

    for (sum = 0; sum < n; terms++)
      sum += terms ** 2

    if (terms > 1 && sum === n) return true;
  }
  return false
}

function values(n) {
  for (let i = 0; ; i++)
    if (cache.get(i).value >= n)
      return i
}


function values(n) {
  let result = [];
  let num = 1, start = 2, sum = 0, cont = 1;
  cancelPolidromios: while (true) {
    sum = 0;
    start++;
    cont = 1;
    num = 1;
    while (true) {
      sum = 0;
      for (let i = 0; i < start - 1; i++) sum += (num + i) ** 2;
      if (cont == 1) {
        if (sum > n) break cancelPolidromios;
        cont++;
      }
      if (sum > n) break;
      if (getCapicua(sum)) {
        if (result.indexOf(sum) == -1) result.push(sum);
      }
      num++;
    }
  }
  return result.length;
}

function getCapicua(n) {
  let newN = parseInt(n.toString().split('').reverse().join(''));
  if (newN == n) return true;
  return false;
}


/************** */

function values(n) {
  let result = [];
  let num = 1, start = 2, sum = 0, cont = 1;
  cancelPolidromios: while (true) {
    sum = 0;
    start++;
    cont = 1;
    num = 1;
    while (true) {
      sum = 0;
      for (let i = 0; i < start - 1; i++) sum += (num + i) ** 2;
      if (cont == 1) {
        if (sum > n) break cancelPolidromios;
        cont++;
      }
      if (sum > n) break;
      if (getCapicua(sum)) {
        if (result.indexOf(sum) == -1) result.push(sum);
      }
      num++;
    }
  }
  return result.length;
}

function getCapicua(n) {
  let newN = parseInt(n.toString().split('').reverse().join(''));
  if (newN == n) return true;
  return false;
}