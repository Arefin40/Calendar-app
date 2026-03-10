import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import CalendarGrid from "@/components/common/CalendarGrid";

interface propsTypes {
   params: {
      date: string[];
   };
}

export default function Home({ params }: propsTypes) {
   const date = params.date ? new Date(params.date.join("/")) : new Date();
   return (
      <>
         <Header date={date} />

         <main className="h-[calc(100vh-4rem)] flex">
            <Sidebar />

            <section className="p-3 w-full h-full">
               <CalendarGrid date={date} />
            </section>
         </main>
      </>
   );
}
