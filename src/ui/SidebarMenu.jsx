function SidebarMenu({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
export default SidebarMenu;
