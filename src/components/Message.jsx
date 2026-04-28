function Message({ text, type }) {
  const style = {
    color: type === "success" ? "green" : "red",
    fontWeight: "bold",
  }

  return <p style={style}>{text}</p>
}
export default Message