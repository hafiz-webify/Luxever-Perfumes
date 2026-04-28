function Profile(props) {
    return <div>
    <h3>Profile:</h3> 
    <br />
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Location:{props.location}</p><hr />
    </div>
}
export default Profile