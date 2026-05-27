import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface NavbarDropdownProps {
  label: string;
  items: {
    title: string;
    description?: string;
    href: string;
  }[];
  className?: string;
  mobile?: boolean;
}

const NavbarDropdown = ({
  label,
  items,
  className,
  mobile = false,
}: NavbarDropdownProps) => {
  const [open, setOpen] = useState(false);

  /* MOBILE VERSION */
  if (mobile) {
    return (
      <div className="w-full border-b border-white/10 pb-2">
        <button onClick={() => setOpen(!open)} className=" flex w-full items-center justify-between py-3 text-left">
          <span>{label}</span>

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={cn( "transition-transform duration-200", open && "rotate-180" )}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={cn( "overflow-hidden transition-all duration-300", open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0" )}>
          <div className="mt-2 flex flex-col gap-2 pl-2">
            {items.map((item) => (
              <a key={item.title} href={item.href} className="rounded-xl p-3 text-sm transition-all hover:bg-white/5 ">
                <div className="font-medium">{item.title}</div>

                {item.description && (
                  <div className="mt-1 text-xs text-white/60">
                    {item.description}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* DESKTOP VERSION */
  return (
    <div className="relative group">
      <button
        className={cn(
          "flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-white/5",
          className
        )}
      >
        {label}

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-hover:rotate-180">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      <div
        className=" invisible absolute left-1/2 top-full z-50 mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-3 opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className=" rounded-xl p-3 transition-all duration-200 hover:bg-white/5"
            >
              <div className="font-medium">{item.title}</div>

              {item.description && (
                <div className="mt-1 text-sm text-white/60">
                  {item.description}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;