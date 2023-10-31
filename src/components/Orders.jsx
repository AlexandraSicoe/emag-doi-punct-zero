import { Box, Grid, Typography } from "@mui/joy";
import Input from "@mui/joy/Input";
import Order from "../components/Order";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import useQuery from "../helpers/useQuery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Orders = ({ userId }) => {
  const query = useQuery();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);
  const [orders, setOrders] = useState([]);
  const [ordersPage, setOrdersPage] = useState(
    Number(query.get("page")) ? Number(query.get("page")) : 1
  );
  const getOrders = async (value) => {
    try {
      let url;
      if (value) {
        url =
          "https://e20.ro/api/orders/user/" + userId + "/orders?page=" + value;
      } else {
        url = "https://e20.ro/api/orders/user/" + userId + "/orders?page=1";
      }
      const result = await axios.get(url);
      setTotalPages(result.data.totalPages);
      setOrders(result.data.orders);
    } catch (error) {}
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    if (totalPages > 0) {
      if (Number(query.get("page")) > totalPages) {
        setOrdersPage(totalPages);
        navigate("/account?m=orders&page=" + totalPages);
      }
    }
  }, [totalPages]);

  const handleChange = (event, value) => {
    setOrdersPage(value);
    navigate("/account?m=orders&page=" + value);
    getOrders(value);
  };

  return (
    <>
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          flexDirection: { xs: "column" },
        }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          p={2}
          sx={{
            marginBottom: "25px",
            borderRadius: "16px",
            marginTop: { xs: "25px", md: "25px" },
            marginLeft: { xs: "0px", md: "25px" },
          }}
        >
          <Typography
            sx={{
              width: "100%",
              marginBottom: "10px",
              textAlign: { xs: "center", md: "start" },
            }}
            level="h3"
          >
            Comenzile mele
          </Typography>

          <Box
            sx={{
              width: "100%",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Box
              backgroundColor="white"
              display="flex"
              justifyContent="start"
              sx={{
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                flexWrap: { xs: "no-wrap", md: "wrap" },
                gap: "10px",
              }}
            >
              <Typography
                level="body-sm"
                sx={{
                  marginRight: "10px",
                  display: { xs: "none", sm: "none", md: "inline" },
                }}
              >
                vezi
              </Typography>
              <Select
                sx={{
                  width: "160px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                placeholder="toate comenzile"
                size="sm"
              >
                <Option>toate comenzile</Option>
                <Option>comenzile active</Option>
                <Option>comenzile anulate</Option>
              </Select>
              <Typography
                level="body-sm"
                sx={{
                  ml: "10px",
                  mr: "10px",
                  display: { xs: "none", sm: "none", md: "inline" },
                }}
              >
                din
              </Typography>
              <Select
                sx={{
                  width: "140px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                placeholder="ultimele 3 luni"
                size="sm"
              >
                <Option>din ultimele 3 luni</Option>
                <Option>din ultimele 6 luni</Option>
                <Option>2021</Option>
                <Option>2022</Option>
                <Option>2023</Option>
                <Option>Toate</Option>
              </Select>
              <Input
                sx={{
                  width: { xs: "200px" },
                  mt: { xs: "0px", md: "0px" },
                }}
                placeholder="Cauta dupa produs"
                size="sm"
              />
            </Box>
          </Box>
        </Grid>

        {/* <Grid
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          p={2}
          sx={{
            marginBottom: { xs: "0px", md: "25px" },
            borderRadius: "16px",
            marginTop: { xs: "0px", md: "25px" },
            width: {
              xs: "350px",
              sm: "345px",
              md: "100%",
            },
          }}
        >
          {orders.map((order, index) => {
            return (
              <Box key={index}>
                <Order order={order} />
              </Box>
            );
          })}
          <Pagination
            count={totalPages}
            color="primary"
            page={ordersPage}
            showFirstButton
            showLastButton
            onChange={handleChange}
          />
        </Grid> */}
      </Grid>
    </>
  );
};
export default Orders;
