import { CgProfile } from "react-icons/cg";

const Avatar = ({ name, size = 24 }: { name?: string; size?: number }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-slate-500 rounded-full cursor-pointer`}
    >
      <span className="text-2xl font-medium text-gray-600 ">
        {name ? (
          name[0].toUpperCase()
        ) : (
          <CgProfile className="font-medium text-2xl text-black" />
        )}
      </span>
    </div>
  );
};

export default Avatar;
