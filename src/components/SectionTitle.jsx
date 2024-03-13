export const SectionTitle = ({ children, id }) => {
  return (
    <h1
      id={ id && id }
      className="text-2xl mb-5 font-bold text-indigo-700 z-[1]"
    >
      { children }
    </h1>
  );
};
