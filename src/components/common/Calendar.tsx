"use client";
import { useState } from "react";
import { Calendar as CalendarBase } from "@/components/ui/calendar";

const Calendar = () => {
   const [date, setDate] = useState<Date | undefined>(new Date());

   return <CalendarBase mode="single" selected={date} onSelect={setDate} />;
};
export default Calendar;
