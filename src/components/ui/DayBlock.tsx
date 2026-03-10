"use client";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import TagsInput from "./TagsInput";

interface propsTypes {
   monthAndYear: string;
   day: number;
   index: number;
}

const DayBlock = ({ monthAndYear, day, index }: propsTypes) => {
   const { handleSubmit, register, control } = useForm();

   return (
      <Popover>
         <PopoverTrigger
            data-date={monthAndYear + day}
            className={cn(
               "day border-lightBorder p-2 grid content-start space-y-1 max-h-full overflow-hidden",
               { "text-gray-400": index !== 1 }
            )}
         >
            <h4 className="">{day}</h4>
            {index === 1 && (
               <ul className="space-y-1 max-h-full overflow-y-auto">
                  {Array.from({ length: 12 })
                     .slice(0, 3)
                     .map((_, i) => (
                        <li key={i} className="py-1 w-full bg-slate-50">
                           Content
                        </li>
                     ))}
               </ul>
            )}
         </PopoverTrigger>

         <PopoverContent className="w-96 space-y-2 text-sm text-gray-600">
            <div className="space-y-2">
               <div className="grid grid-cols-3 gap-x-4">
                  <div className="flex items-center gap-x-3">
                     <h4>Priority</h4>
                     <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-rose-100 text-rose-800">
                        High
                     </span>
                  </div>
                  <div className="flex items-center gap-x-3 col-span-2">
                     <h4>Tag</h4>
                     <div className="flex items-center gap-x-2">
                        <div className={`w-3.5 h-3.5 rounded-full bg-rose-500 flex-shrink-0`} />
                        <span>Rose</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-x-4">
                  <h4 className="text-gray-600">Labels:</h4>
                  <TagsInput hidelabel name="labels" control={control} />
               </div>
            </div>
            <div className="max-w-full py-2 space-y-1 border-y border-lightBorder">
               <div className="max-w-full flex items-center gap-x-2">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="flex items-center gap-x-1">
                     <input
                        type="text"
                        name="start_date"
                        id="start_date"
                        placeholder="Date"
                        value={format(new Date(), "dd/MM/yy")}
                        className="inline-block max-w-[4.625rem] px-2 py-1 outline-none rounded-sm text-gray-700 hover:bg-slate-100"
                     />
                     <span className="text-slate-500">–</span>
                     <input
                        type="text"
                        name="start_time"
                        id="start_time"
                        placeholder="Time"
                        value="12:00 PM"
                        className="inline-block max-w-[4.8125rem] px-2 py-1 outline-none rounded-sm text-gray-700 hover:bg-slate-100"
                     />
                  </div>
               </div>

               <div className="flex items-center gap-x-2">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="flex items-center gap-x-1">
                     <input
                        type="text"
                        name="deadline_date"
                        id="deadline_date"
                        placeholder="Date"
                        value={format(new Date(), "dd/MM/yy")}
                        className="inline-block max-w-[4.625rem] px-2 py-1 outline-none rounded-sm text-gray-700 hover:bg-slate-100"
                     />
                     <span className="text-slate-500">–</span>
                     <input
                        type="text"
                        name="deadline_time"
                        id="deadline_time"
                        placeholder="Time"
                        value="12:00 PM"
                        className="inline-block max-w-[4.8125rem] px-2 py-1 outline-none rounded-sm text-gray-700 hover:bg-slate-100"
                     />
                  </div>
               </div>
            </div>
         </PopoverContent>
      </Popover>
   );
};
export default DayBlock;
