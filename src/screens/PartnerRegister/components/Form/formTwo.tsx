import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCustomStyles } from './style';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import { normalizeCepNumber } from '../../../../lib/components/Masks/masks';

interface FormTwoProps {
  onSubmit: (
    data: Pick<
      PartnerForm,
      'cep' | 'rua' | 'numero' | 'cidade' | 'bairro' | 'estado' | 'complemento'
    >
  ) => void;
  formData: PartnerForm;
}

const FormTwo: React.FC<FormTwoProps> = ({ onSubmit, formData }) => {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<
    Pick<
      PartnerForm,
      'cep' | 'rua' | 'numero' | 'cidade' | 'bairro' | 'estado' | 'complemento'
    >
  >();
  const cepValue = watch('cep');
  useEffect(() => {
    setValue('cep', normalizeCepNumber(cepValue));
  }, [cepValue, setValue]);
  const style = useCustomStyles();
  useEffect(() => {
    setValue('cep', formData.cep);
    setValue('rua', formData.rua);
    setValue('numero', formData.numero);
    setValue('cidade', formData.cidade);
    setValue('bairro', formData.bairro);
    setValue('estado', formData.estado);
    setValue('complemento', formData.complemento);
  }, [formData, setValue]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('cep', { required: false })}
        id="cep"
        label="cep"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
        inputProps={{ maxLength: 9 }}
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
      <FormControl
        fullWidth
        variant="outlined"
        sx={style.TextFieldStyle}
        margin="normal"
      >
        <InputLabel id="estado-label">Estado</InputLabel>
        <Select
          labelId="estado-label"
          id="estado"
          {...register('estado', { required: true })}
          label="Estado"
          defaultValue={'AC'}
        >
          {[
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO',
          ].map((estado) => (
            <MenuItem key={estado} value={estado}>
              {estado}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
      <Button sx={style.ButtonStyle} type="submit">
        Próximo
      </Button>
    </form>
  );
};

export default FormTwo;
