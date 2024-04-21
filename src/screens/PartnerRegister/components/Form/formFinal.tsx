import React from 'react';
import { Button } from '@mui/material';
import { PartnerForm } from '../../../../lib/interfaces/PartnerRegister';
import { useCustomStyles } from './style';

interface FormFinalProps {
  formData: PartnerForm;
  onSubmit: () => void;
}

const FormFinal: React.FC<FormFinalProps> = ({ formData, onSubmit }) => {
  const style = useCustomStyles();
  return (
    <div>
      <h2>Revisão dos Dados</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>Dados da Empresa</h3>
          <p>Nome da Empresa: {formData.nomeEmpresa}</p>
          <p>Nome Fantasia: {formData.nomeFantasia}</p>
          <p>CNPJ: {formData.cnpj}</p>
          <p>Email: {formData.email}</p>
          <p>Telefone: {formData.telefone}</p>
          <p>Instagram: {formData.instagram}</p>
        </div>
        <div>
          <h3>Endereço</h3>
          <p>CEP: {formData.cep}</p>
          <p>Rua: {formData.rua}</p>
          <p>Número: {formData.numero}</p>
          <p>Cidade: {formData.cidade}</p>
          <p>Bairro: {formData.bairro}</p>
          <p>Estado: {formData.estado}</p>
          <p>Complemento: {formData.complemento}</p>
        </div>
      </div>
      <div>
        <h3>Opções de Entrega</h3>
        <p>Possui estrutura para entrega: {formData.entrega ? 'Sim' : 'Não'}</p>
        <p>
          Tipo de entrega:{' '}
          {formData.entregaTipo.length > 0
            ? formData.entregaTipo.join(', ')
            : ''}
        </p>
        <p>
          Dias de entrega:{' '}
          {formData.entregaDias.length > 0
            ? formData.entregaDias.join(', ')
            : ''}
        </p>
        <p>
          Tempo para processamento de pedidos: {formData.tempoProcessamento}{' '}
          dias
        </p>
      </div>
      <Button sx={style.ButtonStyle} onClick={onSubmit}>
        Enviar
      </Button>
    </div>
  );
};

export default FormFinal;
