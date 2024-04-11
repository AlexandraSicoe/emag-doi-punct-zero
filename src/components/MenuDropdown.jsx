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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";

const MenuDropdown = ({ isDropdownOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("md"));
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

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState();
  useEffect(() => {
    getCategories();
  }, []);

  const renderIcon = (iconName) => {
    let faIconName =
      "fa" + iconName.charAt(3).toUpperCase() + iconName.slice(4);
    faIconName = iconName =
      iconName === "fa-spray-can-sparkles" ? "faSprayCan" : faIconName;
    const icon = Icons[faIconName];
    return icon ? (
      <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
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
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Dropdown open={true} defaultOpen={true}>
            <>
              {location.pathname === "/" ? (
                <MenuButton
                  size="sm"
                  variant="soft"
                  sx={{
                    padding: "0px",
                    margin: "0px",
                    minHeight: "100%",
                    backgroundColor: "white",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    border: "0px",
                    padding: "11px",
                    // pointerEvents: location.pathname === "/" ? "none" : "auto",
                  }}
                >
                  Produse
                </MenuButton>
              ) : (
                <Box sx={{ paddingBottom: "2px" }}>
                  <Button
                    color="common.white"
                    size="sm"
                    variant="soft"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                    sx={{
                      // backgroundColor: "white",
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
                </Box>
              )}

              <Menu
                sx={{
                  display: { xs: "none", sm: "flex" },
                  width: { sm: "100%", md: "auto" },
                  flexDirection: "column",
                  padding: "0px",
                  marginTop: "-4px!important",
                  borderRadius: "0px",
                  border: "0px",
                  height: "285px",
                  flexWrap: "wrap",
                  backgroundColor: "white",
                  overflow: "hidden",
                }}
                placement="top-start"
              >
                <Box
                  sx={{
                    display: "flex",
                    width: { sm: "100px", md: "120px" },
                    flexDirection: "column",
                  }}
                >
                  {categories?.map((category, index) => {
                    return (
                      <Box
                        sx={{
                          cursor: "pointer",
                          margin: { sm: "4px", md: "10px" },
                          paddingX: { sm: "5px", md: "2px" },
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category);
                        }}
                        key={index}
                        variant="plain"
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                          }}
                          level="title-md"
                        >
                          <Box
                            sx={{
                              display: "inline",
                            }}
                          >
                            <i
                              style={{
                                marginRight: "10px",
                              }}
                              className={"fa-solid " + category.icon}
                            ></i>
                          </Box>

                          {category.title}
                        </Typography>
                      </Box>
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
                    width: { sm: "100%", md: "900px", lg: "750px" },
                  }}
                >
                  {selectedCategory?.children.map((subcategory, subindex) => {
                    return (
                      <List
                        sx={{
                          paddingLeft: { sm: "0px", lg: "10px" },
                          paddingBottom: { sm: "0px", lg: "10px" },
                        }}
                        key={subindex}
                      >
                        <ListItem
                          sx={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            width: "100px",
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
                                  paddingY: { sm: "0px", md: "10px" },
                                  paddingX: { sm: "2px", md: "2px" },
                                  marginY: { sm: "3px", md: "3px" },
                                  cursor: "pointer",
                                  "&:hover": {
                                    textDecoration: "underline",
                                    textUnderlineOffset: "8px",
                                  },
                                }}
                                onClick={() => {}}
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
            </>
          </Dropdown>
          <Box sx={{ paddingBottom: "2px" }}>
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
          </Box>

          <Box sx={{ paddingBottom: "2px" }}>
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
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default MenuDropdown;
