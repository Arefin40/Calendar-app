import { MotionAside } from "@/components/ui/Motion";
import Calendar from "@/components/common/Calendar";

const Sidebar = () => {
   const tags = [
      { name: "rose", color: "bg-rose-500" },
      { name: "green", color: "bg-emerald-500" },
      { name: "blue", color: "bg-sky-500" },
   ];

   return (
      <MotionAside className="p-5 w-[18.5rem] space-y-8 grid justify-items-start content-start flex-shrink-0 bg-slate-50/75">
         <Calendar />

         <ul className="text-sm space-y-3">
            <h4 className="mb-4 text-gray-900 font-semibold">Tags</h4>

            {tags.map(({ name, color }) => (
               <li key={name} className="flex items-center gap-x-2">
                  <div className={`w-3.5 h-3.5 rounded-full ${color} flex-shrink-0`} />
                  <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
               </li>
            ))}
         </ul>
      </MotionAside>
   );
};
export default Sidebar;
