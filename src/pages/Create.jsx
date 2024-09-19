import { Button, Container, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2">
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize="large"/>
      <AcUnitOutlinedIcon color='secondary' fontSize="small"/>
      <AcUnitOutlinedIcon color='action' fontSize="small"/>
      <AcUnitOutlinedIcon color='error' fontSize="small"/>
      <AcUnitOutlinedIcon color='disabled' fontSize="small"/> */}
    </Container>
  );
}
