import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

class Swagersee extends React.Component{

    render(){

        return(
            <div>
                <SwaggerUI url="http://localhost:4041" />
            </div>
        )
    }
}

export default Swagersee