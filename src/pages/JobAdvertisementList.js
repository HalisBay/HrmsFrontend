import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobs()
      .then((result) => setJobAdvertisements(result.data.data));
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>Pozisyon </Table.HeaderCell>
            <Table.HeaderCell>İlan durumu</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>En düşük maaş</Table.HeaderCell>
            <Table.HeaderCell>En yüksek maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık pozisyon sayısı</Table.HeaderCell>
            <Table.HeaderCell>İlan başlangıç tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id} >
              <Table.Cell> {jobAdvertisement.jobPosition.jobName} </Table.Cell>
              <Table.Cell>
                {jobAdvertisement.activated ? (
                  <Icon color="green" name="checkmark" />
                ) : (
                  <Icon color="red" name="close" />
                )}
              </Table.Cell>
              <Table.Cell ><Link to={`/job-advertisement/${jobAdvertisement.id}/description`}>  İş hakkında daha fazla bilgi edinmek için tıklyınız</Link> </Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName } </Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName }</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement.createdTime}</Table.Cell>
              <Table.Cell>{jobAdvertisement.latestApplyTime}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="10">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">...</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
              <Menu floated="left" pagination>
                <Button icon labelPosition="left" primary exact as={NavLink} to="/add-job-advertisement" >
                  <Icon name="add " /> Yeni iş ekle
                </Button>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
