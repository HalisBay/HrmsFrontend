import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Icon } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      
      <h2> Bizimle Çalışan şirketler </h2>  
          {employers.map((employer) => (
              
            <Card>
            <Container>
            <Icon size= "big" name="industry" />
            </Container>
            <Card.Content>
              <Card.Header> Şirket ismi: {employer.companyName}</Card.Header>
              <Card.Meta>
                 İletişim numarası:  
                {employer.phone}
              </Card.Meta>
              
            </Card.Content>
            <Card.Content extra >
                Daha fazla bilgi için: 
              
              <Link to={employer.webSite}> {employer.webSite} </Link>'u ziyaret ediniz
            
              </Card.Content>
          </Card>
        
          ))}
        
    </div>
  );
}
