import { IoIosArrowDropdown } from "react-icons/io";
import Chip from "../../common/Chip";

function TodoSummary() {
  return (
    <>
      <Chip text="Court Case" bgColor="purple.100" icon={IoIosArrowDropdown} />
      <Chip text="Court Case" bgColor="purple.100" icon={IoIosArrowDropdown} />
      <Chip text="Court Case" bgColor="purple.100" icon={IoIosArrowDropdown} />
    </>
  );
}

export default TodoSummary;
