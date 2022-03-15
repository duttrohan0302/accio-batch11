import React from 'react';
import UseRefComp from './UseRefComp';
import UseCallbackComp from './UseCallbackComp';

const App = () => {

    return(
        <div>
            <h2>use Ref Hook</h2>
            {/* <UseRefComp /> */}
            <h2>use Callback Hook</h2>
            <UseCallbackComp />
        </div>
    )

}

export default App;
