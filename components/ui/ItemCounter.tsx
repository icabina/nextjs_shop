import React, { FC } from "react";
import { RemoveCircleOutlined, AddCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface Props {}
export const ItemCounter: FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>

      <IconButton>
        <RemoveCircleOutlined/>
      </IconButton>
      <Typography sx={{
        width: 40,
        textAlign: 'center',
        color: '#000'}}>
1
        </Typography>
        <IconButton>
        <AddCircleOutlined/>
      </IconButton>
    </Box>
  );
};
