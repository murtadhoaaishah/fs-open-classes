

const Parts = ({ id, name, exercises }) => {


    return (
        <div key={id}>
            <span>{name}</span> <span>{exercises}</span>
        </div>
    )
}

export default Parts
