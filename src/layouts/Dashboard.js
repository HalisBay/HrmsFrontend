import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import AboutUs from "../pages/AboutUs";
import FrequentlyAskedQuestions from "../pages/FrequentlyAskedQuestions";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/job-advertisement" component={JobAdvertisementList}/>
            <Route exact path="/job-advertisement/:id/description" component={JobAdvertisementDetail}/>
            <Route exact path = "/about-us" component = {AboutUs}/>
            <Route exact path = "/questions" component = {FrequentlyAskedQuestions}/>
            <Route exact path = "/employers" component = {EmployerList}/>
            <Route exact path = "/add-job-advertisement" component = {JobAdvertisementAdd}/>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
