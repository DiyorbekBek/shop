import { useNavigation } from "react-router-dom";
type Text = {
  text: string;
};
function SubmitBtn({ text }: Text) {
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
