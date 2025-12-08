function Students({name="Guest",age="23",isStudents=false})
{
    return(
        <>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Student:{isStudents}</p>
        </>
    );
}
export default Students