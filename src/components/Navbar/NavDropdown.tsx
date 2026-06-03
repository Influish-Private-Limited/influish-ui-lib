  import React, { useState } from "react";
  import { cn } from "../../utils/cn";

  export interface DropdownItem {
    title: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
  }

  export interface NavbarDropdownProps {
    label: string;
    items: DropdownItem[];
    className?: string;
    mobile?: boolean;
  }

  const ChevronIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
      className={cn("transition-transform duration-200 shrink-0", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const NavbarDropdown = ({ label, items, className, mobile = false }: NavbarDropdownProps) => {
    const [open, setOpen] = useState(false);

    // ─── MOBILE accordion ──────────────────────────────────────────────────────
    if (mobile) {
      return (
        <div className="w-full border-b border-[var(--it-border-default,#e5e7eb)] pb-1">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
            aria-expanded={open}
          >
            <span>{label}</span>
            <ChevronIcon className={cn(open && "rotate-180")} />
          </button>

          <div className={cn(
            "overflow-hidden transition-all duration-300",
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="mt-1 flex flex-col gap-0.5 pl-2 pb-2">
              {items.map((item) => (
                <a key={item.href} href={item.href}
                  className="flex items-start gap-3 rounded-xl p-3 text-sm transition-all hover:bg-black/5">
                  {item.icon && <span className="mt-0.5 shrink-0 opacity-60">{item.icon}</span>}
                  <div>
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="mt-0.5 text-xs opacity-60">{item.description}</div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // ─── DESKTOP hover dropdown ────────────────────────────────────────────────
    return (
      <div className={cn("relative group", className)}>

        <button className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-black/5 whitespace-nowrap">
          {label}
          <ChevronIcon className="group-hover:rotate-180" />
        </button>

        <div className="absolute left-0 top-full h-4 w-full" />

        <div className={cn(
          "absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] z-[999]",
          "w-[260px]",
          "rounded-2xl border border-[var(--it-border-default,#e5e7eb)]",
          "bg-[var(--it-bg-paper,#ffffff)] shadow-xl",
          "p-2",
          "pointer-events-none opacity-0 translate-y-2",
          "transition-all duration-200 ease-out",
          "group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0"
        )}>
          <div className="flex flex-col gap-0.5">
            {items.map((item) => (
              <a key={item.href} href={item.href}
                className="flex items-start gap-3 rounded-xl p-3 transition-all duration-150 hover:bg-black/5">
                {item.icon && <span className="mt-0.5 shrink-0 opacity-60">{item.icon}</span>}
                <div>
                  <div className="text-sm font-medium text-[var(--it-text-primary,#111)]">{item.title}</div>
                  {item.description && (
                    <div className="mt-0.5 text-xs text-[var(--it-text-secondary,#666)]">{item.description}</div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default NavbarDropdown;