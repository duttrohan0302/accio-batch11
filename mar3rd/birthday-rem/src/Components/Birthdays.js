import React, { Component } from "react"
import data from "./../Resources/data";
import List from "./List";

class Birthdays extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: [],
            loading: true
        }

        this.clearAll = this.clearAll.bind(this)
        this.removeThisPerson = this.removeThisPerson.bind(this)
    }
    async componentDidMount() {
        const readDataPeople = await this.readData()
        if (readDataPeople.length) {
            this.setState({ people: readDataPeople,loading:false })
        }
    }

    //backend function which returns the data
    async readData() {
        return new Promise((resolve, reject) => {

            setTimeout(() => resolve(data), 4000)
        })
    }

    clearAll() {
        this.setState({ people: [] })
    }

    removeThisPerson = (id) => {
        this.setState({ people: this.state.people.filter(peeps => peeps.id !== id) })
        // people = people.filter(peep=>peep.id!==id)
    }
    render() {

        return (
            <main>
                <section className="container">
                    {
                        this.state.loading ?

                            <h3>Loading...</h3>
                            :
                            <>
                                <h3>{this.state.people.length} Birthdays Today</h3>
                                <List people={this.state.people} removeThisPerson={this.removeThisPerson} />
                                <button onClick={this.clearAll}>Clear All</button>
                            </>

                    }

                </section>
            </main>
        )
    }
}

export default Birthdays