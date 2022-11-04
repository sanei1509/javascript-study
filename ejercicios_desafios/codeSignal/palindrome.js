// SI ES PALINDROME DEVULVE 1 SINO 0
const palindrome = (string) => {
  const cleanString = string.toLowerCase();
  const reverseString = cleanString.split("").reverse().join("");

  return cleanString === reverseString ? "Es palindrome!" : "No es palindrome!";
};

console.log(palindrome("Ana"));

console.log(palindrome("rixhE"));
