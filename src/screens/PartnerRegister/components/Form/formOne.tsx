import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCustomStyles } from './style';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import {
  normalizeCnpjNumber,
  normalizePhoneNumber,
} from '../../../../lib/components/Masks/masks';

interface FormOneProps {
  onSubmit: (
    data: Pick<
      PartnerForm,
      | 'nomeEmpresa'
      | 'nomeFantasia'
      | 'cnpj'
      | 'email'
      | 'telefone'
      | 'instagram'
    >
  ) => void;
  formData: PartnerForm;
}

const FormOne: React.FC<FormOneProps> = ({ onSubmit, formData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<
    Pick<
      PartnerForm,
      | 'nomeEmpresa'
      | 'nomeFantasia'
      | 'cnpj'
      | 'email'
      | 'telefone'
      | 'instagram'
    >
  >();
  const phoneValue = watch('telefone');
  const cnpjValue = watch('cnpj');

  useEffect(() => {
    setValue('telefone', normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  useEffect(() => {
    setValue('cnpj', normalizeCnpjNumber(cnpjValue));
  }, [cnpjValue, setValue]);

  const style = useCustomStyles();
  useEffect(() => {
    setValue('nomeEmpresa', formData.nomeEmpresa);
    setValue('nomeFantasia', formData.nomeFantasia);
    setValue('cnpj', formData.cnpj);
    setValue('email', formData.email);
    setValue('telefone', formData.telefone);
    setValue('instagram', formData.instagram);
  }, [formData, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button sx={style.ButtonStyle} type="submit">
        Próximo
      </Button>
    </form>
  );
};

export default FormOne;
