import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Grid } from "semantic-ui-react";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
