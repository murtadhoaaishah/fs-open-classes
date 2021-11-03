

const Total = ({ details }) => {

    const total = details.reduce((sum, cur) => sum + cur.exercises, 0)
    console.log(total)
    return (
        <div>
            <p>Total of {total} exercises</p>
        </div>
    )
}

export default Total
