
export const Button = ({children}) => {
  return (
    <button
      type="button"
      className="w-50 text-xl text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg px-3 py-2.5 mr-2 mb-2 font-medium"
    >
      {children}
    </button>
  );
};

export default Button