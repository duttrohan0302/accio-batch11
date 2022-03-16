import React from 'react';
import ContextComp from './ContextComp';
import ReducerComp from './ReducerComp';
import ReducerComp2 from './ReducerComp2';


const App = () => {


    return(
        <div>
            <h2>use Context Hook</h2>
            <ContextComp />
            <h2>use Reducer Hook</h2>
            <ReducerComp />
            <ReducerComp2 />
        </div>
    )

}

export default App;
