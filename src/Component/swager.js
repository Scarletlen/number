import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

class Swagersee extends React.Component{

    render(){

        return(
            <div>
                <SwaggerUI url="https://github.com/Scarletlen/number/blob/main/test.json" />
            </div>
        )
    }
}

export default Swagersee