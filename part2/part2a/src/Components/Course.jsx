import Header from "./Header"
import Content from "../Content"
import Total from "./Total"

const Course = ({ courses }) => {

    return (
        <div>
            <h1>Web development curriculum</h1>
            <Header heading1={courses[0].name} />
            <Content details={courses[0].parts} />
            <Total details={courses[0].parts} />
            <Header heading2={courses[1].name} />
            <Content details={courses[1].parts} />
            <Total details={courses[1].parts} />
        </div>
    )
}

export default Course
