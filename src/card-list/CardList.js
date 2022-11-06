import Card from "../cards/Card";

const CardList = ({employees}) => (

    <div className="card-list">
    {employees.map((employees) => {
        return <Card key={employees.id}
                employees={employees} />;
    })}
    </div>

)

export default CardList;