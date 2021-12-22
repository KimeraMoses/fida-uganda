import { CircularProgress, Button } from "@mui/material";

function SubmitButton({ loading, isDisabled }) {
  return (
    <>
      {loading ? (
        <CircularProgress size={24} sx={{ alignSelf: "center" }} />
      ) : (
        <Button type="submit" variant="contained" disabled={isDisabled}>
          Sign In
        </Button>
      )}
    </>
  );
}

export default SubmitButton;
