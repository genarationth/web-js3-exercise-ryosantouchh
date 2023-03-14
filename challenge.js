const rubricGrade = (score) => {
  score > 11
    ? console.log("max score is 11. please re-calculate.")
    : score === 11
    ? console.log("Perfect")
    : score > 8
    ? console.log("Excellent")
    : score >= 5
    ? true
    : false;
};
