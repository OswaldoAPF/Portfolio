
export const SkillsItem = ({ imgUrl, name }) => {
  return (
    <div className="h-full w-[100px] my-2 mx-6 flex-shrink-0">
      <div className="overflow-hidden relative">
        <span className=" w-10 h-5 absolute top-[-40px]">{name}</span>
        <img loading="lazy" src={imgUrl} alt={name}/>
      </div>
    </div>
  );
};