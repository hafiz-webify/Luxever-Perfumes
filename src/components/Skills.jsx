function Skills(props) {
  return (
    <div>
      <h3>{props.name}'s Skills:</h3>
      <ul>
        <li>
            {props.skill}
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default Skills