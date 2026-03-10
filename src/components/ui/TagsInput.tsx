import React from "react";
import { Controller } from "react-hook-form";
import { X } from "lucide-react";
import type { Control } from "react-hook-form";

interface TagProps {
   children: React.ReactNode;
   className?: string;
   onDelete: () => void;
}

interface TagInputBaseProps {
   name: string;
   value: string[];
   hidelabel?: boolean;
   tagClassName?: string;
   onChange: (values: string[]) => void;
   onBlur: () => void;
}

interface TagInput {
   control: Control;
   name: string;
   tagClassName?: string;
   hidelabel?: boolean;
}

const Tag = ({ children, className = "", onDelete }: TagProps) => {
   return (
      <div className={`${className} px-2 py-1 flex items-center gap-x-1 bg-gray-100 rounded-full`}>
         <span className="text-gray-700">{children}</span>
         <button
            type="button"
            onClick={onDelete}
            className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-200 active:scale-75 transition-all "
         >
            <X className="w-2 h-2" />
         </button>
      </div>
   );
};

const TagsInputBase = React.forwardRef<HTMLInputElement, TagInputBaseProps>(
   (
      {
         name,
         value = [],
         hidelabel = false,
         tagClassName = "",
         onChange,
         onBlur,
      }: TagInputBaseProps,
      ref
   ) => {
      const handleKeyDown = (e: any) => {
         if (e.key === "Enter") {
            e.preventDefault();
            const inputValue = e.target.value?.trim();
            e.target.value = "";
            if (!value.includes(inputValue)) onChange([...value, inputValue]);
         }
      };

      const handleDelete = (tag: string) => {
         onChange(value.filter((t) => t !== tag));
      };

      return (
         <div className="space-y-1">
            {!hidelabel && (
               <label htmlFor={name} className="text-sm font-medium leading-6 text-gray-900">
                  Tags
               </label>
            )}

            <div className="flex items-center gap-2 flex-wrap">
               {value.map((tag) => (
                  <Tag key={tag} className={tagClassName} onDelete={() => handleDelete(tag)}>
                     {tag}
                  </Tag>
               ))}

               <input
                  type="text"
                  ref={ref}
                  id={name}
                  name={name}
                  enterKeyHint="done"
                  placeholder="add label"
                  onKeyDown={handleKeyDown}
                  onBlur={onBlur}
                  className="ml-2 text-sm text-gray-900 outline-none bg-transparent"
               />
            </div>
         </div>
      );
   }
);

const TagsInput = ({ control, name, tagClassName = "text-xs", hidelabel = false }: TagInput) => {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={[]}
         rules={{ validate: (value) => value.length > 0 || "At least one label is required" }}
         render={({ field }) => (
            <TagsInputBase
               name={name}
               tagClassName={tagClassName}
               ref={field.ref}
               value={field.value || []}
               hidelabel={hidelabel}
               onChange={field.onChange}
               onBlur={field.onBlur}
            />
         )}
      />
   );
};

export default TagsInput;
