import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="col-span-1 grid grid-cols-1 sm:grid-cols-[6.4rem_1fr] grid-rows-[auto_auto_auto] bg-secondary-0 p-4 rounded-lg gap-x-4 gap-y-2">
      <div
        className={`flex items-center justify-center p-2 aspect-square rounded-full ${colors[color]} w-14 h-14 sm:w-16 sm:h-16`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-base  self-center">
        {title}
      </h5>
      <p className="text-2xl md:text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
