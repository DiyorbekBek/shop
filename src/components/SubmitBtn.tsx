import { useNavigation } from "react-router-dom";

type SubmitBtn = {
  text?: string;
};
const SubmitBtn = ({ text }: SubmitBtn) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
