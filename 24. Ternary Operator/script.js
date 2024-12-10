//Ternary Operator - faster way to right if else

passwordChecker = (ps) => {
  // if( ps===8){
  //     return 'Strong Password'
  // } else{
  //     return "Password should be 8 characters"
  // }

  //Instead of this, use ternary operator
  return ps.length === 8
    ? "Strong Password"
    : "Password should be 8 characters";
};

const res = passwordChecker("password");
console.log(res);
