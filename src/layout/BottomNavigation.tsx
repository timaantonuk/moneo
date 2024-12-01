import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useNavigate } from "react-router-dom";

export default function BottomNavigationElement() {
  const [value, setValue] = React.useState("dashboard");
  const navigate = useNavigate();
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{
        width: { md: "80%", xs: "100%" },
        borderRadius: 5,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Dashboard"
        value="dashboard"
        icon={<BarChartIcon />}
      />
      <BottomNavigationAction
        label="Categories"
        value="categories"
        icon={<PieChartIcon />}
      />
      <BottomNavigationAction
        label="Transactions"
        value="transactions"
        icon={<AddCardIcon />}
      />
    </BottomNavigation>
  );
}
