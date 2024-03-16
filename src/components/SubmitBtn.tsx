import { useNavigation } from "react-router-dom";

function SubmitBtn() {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "submitting") {
    return (
      <button
        disabled
        className="btn btn-primary btn-block'"
        type="submit"
      ></button>
    );
  }
}

export default SubmitBtn;
