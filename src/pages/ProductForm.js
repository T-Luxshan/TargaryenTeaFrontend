import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null, // Store the image file here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);

    // Form data structure
    const dataToSubmit = new FormData();
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("description", formData.description);
    dataToSubmit.append("price", formData.price);
    dataToSubmit.append("stock", formData.stock);
    if (formData.image) {
      dataToSubmit.append("image", formData.image); // Add the file to FormData
    }

    // Log the form data for testing
    for (let [key, value] of dataToSubmit.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Reset the form
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      image: null,
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          color: "#204436",
        }}
      >
        Add Product
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 1,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#204436", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#204436", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#204436", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#204436", // Default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#204436", // Focused label color
              },
            }}
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#204436", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#204436", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#204436", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#204436", // Default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#204436", // Focused label color
              },
            }}
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            type="number"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#204436", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#204436", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#204436", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#204436", // Default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#204436", // Focused label color
              },
            }}
          />
          <TextField
            label="Stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            fullWidth
            type="number"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#204436", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#204436", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#204436", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#204436", // Default label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#204436", // Focused label color
              },
            }}
          />
          {/* Image upload field */}
          <Box>
            <Typography variant="body1" gutterBottom>
              Upload Image
            </Typography>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                textTransform: "none",
                borderColor: "#204436",
                color: "#204436",
                "&:hover": {
                  backgroundColor: "#badbba",
                  borderColor: "#204436",
                  color: "#204436",
                },
              }}
            >
              Choose File
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </Button>
            {formData.image && (
              <Typography variant="body2" color="textSecondary">
                Selected file: {formData.image.name}
              </Typography>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: "#204436",
            color: "white",
            "&:hover": {
              backgroundColor: "#badbba",
              color: "#204436",
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;