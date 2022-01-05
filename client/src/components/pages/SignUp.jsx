import BackgroundTemplate from "../common/BackgroundTemplate";
import SignUpForm from "../forms/SignUpForm";
import image from "../../defaultData/images/1.jpeg";

function SignUp() {
  return (
    <BackgroundTemplate image={image}>
      <SignUpForm />
    </BackgroundTemplate>
  );
}

export default SignUp;
