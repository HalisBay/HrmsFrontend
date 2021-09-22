import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();
  const [jobAdvertisement, setJobAdvertisement] = useState({});
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .findById(id)
      .then((result) => setJobAdvertisement(result.data.data));
  });

  return (
    <div>
        <Card fluid >
          <Card.Content>
            <Image size="large" src="https://volkangozuyukari.av.tr/wp-content/uploads/I%CC%87s%CC%A7-Kazas%C4%B1-Avukat%C4%B1.jpg"/>
            <Card.Header>İş Tanımı</Card.Header>
            <Card.Meta > Son başvuru tarihi : {jobAdvertisement.latestApplyTime}</Card.Meta>
            <Card.Description>{jobAdvertisement.description}</Card.Description>
          </Card.Content>
        </Card>
      
    </div>
  );
}
