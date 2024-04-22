import React, { useState } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { useCustomStyles } from './style';
import FormOne from './formOne';
import FormTwo from './formTwo';
import FormThree from './formThree';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import { useForm } from 'react-hook-form';
import FormFinal from './formFinal';

const PartnerRegisterForm: React.FC = () => {
  const style = useCustomStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState<PartnerForm>({
    nomeEmpresa: '',
    nomeFantasia: '',
    cnpj: '',
    email: '',
    telefone: '',
    instagram: '',
    cep: '',
    rua: '',
    numero: 0,
    cidade: '',
    bairro: '',
    estado: 'AC',
    complemento: '',
    entrega: false,
    entregaTipo: [],
    entregaDias: [],
    tempoProcessamento: 0,
  });
  const { reset } = useForm<PartnerForm>();
  const updateFormData = (data: Partial<PartnerForm>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };
  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmitEtapa1 = (
    data: Pick<
      PartnerForm,
      | 'nomeEmpresa'
      | 'nomeFantasia'
      | 'cnpj'
      | 'email'
      | 'telefone'
      | 'instagram'
    >
  ) => {
    updateFormData(data);
    handleNextStep();
  };

  const handleSubmitEtapa2 = (
    data: Pick<
      PartnerForm,
      'cep' | 'rua' | 'numero' | 'cidade' | 'bairro' | 'estado' | 'complemento'
    >
  ) => {
    updateFormData(data);
    handleNextStep();
  };

  const handleSubmitEtapa3 = (
    data: Pick<
      PartnerForm,
      'entrega' | 'entregaTipo' | 'entregaDias' | 'tempoProcessamento'
    >
  ) => {
    updateFormData(data);
    handleNextStep();
  };

  const handleSubmitFinalForm = () => {
    console.log('Formulário enviado:', formData);
    resetFormData();
    reset();
    setActiveStep(0);
  };
  const resetFormData = () => {
    setFormData({
      nomeEmpresa: '',
      nomeFantasia: '',
      cnpj: '',
      email: '',
      telefone: '',
      instagram: '',
      cep: '',
      rua: '',
      numero: 0,
      cidade: '',
      bairro: '',
      estado: 'AC',
      complemento: '',
      entrega: false,
      entregaTipo: [],
      entregaDias: [],
      tempoProcessamento: 0,
    });
  };
  const steps = ['Etapa 1', 'Etapa 2', 'Etapa 3', 'Finalizar'];
  return (
    <>
      <Stepper sx={{ mt: 2 }} activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step sx={style.LabelStep} key={index}>
            <StepLabel sx={style.LabelStep}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <FormOne onSubmit={handleSubmitEtapa1} formData={formData} />
      )}
      {activeStep === 1 && (
        <FormTwo onSubmit={handleSubmitEtapa2} formData={formData} />
      )}
      {activeStep === 2 && (
        <FormThree onSubmit={handleSubmitEtapa3} formData={formData} />
      )}
      {activeStep === 3 && (
        <FormFinal formData={formData} onSubmit={handleSubmitFinalForm} />
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {activeStep !== 0 && (
          <Button sx={style.ButtonStyle1} onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
      </div>
    </>
  );
};
export default PartnerRegisterForm;
