/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thur = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

function isWeekend(day: DayOfWeek): boolean {
  if (day === DayOfWeek.Sat || day === DayOfWeek.Sun) {
    return true;
  }
  return false;
}
