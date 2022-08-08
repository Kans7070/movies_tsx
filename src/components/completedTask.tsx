import { Box, Typography } from "@mui/material";
import React from "react";
import { subHeading } from "../utils/styles";

const CompletedTask: React.FC = () => {
  return (
    <Box width="50%" textAlign="center">
      <Typography variant="h5" sx={subHeading}>
        Completed Tasks
      </Typography>
    </Box>
  );
};

export default CompletedTask;
