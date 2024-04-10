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
              {...register('nomeEmpresa', { required: true })}
              id="nomeEmpresa"
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.nomeEmpresa && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('nomeFantasia', { required: true })}
              id="nomeFantasia"
              label="Nome Fantasia"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.nomeFantasia && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('cnpj', { required: true })}
              id="cnpj"
              label="CNPJ"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
              inputProps={{ maxLength: 14 }} // Define o máximo de 14 caracteres para o CNPJ
            />
            {errors.cnpj && <span>Este campo é obrigatório</span>}
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
            <TextField
              {...register('telefone', { required: true })}
              id="telefone"
              label="Telefone"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
              type="tel"
            />
            {errors.telefone && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('instagram', { required: false })}
              id="instagram"
              label="Instagram"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              {...register('cep', { required: true })}
              id="cep"
              label="cep"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
              inputProps={{ maxLength: 8 }} // Define o máximo de 8 caracteres para o CEP
            />
            {errors.cep && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('rua', { required: true })}
              id="rua"
              label="rua"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.rua && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('numero', { required: true })}
              id="numero"
              label="numero"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
              type="number"
            />
            {errors.numero && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('cidade', { required: true })}
              id="cidade"
              label="cidade"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.cidade && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('bairro', { required: true })}
              id="bairro"
              label="bairro"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.bairro && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('estado', { required: true })}
              id="estado"
              label="estado"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.estado && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('complemento', { required: true })}
              id="complemento"
              label="complemento"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.complemento && <span>Este campo é obrigatório</span>}
          </>
        );
      case 2:
        return (
          <>
            <TextField
              {...register('entrega', { required: true })}
              id="entrega"
              label="Você possui estrutura para entrega dos produtos?"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.entrega && <span>Este campo é obrigatório</span>}

            <TextField
              {...register('entregaTipo', { required: true })}
              id="entregaTipo"
              label="Selecione ou escreva o tipo de logística"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.entregaTipo && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('entregaDias', { required: true })}
              id="entregaDias"
              label="Dias de entrega"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.entregaDias && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('tempoProcessamento', { required: true })}
              id="tempoProcessamento"
              label="Tempo para processamento de pedidos (em dias)"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.tempoProcessamento && <span>Este campo é obrigatório</span>}
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
          <Button type="submit" sx={style.ButtonStyle}>
            Próximo
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button type="submit" sx={style.ButtonStyle}>
            Enviar
          </Button>
        )}
      </div>
    </form>
  );
};

export default PartnerRegisterForm;
