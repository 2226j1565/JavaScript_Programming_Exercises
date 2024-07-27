function is_valid_variable(name) {
 
  const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

  return regex.test(name);
}

console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name')); 
console.log(is_valid_variable('1first_name')); 
console.log(is_valid_variable('firstname')); 
