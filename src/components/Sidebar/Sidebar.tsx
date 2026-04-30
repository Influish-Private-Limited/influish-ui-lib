import React from "react";
import { cn } from "../../utils/cn";

export interface SidebarItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
  disabled?: boolean;
  children?: SidebarItem[];
}

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  items?: SidebarItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  collapsed?: boolean;
  responsive?: boolean;
  width?: number | string;
  variant?: "docked" | "floating";
}

const SidebarHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("p-5 border-b shrink-0 group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:py-4 flex items-center gap-3", className)} {...props} />
);

const SidebarNav: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <nav className={cn("flex-1 overflow-y-auto py-3 px-3", className)} {...props} />
);

const SidebarList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className, ...props }) => (
  <ul className={cn("flex flex-col gap-1 list-none m-0 p-0", className)} role="list" {...props} />
);

const SidebarFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("p-4 border-t mt-auto shrink-0 group-data-[collapsed=true]:justify-center flex items-center", className)} {...props} />
);

interface SidebarItemProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  badge?: string | number;
  href?: string;
  hasChildren?: boolean;
}

const SidebarItemComp: React.FC<SidebarItemProps> = ({
  label, icon, active, disabled, badge, href, hasChildren, children, className, onClick, ...props
}) => {
  const Tag = href ? "a" : "button";
  const [isOpen, setIsOpen] = React.useState(active);

  const handleToggle = (e: React.MouseEvent) => {
    if (hasChildren) setIsOpen(!isOpen);
    onClick?.(e as any);
  };

  return (
    <div className="flex flex-col relative group/item">
      {/* Active Indicator Bar */}
      {active && (
        <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-action-primary rounded-r-full z-10" />
      )}

      <Tag
        href={href}
        className={cn(
          "flex items-center gap-3 w-full px-3 py-2.5 border-none rounded-it-lg bg-transparent text-text-secondary font-base text-sm font-medium no-underline cursor-pointer text-left transition-all duration-200 whitespace-nowrap hover:bg-bg-subtle hover:text-text-primary",
          active && "bg-primary-500/10 text-action-primary font-semibold",
          disabled && "opacity-50 cursor-not-allowed",
          "group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:px-0",
          className
        )}
        onClick={handleToggle}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled}
        {...(Tag === "button" ? { type: "button" } : {})}
        {...props}
      >
        {icon && <span className="inline-flex items-center justify-center w-5 h-5 shrink-0 transition-transform group-hover/item:scale-110">{icon}</span>}
        <span className="flex-1 overflow-hidden text-ellipsis group-data-[collapsed=true]:hidden">{label}</span>
        {badge !== undefined && (
          <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full bg-action-primary text-white text-[0.625rem] font-bold shrink-0 group-data-[collapsed=true]:hidden shadow-sm">
            {badge}
          </span>
        )}
        {hasChildren && (
          <span
            className={cn(
              "inline-block w-1.5 h-1.5 border-r-[1.5px] border-b-[1.5px] border-current -rotate-45 transition-transform duration-200 ml-auto shrink-0 opacity-50 group-data-[collapsed=true]:hidden",
              isOpen && "rotate-45"
            )}
          />
        )}
      </Tag>
      {isOpen && children && (
        <ul className="list-none my-1 ml-9 p-0 flex flex-col gap-1 group-data-[collapsed=true]:hidden border-l border-border-default/50" role="list">
          {children}
        </ul>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> & {
  Header: typeof SidebarHeader;
  Nav: typeof SidebarNav;
  List: typeof SidebarList;
  Item: typeof SidebarItemComp;
  Footer: typeof SidebarFooter;
} = ({
  items,
  activeKey,
  onSelect,
  collapsed = false,
  responsive = false,
  width = 260,
  variant = "docked",
  className,
  children,
  style,
  ...rest
}) => {
    return (
      <aside
        data-collapsed={collapsed || undefined}
        className={cn(
          "flex flex-col h-full bg-bg-paper transition-[width,margin] duration-300 shrink-0 overflow-hidden group",
          variant === "docked" ? "border-r" : "m-4 rounded-it-xl shadow-it-lg border",
          (collapsed || responsive) && "w-[4.5rem] md:w-auto",
          !collapsed && !responsive && "w-[var(--sidebar-width)]",
          className,
        )}
        style={{
          ["--sidebar-width" as any]: typeof width === "number" ? `${width}px` : width,
          ...style
        }}
        aria-label="Sidebar navigation"
        {...rest}
      >
        {children}
        {items && (
          <SidebarNav>
            <SidebarList>
              {items.map((item) => (
                <SidebarItemComp
                  key={item.key}
                  label={item.label}
                  icon={item.icon}
                  active={activeKey === item.key}
                  disabled={item.disabled}
                  badge={item.badge}
                  href={item.href}
                  hasChildren={item.children && item.children.length > 0}
                  onClick={() => onSelect?.(item.key)}
                >
                  {item.children?.map((child) => (
                    <SidebarItemComp
                      key={child.key}
                      label={child.label}
                      active={activeKey === child.key}
                      onClick={() => onSelect?.(child.key)}
                    />
                  ))}
                </SidebarItemComp>
              ))}
            </SidebarList>
          </SidebarNav>
        )}
      </aside>
    );
  };

Sidebar.Header = SidebarHeader;
Sidebar.Nav = SidebarNav;
Sidebar.List = SidebarList;
Sidebar.Item = SidebarItemComp;
Sidebar.Footer = SidebarFooter;
Sidebar.displayName = "Sidebar";
