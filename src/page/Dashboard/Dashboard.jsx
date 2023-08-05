import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import React from "react";
import DashCard from "../../global/card/DashCard";
import { HouseOutlined } from "@mui/icons-material";
const cardData = [
  {
    title: "Total Population",
    count: "12",
    icon: (
      <HouseOutlined
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "Total House",
    count: "12",
    icon: (
      <HouseOutlined
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "Total Corporate",
    count: "12",
    icon: (
      <HouseOutlined
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "Total Private Sector",
    count: "12",
    icon: (
      <HouseOutlined
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
];
const Dashboard = () => {
  return (
    <div fixed>
      <Stack flexDirection="column" gap="1rem" alignItems="center">
        <Grid container spacing={1}>
          {cardData.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <DashCard
                  key={index + "-" + data.title}
                  title={data.title}
                  icon={data.icon}
                  count={data.count}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardHeader title="Population Details" />
              <CardContent>
                this is for chart
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardHeader>Population Details</CardHeader>
            </Card>
          </Grid>
        </Grid>
      </Stack>{" "}
    </div>
  );
};

export default Dashboard;
