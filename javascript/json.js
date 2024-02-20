// javascipt object notation

/**
 * {
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isStudent": false,
  "grades": [85, 90, 88]
}
 */

// example of json

/**
 * json store the data in key value pair
 * the key is a string 
 * the value can be any type - number , string , boolean, array
 */


// parsing json ->
const jsonString = '{"name": "John Doe", "age": 30}';
const data = JSON.parse(jsonString);
console.log(data.name); // Outputs: John Doe

// generating json ->
const data = { name: "John Doe", age: 30 };
const jsonString = JSON.stringify(data);
console.log(jsonString); // Outputs: {"name":"John Doe","age":30}

// on whole json is the string that is the text format for sharing and storing the data.