import './Common.css'

export default function UserCard({name,age,profession}){
    return (

        <div className="user">
            <h3>Name: {name}</h3>
            <h3>Age: {age} </h3>
            <h3>Profession: {profession}</h3>
        </div>
    )
}