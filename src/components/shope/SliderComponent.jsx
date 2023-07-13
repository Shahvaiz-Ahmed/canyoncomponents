import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { UserContext } from "../../UserContext";

const SliderComponent = () => {
  const { datax, updateData } = React.useContext(UserContext);

  //   useEffect(() => {
  //     search === "" && updateData({ ...datax, search: search });
  //   }, [search]);
  console.log(datax);
  const [value, setValue] = React.useState([-70, 360]);
  const handleRangeChange = (event, newValue) => {
    console.log(newValue);
    updateData({ ...datax, lowtemp: newValue[0], hightemp: newValue[1] });
    setValue(newValue);
    // props.setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={-70}
        max={360}
        style={{ color: "#724E38" }}
      />
      <Typography variant="subtitle1" gutterBottom>
        Temprature range:{" "}
        <strong>
          {" "}
          {value[0]}°C - {value[1]}°C
        </strong>
      </Typography>
    </Box>
  );
};

export default SliderComponent;
