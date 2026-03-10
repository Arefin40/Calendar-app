import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfMonth, subMonths, addMonths } from "date-fns";

const Header = ({ date }: { date: Date }) => {
   const formatDate = (date: Date) => format(date, "y/M/d");
   const firstDateOfPreviousMonth = formatDate(startOfMonth(subMonths(date, 1)));
   const firstDateOfNextMonth = formatDate(startOfMonth(addMonths(date, 1)));

   return (
      <header className="h-16 col-span-2 grid grid-cols-[18.5rem,1fr]">
         <aside className="px-5 flex items-center justify-between gap-4 bg-slate-50/75">
            <h1 className="font-extrabold text-2xl text-gray-900">Calendar</h1>

            <div className="flex items-center gap-x-1">
               <Link
                  replace
                  href={`/calendar/${firstDateOfPreviousMonth}`}
                  className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-sm active:scale-90 transition-all hover:bg-gray-100 group"
               >
                  <ChevronLeft className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
               </Link>

               <Link
                  replace
                  href={`/calendar`}
                  className="px-3 h-8 flex items-center border border-gray-200 rounded-sm active:scale-90 transition-all hover:bg-gray-100"
               >
                  Today
               </Link>

               <Link
                  replace
                  href={`/calendar/${firstDateOfNextMonth}`}
                  className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-sm active:scale-90 transition-all hover:bg-gray-100 group"
               >
                  <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
               </Link>
            </div>
         </aside>

         <main className="px-5 flex items-center justify-between border-b border-lightBorder">
            <div className="flex items-center gap-x-4">
               <h2 className="text-xl font-bold text-gray-800">
                  {format(date, "MMMM")} {format(date, "y")}
               </h2>
            </div>
         </main>
      </header>
   );
};
export default Header;
