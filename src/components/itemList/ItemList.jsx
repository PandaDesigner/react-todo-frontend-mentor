import { CrossIcon } from "../icons/CrossIcon";

export const ItemList = () => {
  return (
    <article className="flex items-center justify-center gap-2 px-4 py-4 border-b border-b-slate-300">
      <button className="inline-block w-5 h-5 border border-gray-300 rounded-full"></button>
      <p className="text-sm grow text-slate-500">
        complete online js curse in bluuweb
      </p>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
};
