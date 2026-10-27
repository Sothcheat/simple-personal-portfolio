import SkillBadge from "./SkillBadge";

function SkillList({ skills }) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
                //  { id: 1, name: "HTML", level: 5 },
                <SkillBadge key={skill.id} name={skill.name} level={skill.level} />
            ))}
        </div>
    );
}

export default SkillList;
