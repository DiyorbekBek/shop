import { useNavigation } from "react-router-dom";
type Text = {
  text: string;
};
function SubmitBtn({ text }: Text) {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "submitting") {
    return (
      <button disabled className="btn btn-primary btn-block'" type="submit">
        if (isSubmitting)
        {<span className="loading loading-spinner loading-md"></span>} else{" "}
        {`${text}`}
      </button>
    );
  }
}

export default SubmitBtn;
