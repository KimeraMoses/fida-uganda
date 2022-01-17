import Chip from "../../common/Chip";

function Tags({ tags }) {
  if (!tags) {
    return null;
  }

  return (
    <>
      {tags.map((tag, idx) => (
        <Chip key={idx} text={tag} bgColor={"red.100"} />
      ))}
    </>
  );
}

export default Tags;
