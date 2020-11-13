import React from "react"
import {shallow, mount} from "enzyme"
// Component.
import GridComponent from "./components/Grid/GridComponent"
import App from "./App"

describe("App root component", ()=>{
    let container: any;

    beforeEach(()=>(
        container = shallow(<App/>)
    ))

    it("testing UI of <App/>", ()=>{
        expect(container).toMatchSnapshot()
    })

    it("at least one div to be found", ()=>{
        expect(container.find("div").length).toEqual(1)
    })

    it("check if Grid component has been rendered", ()=>{
        expect(container.containsMatchingElement(<GridComponent/>)).toEqual(true)
    })
})