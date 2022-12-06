// let start = 0 
// let min = []
// while (start<=59){
//     min.push(start++);
// }
let num = prompt("Введите число от0 до 59")
// let min = 0
// let max = 59
// function selfRandom(min, max)
// {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// alert(`Получилось число ${num}`)

if (num<=15) {
    alert(`Введенное число попадает в первую четверть`)
}  else if ((num>15)&&(num<=30)) {
    alert(`Введенное число попадает во вторую четверь`)
} else if ((num>30)&&(num<=45)) {
    alert(`Введенное число попадает в третью четверть`)
} else if ((num>45)&&(num<=59)){
    alert(`Введенное число попадает в четвертую четверть`)
}
