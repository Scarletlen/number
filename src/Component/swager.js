import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

class Swagersee extends React.Component{

    render(){

        return(
            <div>
                <SwaggerUI url="https://my-json-server.typicode.com/Scarletlen/number/db" />
            </div>
        )
    }
}

export default Swagersee