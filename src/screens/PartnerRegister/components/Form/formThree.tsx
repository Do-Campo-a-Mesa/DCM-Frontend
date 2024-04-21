import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import { useForm } from 'react-hook-form';

import { useState, useEffect } from 'react';
import { DeliveryOption } from '../../../../lib/interfaces/DeliveryOptions';
import { getAllDeliveryOptions } from '../../../../services/deliveryOptions';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import { useCustomStyles } from './style';
interface FormThreeProps {
  onSubmit: (
    data: Pick<
      PartnerForm,
      'entrega' | 'entregaTipo' | 'entregaDias' | 'tempoProcessamento'
    >
  ) => void;
  formData: PartnerForm;
}

const FormThree: React.FC<FormThreeProps> = ({ onSubmit, formData }) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<
    Pick<
      PartnerForm,
      'entrega' | 'entregaTipo' | 'entregaDias' | 'tempoProcessamento'
    >
  >();

  const style = useCustomStyles();
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption[]>([]);

  useEffect(() => {
    (async () => {
      const DeliveryOptionResponse = await getAllDeliveryOptions();
      setDeliveryOption(DeliveryOptionResponse.data);
    })();
  }, []);

  const [selectedDelivery, setSelectedDelivery] =
    useState<DeliveryOption | null>(null);

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    value: DeliveryOption | string | null
  ) => {
    if (typeof value === 'string') {
      setSelectedDelivery(null);
    } else {
      setSelectedDelivery(value);
    }
  };
  useEffect(() => {
    setValue('entrega', formData.entrega);
    setValue('entregaTipo', formData.entregaTipo);
    setValue('entregaDias', formData.entregaDias);
    setValue('tempoProcessamento', formData.tempoProcessamento);
  }, [formData, setValue]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl component="fieldset">
        <FormLabel sx={style.LabelOptions}>
          Você possui estrutura para entrega dos produtos?
        </FormLabel>
        <RadioGroup
          {...register('entrega', { required: false })}
          id="entrega"
          aria-label="Você possui estrutura para entrega dos produtos?"
          name="entrega"
          sx={{ flexDirection: 'row' }}
        >
          <FormControlLabel
            sx={style.RadioOptions}
            value="sim"
            control={<Radio />}
            label="Sim"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            value="nao"
            control={<Radio />}
            label="Não"
          />
        </RadioGroup>
      </FormControl>
      {errors.entrega && <span>Este campo é obrigatório</span>}

      <Autocomplete
        sx={{ pt: 2 }}
        value={selectedDelivery}
        onChange={handleChange}
        options={deliveryOption}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          } else {
            return option.name;
          }
        }}
        renderInput={(params) => (
          <TextField
            sx={style.TextFieldStyle}
            {...register('entregaTipo', { required: false })}
            {...params}
            label="Escolha ou escreva"
            variant="outlined"
            fullWidth
          />
        )}
        freeSolo
      />

      {errors.entregaTipo && <span>Este campo é obrigatório</span>}

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={style.LabelOptions}>
          Dias de entrega
        </FormLabel>
        <FormGroup sx={{ flexDirection: 'row' }}>
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Segunda" />}
            label="Segunda"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Terça" />}
            label="Terça"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Quarta" />}
            label="Quarta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Quinta" />}
            label="Quinta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Sexta" />}
            label="Sexta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Sábado" />}
            label="Sábado"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={<Checkbox {...register('entregaDias')} value="Domingo" />}
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

      <Button sx={style.ButtonStyle} type="submit">
        Próximo
      </Button>
    </form>
  );
};
export default FormThree;
