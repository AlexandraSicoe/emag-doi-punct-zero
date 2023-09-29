import { Box, Container, Typography, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const MenuDropdown = ({ isDropdownOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    try {
      const result = await axios.get("https://e20.ro/api/categories");
      setCategories(result.data);
      setSelectedCategory(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
          height: { xs: "112px", md: "40px" },
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
          }}
        >
          {isDropdownOpen ? (
            <Dropdown open>
              <MenuButton
                size="sm"
                variant="soft"
                sx={{
                  backgroundColor: "white",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  border: "0px",
                  padding: "11px",
                }}
              >
                Products
              </MenuButton>
              <Menu
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0px",
                  marginTop: "-4px!important",
                  borderRadius: "0px",
                  border: "0px",
                }}
                placement="top-start"
              >
                <Box>
                  {categories?.map((category, index) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setSelectedCategory(category);
                        }}
                        key={index}
                        variant="plain"
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                          }}
                          level="h5"
                        >
                          <i className={"fa-solid " + category.icon}></i>
                          {category.title}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    right: 0,
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "750px",
                  }}
                >
                  {selectedCategory?.children.map((subcategory, subindex) => {
                    return (
                      <List
                        sx={{
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                        }}
                        key={subindex}
                      >
                        <ListItem
                          sx={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                            }}
                            level="body-md"
                          >
                            <i className={"fa-solid " + subcategory.icon}></i>
                            {subcategory.title}
                          </Typography>
                        </ListItem>

                        {subcategory.children.map(
                          (subSubCategory, subSubIndex) => {
                            return (
                              <Typography
                                level="body-sm"
                                key={subSubIndex}
                                sx={{
                                  paddingY: "5px",
                                  paddingX: "2px",
                                  marginY: "3px",
                                  cursor: "pointer",
                                  "&:hover": {
                                    textDecoration: "underline",
                                    textUnderlineOffset: "8px",
                                  },
                                }}
                                onClick={() => {
                                  console.log("hello");
                                }}
                              >
                                {subSubCategory.title}
                              </Typography>
                            );
                          }
                        )}
                      </List>
                    );
                  })}
                </Box>
              </Menu>
            </Dropdown>
          ) : (
            <Link to="/">
              <Button
                size="xs"
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  marginRight: "5px",
                  marginLeft: "10px",
                  padding: "8px",
                  border: "1px solid transparent",

                  "&:hover": {
                    border: "1px solid white",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Products
              </Button>
            </Link>
          )}

          <Link to="/about-us">
            <Button
              size="xs"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginRight: "5px",
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid transparent",

                "&:hover": {
                  border: "1px solid white",
                  backgroundColor: "transparent",
                },
              }}
            >
              About us
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="xs"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginRight: "5px",
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid transparent",

                "&:hover": {
                  border: "1px solid white",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};
export default MenuDropdown;
