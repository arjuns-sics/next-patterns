import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import CSR from "./page"

jest.mock("server-only",()=>({}))
// import {mock} from "jest-mock-extended"
describe("CSR component",()=>{
    it("renders the component",()=>{
        render(<CSR/>)
        expect(screen.getByText("Rendering happens in browser • JS required")).toBeInTheDocument()
    })
    it("updates state on button click",()=>{
        render(<CSR/>)
        const button = screen.getByText("test")
        fireEvent.click(button)
        expect(screen.getByText("hi jest")).toBeInTheDocument()
    })
    it("snapshot test",()=>{
        const {container} = render(<CSR/>)
        expect(container).toMatchSnapshot()
    })
})