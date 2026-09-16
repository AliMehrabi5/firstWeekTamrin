function findNumberOfVocab(jomle) {
  let number = 1;

  for (let i = 0; i < jomle.length; i++) {
    if (jomle[i] === " " && jomle[i+1] !== " ") {
      number++;
    }
  }
  return number;
}

console.log(findNumberOfVocab("hello how are you")); 
