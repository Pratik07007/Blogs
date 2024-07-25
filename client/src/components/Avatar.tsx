import { CgProfile } from "react-icons/cg";

const Avatar = ({ name, size}: { name?: string; size?: number }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-slate-500 px-4 py-4 rounded-full cursor-pointer`}
    >
      <span className="text-2xl font-medium text-black">
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
