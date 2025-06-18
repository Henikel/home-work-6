function averageSalary(salaries) {
  let total = 0;
  let count = 0;

  for (let key in salaries) {
    total += salaries[key];
    count++;
  }

  return count === 0 ? 0 : total / count;
}

console.log(averageSalary(salaries1));
console.log(averageSalary(salaries2));

