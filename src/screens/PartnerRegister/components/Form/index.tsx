import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Stepper, Step, StepLabel } from '@mui/material';
import { useCustomStyles } from './style';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';

const PartnerRegisterForm: React.FC = () => {
  const style = useCustomStyles();
  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerForm>();

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: PartnerForm) => {
    // Integração com a API
    console.log('Dados do formulário:', data);
    if (activeStep === 2) {
      // Se for a última etapa
      reset(); // Limpa os campos do formulário após a submissão
      setActiveStep(0); // Reinicia o formulário
    } else {
      handleNextStep(); // Avança para a próxima etapa
    }
  };

  const steps = ['Etapa 1', 'Etapa 2', 'Etapa 3']; // Defina os rótulos das etapas aqui

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              {...register('name', { required: true })}
              id="name"
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.name && <span>Este campo é obrigatório</span>}
          </>
        );
      case 1:
        return (
          <>
            <TextField
              {...register('email', { required: true })}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.email && <span>Este campo é obrigatório</span>}
          </>
        );
      case 2:
        return (
          <>
            <TextField
              {...register('subject', { required: true })}
              id="subject"
              label="Assunto"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.subject && <span>Este campo é obrigatório</span>}

            <TextField
              {...register('message', { required: true })}
              id="message"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.message && <span>Este campo é obrigatório</span>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stepper sx={{ mt: '1em' }} activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel sx={style.LabelStep}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <div>
        {activeStep !== 0 && (
          <Button onClick={handlePreviousStep}>Voltar</Button>
        )}
        {activeStep !== steps.length - 1 && (
          <Button type="submit">Próximo</Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button type="submit">Enviar</Button>
        )}
      </div>
    </form>
  );
};

export default PartnerRegisterForm;
