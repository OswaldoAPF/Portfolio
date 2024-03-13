import { SectionTitle } from "./SectionTitle"
import { SkillsItem } from "./SkillsItem"
import skills from "../data/skills"

const carouselSkills = [ ...skills, ...skills ];

export const Skills = () => {
  return (
    <div id="skills" className="h-screen flex flex-col justify-center">
      <SectionTitle>Skills</SectionTitle>

      <div className="container w-full z-[1]">
        <div className="overflow-hidden w-full dark:bg-slate-800 bg-slate-300 rounded-lg shadow-custom-1">
          <div className="flex items-center whitespace-nowrap animate-scroll">
            {
              carouselSkills.map(( skill, index ) => (
                <SkillsItem
                  key={ index }
                  imgUrl={ skill.img }
                  name={skill.name }
                ></SkillsItem>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  )
}




