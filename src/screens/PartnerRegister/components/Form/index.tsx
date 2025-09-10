import React, { useState } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { useCustomStyles } from './style';
import FormOne from './formOne';
import FormTwo from './formTwo';
import FormThree from './formThree';
import {
  PartnerForm,
  StoreModel,
} from '../../../../lib/interfaces/PartnerRegister';
import { useForm } from 'react-hook-form';
import FormFinal from './formFinal';
import { registerPartner } from '../../../../services/partners';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notificationState } from '../../../../lib/store/reducers/notification';
import { RootState } from '../../../../lib/store';

const PartnerRegisterForm: React.FC = () => {
  const style = useCustomStyles();
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Acessa o estado do usuário
  const user = useSelector((state: RootState) => state.user);

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

  const handleSubmitFinalForm = async () => {
    console.log('Formulário enviado:', formData);
    const storeModel: StoreModel = {
      owner_user_id: user.id,
      cnpj: formData.cnpj,
      email: formData.email,
      name: formData.nomeEmpresa,
      uf: formData.estado,
      city: formData.cidade,
      bairro: formData.bairro,
      cep: formData.cep,
      address: formData.rua + formData.numero,
      business_address: formData.rua + formData.numero,
      phone: formData.telefone,
      instagram: formData.instagram,
      minimum_order_value: 70,
      delivery_logistics: formData.entrega
        ? 'is able to deliver in the area where it operates'
        : 'there is no delivery logistics',
      order_processing_time: formData.tempoProcessamento,
    };

    await registerPartner(storeModel)
      .then((response) => {
        if (response.status == 201) {
          // Redireciona para a rota de login
          dispatch(
            notificationState({
              variant: 'standard',
              severity: 'success',
              message:
                'Solicitação de Produtor enviada com Sucesso, aguarde nosso retorno para efetivar ',
              visibility: true,
            })
          );
          navigate('/');
        }
      })
      .catch(() => {
        dispatch(
          notificationState({
            variant: 'standard',
            severity: 'error',
            message:
              'Houver um erro ao solicitar a inscrição, por favor verificar os dados inseridos',
            visibility: true,
          })
        );
        reset(); // Limpa os campos do formulário
      });

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
