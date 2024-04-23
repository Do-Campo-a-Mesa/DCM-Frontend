import React from 'react';
import { Button, Typography } from '@mui/material';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import { useCustomStyles } from './style';

interface FormFinalProps {
  formData: PartnerForm;
  onSubmit: () => void;
}

const FormFinal: React.FC<FormFinalProps> = ({ formData, onSubmit }) => {
  const style = useCustomStyles();
  console.log('formData.entregaTipo:', formData.entregaTipo);

  return (
    <div>
      <Typography sx={style.Title}>Confira as informações</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography sx={style.Subtitle}>Dados da Empresa</Typography>
          <Typography sx={style.Label}>Nome da Empresa</Typography>
          <Typography sx={style.Answer}>{formData.nomeEmpresa}</Typography>
          <Typography sx={style.Label}>Nome Fantasia</Typography>
          <Typography sx={style.Answer}>{formData.nomeFantasia}</Typography>
          <Typography sx={style.Label}>CNPJ</Typography>
          <Typography sx={style.Answer}>{formData.cnpj}</Typography>
          <Typography sx={style.Label}>Email</Typography>
          <Typography sx={style.Answer}>{formData.email}</Typography>
          <Typography sx={style.Label}>Telefone</Typography>
          <Typography sx={style.Answer}>{formData.telefone}</Typography>
          <Typography sx={style.Label}>Instagram</Typography>
          <Typography sx={style.Answer}>{formData.instagram}</Typography>
        </div>
        <div>
          <Typography sx={style.Subtitle}>Endereço</Typography>
          <Typography sx={style.Label}>CEP</Typography>
          <Typography sx={style.Answer}>{formData.cep}</Typography>
          <Typography sx={style.Label}>Rua</Typography>
          <Typography sx={style.Answer}>{formData.rua}</Typography>
          <Typography sx={style.Label}>Número</Typography>
          <Typography sx={style.Answer}>{formData.numero}</Typography>
          <Typography sx={style.Label}>Cidade</Typography>
          <Typography sx={style.Answer}>{formData.cidade}</Typography>
          <Typography sx={style.Label}>Bairro</Typography>
          <Typography sx={style.Answer}>{formData.bairro}</Typography>
          <Typography sx={style.Label}>Estado</Typography>
          <Typography sx={style.Answer}>{formData.estado}</Typography>
          <Typography sx={style.Label}>Complemento</Typography>
          <Typography sx={style.Answer}>{formData.complemento}</Typography>
        </div>
      </div>
      <div>
        <Typography sx={style.Subtitle}>Opções de Entrega</Typography>
        <Typography sx={style.Label}>Possui estrutura para entrega </Typography>
        <Typography sx={style.Answer}>
          {formData.entrega ? 'Sim' : 'Não'}
        </Typography>
        <Typography sx={style.Label}>Tipo de entrega</Typography>
        <Typography sx={style.Answer}>
          {Array.isArray(formData.entregaTipo) &&
          formData.entregaTipo.length > 0
            ? formData.entregaTipo.join(', ')
            : 'N/A'}
        </Typography>
        <Typography sx={style.Label}>Dias de entrega</Typography>
        <Typography sx={style.Answer}>
          {formData.entregaDias.join(', ')}
        </Typography>
        <Typography sx={style.Label}>
          Tempo para processamento de pedidos
        </Typography>
        <Typography sx={style.Answer}>
          {formData.tempoProcessamento} dias
        </Typography>
      </div>
      <Button sx={style.ButtonStyle} onClick={onSubmit}>
        Enviar
      </Button>
    </div>
  );
};

export default FormFinal;
