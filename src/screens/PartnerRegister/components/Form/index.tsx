import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  RadioGroup,
  Radio,
} from '@mui/material';
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
              {...register('nomeEmpresa', { required: false })}
              id="nomeEmpresa"
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.nomeEmpresa && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('nomeFantasia', { required: false })}
              id="nomeFantasia"
              label="Nome Fantasia"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.nomeFantasia && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('cnpj', { required: false })}
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
              {...register('email', { required: false })}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.email && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('telefone', { required: false })}
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
              {...register('cep', { required: false })}
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
              {...register('rua', { required: false })}
              id="rua"
              label="rua"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.rua && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('numero', { required: false })}
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
              {...register('cidade', { required: false })}
              id="cidade"
              label="cidade"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.cidade && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('bairro', { required: false })}
              id="bairro"
              label="bairro"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.bairro && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('estado', { required: false })}
              id="estado"
              label="estado"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
            />
            {errors.estado && <span>Este campo é obrigatório</span>}
            <TextField
              {...register('complemento', { required: false })}
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
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Você possui estrutura para entrega dos produtos?
              </FormLabel>
              <RadioGroup
                {...register('entrega', { required: false })}
                id="entrega"
                aria-label="Você possui estrutura para entrega dos produtos?"
                name="entrega"
                sx={{ flexDirection: 'row' }}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </FormControl>
            {errors.entrega && <span>Este campo é obrigatório</span>}

            <TextField
              {...register('entregaTipo', { required: false })}
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

            <FormControl component="fieldset">
              <FormLabel component="legend">Dias de entrega</FormLabel>
              <FormGroup sx={{ flexDirection: 'row' }}>
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Segunda" />
                  }
                  label="Segunda"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Terça" />
                  }
                  label="Terça"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Quarta" />
                  }
                  label="Quarta"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Quinta" />
                  }
                  label="Quinta"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Sexta" />
                  }
                  label="Sexta"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Sábado" />
                  }
                  label="Sábado"
                />
                <FormControlLabel
                  control={
                    <Checkbox {...register('entregaDias')} value="Domingo" />
                  }
                  label="Domingo"
                />
              </FormGroup>
            </FormControl>
            {errors.entregaDias && <span>Este campo é obrigatório</span>}

            <TextField
              {...register('tempoProcessamento', { required: false })}
              id="tempoProcessamento"
              label="Tempo para processamento de pedidos (em dias)"
              variant="outlined"
              rows={4}
              fullWidth
              margin="normal"
              sx={style.TextFieldStyle}
              type="number"
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {activeStep !== 0 && (
          <Button onClick={handlePreviousStep} sx={style.ButtonStyle1}>
            Voltar
          </Button>
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
