import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import { CustomNavLink } from "../../ui/CustomNavlLink";
import SidebarMenu from "../../ui/SidebarMenu";

function OwnerLayout() {
  return (
    <AppLayout>
      <SidebarMenu>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </SidebarMenu>
    </AppLayout>
  );
}
export default OwnerLayout;
