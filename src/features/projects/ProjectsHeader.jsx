import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-md md:text-xl">
        پروژه های شما
      </h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn font-bold btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span className="hidden md:block">اضافه کردن پروژه</span>
      </button>
    </div>
  );
}
export default ProjectsHeader;
