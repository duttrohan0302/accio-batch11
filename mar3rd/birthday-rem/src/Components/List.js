import React from "react";

const List = ({ people, removeThisPerson }) => {


    return (
        <>
            {
                people.map((person,index) => {

                    const { id, name, age, image } = person;

                    return (
                        <div key={index} className="person">
                            <img src={image} alt={name} />
                            <div className="name">
                                <h4>{name}
                                    {' '}
                                    <i style={{ color: "red" }} className="fa fa-times" aria-hidden="true" onClick={()=>removeThisPerson(id)}></i>
                                </h4>
                                <p>{age} years</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;