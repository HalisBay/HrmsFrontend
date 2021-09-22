import React, { useEffect, useState } from "react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import * as yup from "yup";
import JobAdvertisementService from "../services/JobAdvertisementService";
import { Button,FormField, FormGroup, Icon, Input } from "semantic-ui-react";
import { Formik, Form, Field } from "formik";
import HRMSTextInput from "../utilities/HRMSTextInput";
import EmployerService from "../services/employerService";

export default function AddJobAdvertisement() {
  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [employers,setEmployers] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let employerService = new EmployerService();

    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));

    cityService.getCities().then((result) => setCities(result.data.data));
    
    employerService.getEmployers().then((result) => setEmployers(result.data.data));
  }, []);

  const initialValues = {
    description: "",
    minSalary: 0,
    maxSalaray: 0,
    openPosition: 0,
    latestApplyTime: "",
    workType: "ofisten",
    workTime: "Yarı zamanlı",
    jobPositionName: "1",
    cityName: "1",
    companyName: "2",
    isActivated: true
  };

  const validationSchema = yup.object({
    description: yup
      .string()
      .required("İş hakkında bilgilendirme vermek zorunlu alandır"),
    openPosition: yup
      .number()
      .required("Açık pozisyon adedini yazmak zorunludur")
      .typeError("Sadece sayısal değer girilebilir")
      .positive("Sadece pozitif değerler girilebilir"),
    latestApplyTime: yup
      .date()
      .required("Tarih girmek zorunludur")
      .min(new Date(), "Bu tarih seçilemez"),
    jobPositionName: yup.string().required("İş pozisyonu girmek zorunludur"),
    cityName: yup.string().required("Şehir seçmek zorunludur"),
    companyName: yup.string().required("Şirket ismi girmek zorunludur."),
    isActivated: yup.string().required("zorunlu"),
  });

  const onSubmit = values => {
    let jobAdvetisementService = new JobAdvertisementService();
    let data = {
      description: values.description,
      minSalary: values.minSalary,
      maxSalary: values.maxSalary,
      openPosition: values.openPosition,
      latestApplyTime: values.latestApplyTime,
      workType: values.workType,
      workTime: values.workTime,
      jobPositionName: values.jobPositionName,
      cityName: values.cityName,
      companyName: values.companyName,
      activated: values.activated
    };
    jobAdvetisementService.addJob(data);
  };

  return (
    <div>

      <h1>Yeni İlan Ekle</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <FormGroup widths="equal">
            <HRMSTextInput
              name="companyName"
              placeholder="Şirket Adınız"
              label="Şirket adı "
            />
            <HRMSTextInput
              name="jobPositionName"
              placeholder="İş posizyonu"
              label="Pozisyon"
            />
          </FormGroup>

          <FormGroup widths="equal">
            <HRMSTextInput
              name="description"
              placeholder="İş Tanımı"
              label="İş hakkındaki detaylar"
            />
          </FormGroup>

          <FormGroup widths="equal">
            <HRMSTextInput name="cityName" placeholder="Şehir" label="Şehir" />
            <HRMSTextInput
              name="openPosition"
              placeholder="Aranan Eleman Sayısı"
              label="Açık Pozisyon Sayısı"
            />
            <FormField control={Input} required label="Çalışma Türü">
              <Field name="workType" as="select">
                <option value="Ofisten">Ofisten</option>
                <option value="Uzaktan">Uzaktan</option>
              </Field>
            </FormField>
            <FormField control={Input} required label="İlan durumu">
              <Field name="isActivated" as="select">
                <option value="true">Aktif</option>
                <option value="false">Pasif</option>
              </Field>
            </FormField>
            <FormField required control={Input} label="Çalışma zamanı">
              <Field name="workTime" as="select">
                <option value="Yarı Zamanlı"> Yarı zamanlı/Part time</option>
                <option value="Tam Zamanlı">Tam Zamanlı/Full time</option>
              </Field>
            </FormField>
          </FormGroup>

          <FormGroup widths="equal">
            <HRMSTextInput
              name="minSalary"
              placeholder="Minimum"
              label="Minimum Maaş"
            />
            <HRMSTextInput
              name="maxSalary"
              placeholder="Maksimum"
              label="Maksimum Maaş"
            />
            <HRMSTextInput
              name="latestApplyTime"
              placeholder="İlanın Bitiş Tarihi"
              label="İlanın Bitiş Tarihi"
            />
          </FormGroup>

          <Button animated color="green" type="submit"
         >
            <Button.Content visible >Tamamla</Button.Content>
            <Button.Content hidden>
              <Icon name="check circle" />
              
            </Button.Content>
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
