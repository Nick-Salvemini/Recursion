/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }

  if (words.length === 1) {
    return words[0].length;
  }

  const restMaxLength = longest(words.slice(1));
  const firstWordLength = words[0].length;

  return Math.max(firstWordLength, restMaxLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str
  }

  return str[0] + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (str.length <= 1) {
    return true
  }

  if (str[0] !== str[str.length - 1]) {
    return false
  }

  return isPalindrome(str.substring(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function search(currentIdx) {
    if (currentIdx >= arr.length) {
      return -1;
    }

    if (arr[currentIdx] === val) {
      return currentIdx;
    }

    return search(currentIdx + 1);
  }
  return search(0)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str
  }

  return revString(str.substring(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];

  function traverse(currObj) {
    for (let key in currObj) {
      if (typeof currObj[key] === 'string') {
        stringArr.push(currObj[key])
      } else if (typeof currObj[key] === 'object' && currObj[key] !== null) {
        traverse(currObj[key])
      }
    }
  }

  traverse(obj);

  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function search(low, high) {
    if (low > high) {
      return -1;
    }

    const mid = Math.floor((low + high) / 2);
    const midVal = arr[mid];

    if (midVal === val) {
      return mid;
    } else if (midVal < val) {
      return search(mid + 1, high);
    } else {
      return search(low, mid - 1);
    }
  }
  return search(0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
