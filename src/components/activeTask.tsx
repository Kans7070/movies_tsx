import { Box, Typography } from "@mui/material";
import React from "react";
import { subHeading } from "../utils/styles";

const ActiveTask: React.FC = () => {
  return (
    <Box width="50%">
      <Typography variant="h5" sx={subHeading}>
        Active Tasks
      </Typography>
    </Box>
  );
};

export default ActiveTask;
