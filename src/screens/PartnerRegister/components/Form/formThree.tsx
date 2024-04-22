import {
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
import DeliveryOptionsDropdown from '../DeliveryDropdown';

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
      console.log(DeliveryOptionResponse.data);
      setDeliveryOption(DeliveryOptionResponse.data);
    })();
  }, []);

  useEffect(() => {
    console.log('entrega', formData.entrega);
    console.log('entrega', formData.entregaTipo);
    console.log('entrega', formData.entregaDias);
    console.log('entrega', formData.tempoProcessamento);
    setValue('entrega', formData.entrega);
    setValue('entregaTipo', formData.entregaTipo);
    setValue('entregaDias', formData.entregaDias);
    setValue('tempoProcessamento', formData.tempoProcessamento);
  }, [formData, setValue]);
  const handleEntregaTipoChange = (selectedOptions: DeliveryOption[]) => {
    setValue('entregaTipo', selectedOptions); // Atualiza o valor de entregaTipo
  };
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
          defaultValue={formData.entrega}
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

      <FormControl
        fullWidth
        variant="outlined"
        sx={style.TextFieldStyle}
        margin="normal"
      >
        <DeliveryOptionsDropdown
          options={deliveryOption}
          onChange={handleEntregaTipoChange}
          defaultValue={formData.entregaTipo}
        />
      </FormControl>

      {errors.entregaTipo && <span>Este campo é obrigatório</span>}

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={style.LabelOptions}>
          Dias de entrega
        </FormLabel>
        <FormGroup sx={{ flexDirection: 'row' }}>
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Segunda"
                defaultChecked={formData.entregaDias.includes('Segunda')}
              />
            }
            label="Segunda"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Terça"
                defaultChecked={formData.entregaDias.includes('Terça')}
              />
            }
            label="Terça"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Quarta"
                defaultChecked={formData.entregaDias.includes('Quarta')}
              />
            }
            label="Quarta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Quinta"
                defaultChecked={formData.entregaDias.includes('Quinta')}
              />
            }
            label="Quinta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Sexta"
                defaultChecked={formData.entregaDias.includes('Sexta')}
              />
            }
            label="Sexta"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Sábado"
                defaultChecked={formData.entregaDias.includes('Sábado')}
              />
            }
            label="Sábado"
          />
          <FormControlLabel
            sx={style.RadioOptions}
            control={
              <Checkbox
                {...register('entregaDias')}
                value="Domingo"
                defaultChecked={formData.entregaDias.includes('Domingo')}
              />
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
        defaultValue={formData.tempoProcessamento}
      />
      {errors.tempoProcessamento && <span>Este campo é obrigatório</span>}

      <Button sx={style.ButtonStyle} type="submit">
        Próximo
      </Button>
    </form>
  );
};
export default FormThree;
