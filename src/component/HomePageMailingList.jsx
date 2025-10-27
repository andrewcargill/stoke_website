import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const HomePageMailingList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In future, send data to backend / Firestore
    setSubmitted(true);
  };

  return (
  <Box
  sx={{
    mt: 4,
    p: 3,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 2,
    maxWidth: 400,
    mx: "auto",
    textAlign: "center",
  }}
   className="move-main"
>
  <Box >
    {submitted ? (
      <Typography variant="h6" color="text.primary" >
        ✅ Thanks {name || "friend"}! You’ve been added to the mailing list.
      </Typography>
    ) : (
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom color="text.primary">
          Join Our Mailing List
        </Typography>

        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          color="white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ fontWeight: "bold", }}
        >
          Add Me
        </Button>
      </form>
    )}
  </Box>
</Box>

  );
};

export default HomePageMailingList;
