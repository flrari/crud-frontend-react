const Card = ({employees}) => {

    const {name, phone, jobTitle, email, employeeCode} = employees;

    return(
        <div className='employees-container'>
            <h1>{name}</h1>
            <h2>{jobTitle}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <h2>{employeeCode}</h2>
        </div>
    );
}

export default Card;