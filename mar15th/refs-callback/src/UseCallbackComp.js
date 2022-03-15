import React,{ useState,useCallback } from "react"

const UseCallbackComp = () => {

    const [skill,setSkill] = useState("");
    const [skills,setSkills] = useState(["HTML","CSS","JavaScript","React"])

    const handleChangeInput = (e) => {

        setSkill(e.target.value)
    }

    const handleAddSkill = () => {
        setSkills(skills.concat(skill))
    }

    // const handleRemoveSkill = (skill) => {
    //     setSkills(skills.filter(s=>s!==skill))

    // }
    const handleRemoveSkill = useCallback((skill) => {
        setSkills(skills.filter(s=>s!==skill))
    },[skills])

    return(
        <>
            <input type="text" onChange={handleChangeInput}/>
            <button onClick={handleAddSkill}>Add Skill</button>
            <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill}/>
        </>
    )
}

export default UseCallbackComp



const SkillList = React.memo(({skills,handleRemoveSkill}) => {
    console.log("rerendering")
    return(
        <ul>
            {
                skills.map((skill,i)=>(<li key={i}
                    onClick={()=>handleRemoveSkill(skill)}
                >
                    {skill}
                    
                    </li>))
            }
        </ul>
    )
})


