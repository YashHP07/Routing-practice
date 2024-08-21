import React from 'react';

export class Allknown extends React.Component {
    constructor(){
        super();
        console.log(" constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")

        // it is using in API works--- componentDidMount()
    }

    render() {
        return (
            <>
              <h1>All About Component</h1>
            </>
        )
    }
}