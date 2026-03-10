import { getDaysOfWeek, generateCalendar } from "@/lib/dateUtils";
import { format, addMonths, subMonths } from "date-fns";
import { MotionSection } from "@/components/ui/Motion";
import DayBlock from "../ui/DayBlock";

interface CalendarGridProps {
   date: Date;
   year?: number;
   month?: number;
   firstDayOfWeek?: number;
}

const slideVariant = {
   hidden: { opacity: 0, scale: 1.05 },
   visible: { opacity: 1, scale: 1 },
};

const CalendarGrid = ({ date, firstDayOfWeek = 0 }: CalendarGridProps) => {
   const calendar = generateCalendar(date.getMonth() + 1, date.getFullYear(), firstDayOfWeek);
   const daysOfWeek = getDaysOfWeek(firstDayOfWeek);

   const formatMonthYear = (date: Date) => format(date, "y/M/");
   const monthAndYear = [
      formatMonthYear(subMonths(date, 1)), // previous month
      formatMonthYear(date), // current month
      formatMonthYear(addMonths(date, 1)), // previous month,
   ];

   return (
      <main className="h-full grid grid-rows-[auto,1fr] divide-y divide-lightBorder text-sm border border-lightBorder rounded-sm">
         <ul className="grid grid-cols-7 divide-x divide-lightBorder bg-slate-50 font-medium">
            {daysOfWeek.map((day) => (
               <li key={day} className="py-2 flex justify-center uppercase">
                  {day}
               </li>
            ))}
         </ul>

         <MotionSection
            key={monthAndYear[1]}
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="calendar grid grid-cols-7 row-span-6 max-h-full "
         >
            {calendar.map((chunk, i) =>
               chunk.map((day, j) => (
                  <DayBlock key={i + j} index={i} day={day} monthAndYear={monthAndYear[i]} />
               ))
            )}
         </MotionSection>
      </main>
   );
};
export default CalendarGrid;
