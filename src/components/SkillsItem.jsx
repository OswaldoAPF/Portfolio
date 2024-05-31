
export const SkillsItem = ({ text, icon, color }) => {
  return (
    <div className="tag shadow-custom-1 cursor-default bg-slate-500 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-200 dark:text-gray-200">
      <span style={{color: color}}>{icon}</span>{text}
    </div>
  );
};