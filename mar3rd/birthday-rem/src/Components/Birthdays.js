import React,{useEffect,useState} from "react"
import data from "./../Resources/data";
import List from "./List";

const Birthdays = () => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getPeopleFunc = async () => {
            const readDataPeople = await readData()
            if (readDataPeople.length) {
                setPeople(readDataPeople)
                setLoading(false)
            }  
        }
        getPeopleFunc()

    }, []);


    //backend function which returns the data
    const readData = async () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => resolve(data), 4000)
        })
    }

    const clearAll = () => {
        setPeople([])
    }

    const removeThisPerson = (id) => {
        setPeople(people.filter(peeps=>peeps.id!==id))
    }

        return (
            <main>
                <section className="container">
                    {
                        loading ?

                            <h3>Loading...</h3>
                            :
                            <>
                                <h3>{people.length} Birthdays Today</h3>
                                <List people={people} removeThisPerson={removeThisPerson} />
                                <button onClick={clearAll}>Clear All</button>
                            </>

                    }

                </section>
            </main>
        )
}

// class Birthdays extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             people: [],
//             loading: true
//         }

//         this.clearAll = this.clearAll.bind(this)
//         this.removeThisPerson = this.removeThisPerson.bind(this)
//     }
//     async componentDidMount() {
//         const readDataPeople = await this.readData()
//         if (readDataPeople.length) {
//             this.setState({ people: readDataPeople,loading:false })
//         }
//     }

//     //backend function which returns the data
//     async readData() {
//         return new Promise((resolve, reject) => {

//             setTimeout(() => resolve(data), 4000)
//         })
//     }

//     clearAll() {
//         this.setState({ people: [] })
//     }

//     removeThisPerson = (id) => {
//         this.setState({ people: this.state.people.filter(peeps => peeps.id !== id) })
//         // people = people.filter(peep=>peep.id!==id)
//     }
//     render() {

//         return (
//             <main>
//                 <section className="container">
//                     {
//                         this.state.loading ?

//                             <h3>Loading...</h3>
//                             :
//                             <>
//                                 <h3>{this.state.people.length} Birthdays Today</h3>
//                                 <List people={this.state.people} removeThisPerson={this.removeThisPerson} />
//                                 <button onClick={this.clearAll}>Clear All</button>
//                             </>

//                     }

//                 </section>
//             </main>
//         )
//     }
// }

export default Birthdays