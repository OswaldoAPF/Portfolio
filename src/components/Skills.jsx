import { SectionTitle } from "./SectionTitle"
import { InfiniteSlider } from "./InfiniteSlider";
import { SkillsItem } from "./SkillsItem"
import skills from "../data/skills"

const DURATION = 35000;
const ROWS = 5;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const Skills = () => {
  return (
    <div id="skills" className="py-10 my-10">
      <SectionTitle>Skills</SectionTitle>

      <div className="tag-list mask-custom-2  dark:mask-custom-1 py-5">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(skills)
            .slice(0, TAGS_PER_ROW)
            .map((skill) => (
              <SkillsItem text={skill.name} icon={skill.icon} key={skill.name} color={skill.color}/>
            ))}
        </InfiniteSlider>
      ))}
      </div>
    </div>
  )
}




