const country = "Bangladesh";
const gmail = "dulal mia com";

const charAtIndex = country.charAt(6);
const startsWithHttps = country.startsWith("https");
const endsWithAt = country.endsWith("@");
const slicedCountry = country.slice(5, 15);
const firstPartOfGmail = gmail.split(" ")[0];

const names = gmail.split(" ");
const joinName = names.join("@");

const upperCaseCountry = country.toUpperCase();
const lowerCaseCountry = country.toLowerCase();

// Log the results
console.log(charAtIndex);
console.log(startsWithHttps);
console.log(endsWithAt);
console.log(slicedCountry);
console.log(firstPartOfGmail);
console.log(joinName);
console.log(upperCaseCountry);
console.log(lowerCaseCountry);
