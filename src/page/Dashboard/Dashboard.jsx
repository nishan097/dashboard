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
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SynagogueOutlinedIcon from '@mui/icons-material/SynagogueOutlined';
const cardData = [
  {
    title: " कुल जनसंख्या",
    count: "८४",
    icon: (
      <GroupsOutlinedIcon
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "कुल घरधुरी",
    count: "२२",
    icon: (
      <HouseOutlined
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "कुल सरकारी संस्था",
    count: "३",
    icon: (
      <SynagogueOutlinedIcon
        style={{ height: "70px", width: "100px", color: "skyblue" }}
      />
    ),
  },
  {
    title: "निजी संस्था",
    count: "५",
    icon: (
      <BusinessOutlinedIcon
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
              <CardHeader title="वडा अनुसार जनसंख्याको विवरण" />
              <CardContent>
                <img src="./piechart.png" alt="" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardHeader title="जनसंख्या विवरण"></CardHeader>
              <CardContent>
                कुल जनसंख्या ८४
              </CardContent>
              <CardContent>
                पुरुष ४७
              </CardContent>

              <CardContent>
                महिला ३३
              </CardContent>
              <CardContent>
                तेस्रो लिङ्गी/अन्य ४
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>{" "}
    </div>
  );
};

export default Dashboard;
