import Parts from "./Parts"

const Content = ({ details }) => {

    const parts = details.map((details, i) => <Parts key={i} {...details} />)

    return (
        <div>
            {parts}
        </div>
    )
}
export default Content