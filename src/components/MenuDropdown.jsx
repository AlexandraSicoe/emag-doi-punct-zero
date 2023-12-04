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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

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

  const renderIcon = (iconName) => {
    let faIconName =
      "fa" + iconName.charAt(3).toUpperCase() + iconName.slice(4);
    faIconName = iconName =
      iconName === "fa-spray-can-sparkles" ? "faSprayCan" : faIconName;
    console.log(faIconName);
    const icon = Icons[faIconName];
    return icon ? (
      <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
    ) : null;
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(67deg, rgba(2,0,36,1) 0%, rgba(139,92,246,1) 0%, rgba(139,92,246,1) 23%, rgba(168,110,204,1) 46%, rgba(181,118,185,1) 55%, rgba(186,121,178,1) 66%, rgba(246,159,92,1) 98%)",
          height: "40px",
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
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
                Produse
              </MenuButton>
              <Menu
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0px",
                  marginTop: "-4px!important",
                  borderRadius: "0px",
                  border: "0px",
                  height: "285px",
                }}
                placement="top-start"
              >
                <Box sx={{ width: "120px" }}>
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
                          <i
                            style={{ marginRight: "10px" }}
                            className={"fa-solid " + category.icon}
                          ></i>
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
                    flexDirection: { xs: "column", md: "row" },
                    flexWrap: "wrap",
                    width: { xs: "850px", md: "750px" },
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
                            {renderIcon(subcategory.icon)}
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
                Produse
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
              Despre noi
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
