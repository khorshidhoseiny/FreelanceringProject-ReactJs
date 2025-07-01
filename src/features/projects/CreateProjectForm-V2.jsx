import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";

import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";
import RadioInputGroup from "../../ui/RadioInputGroup";
import useCategories from "../../hooks/useCategories";

function CreateProjectFormV2({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    deadline,
    tags: prevTags,
    category,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  console.log(editValues, "edit values");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();
  const { categories } = useCategories();
  const [date, setDate] = useState(new Date(deadline || ""));
  const [tags, setTags] = useState(prevTags || []);
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        required
        register={register}
        validationSchema={{
          required: "وارد کردن عنوان ضروری است!",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        required
        register={register}
        validationSchema={{
          required: "وارد کردن توضیحات ضروری است!",
          minLength: {
            value: 30,
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        required
        register={register}
        validationSchema={{
          required: "وارد کردن بودجه ضروری است!",
          min: {
            value: 5,
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
        required
      />

      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <div className="!mt-8">
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary font-bold w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}
export default CreateProjectFormV2;
