const days = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
   27, 28, 29, 30, 31,
];

export const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDaysOfWeek = (firstDayOfWeek: number) => [
   ...daysOfWeek.slice(firstDayOfWeek),
   ...daysOfWeek.slice(0, firstDayOfWeek),
];

const getDay = (date: number, month: number, year: number, firstDayOfWeek: number) => {
   return (new Date(year, month - 1, date).getDay() - firstDayOfWeek + 7) % 7;
};

const getDaysInMonth = (year: number, month: number) => {
   if (month < 1) month++;
   const previousYear = month === 1 ? year - 1 : year;

   const daysInCurrentMonth = new Date(year, month, 0).getDate();
   const daysInPreviousMonth = new Date(previousYear, month - 1, 0).getDate();
   return { daysInCurrentMonth, daysInPreviousMonth };
};

export const generateCalendar = (month: number, year: number, firstDayOfWeek: number) => {
   const { daysInCurrentMonth, daysInPreviousMonth } = getDaysInMonth(year, month);

   const firstDay = getDay(1, month, year, firstDayOfWeek);
   const lastDay = getDay(daysInCurrentMonth, month, year, firstDayOfWeek);

   return [
      // previous month days
      days.slice(daysInPreviousMonth - firstDay, daysInPreviousMonth),
      // current month days
      days.slice(0, daysInCurrentMonth),
      // next month days
      days.slice(0, 6 - lastDay),
   ];
};
