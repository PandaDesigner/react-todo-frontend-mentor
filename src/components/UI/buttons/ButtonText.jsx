/* eslint-disable react/prop-types */
export const ButtonText = ({ buttonTextName, ...restProps }) => {
  return (
    <button
      {...restProps}
      className="text-sm text-center transition-colors duration-150 text-slate-400 hover:text-blue-700 active:text-blue-600"
    >
      {buttonTextName}
    </button>
  );
};
