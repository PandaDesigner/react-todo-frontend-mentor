/* eslint-disable react/prop-types */
export const ButtonText = ({ buttonTextName }) => {
  return (
    <button className="text-sm text-center text-slate-400 hover:text-blue-700 active:text-blue-600">
      {buttonTextName}
    </button>
  );
};
