import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const sections = [
  {
    label: 'Dados Pessoais',
    path: '/perfil/dados_pessoais',
    icon: AccountCircleIcon,
  },
  { label: 'Pedidos', path: '/perfil/pedidos', icon: ShoppingCartIcon },
  { label: 'Endereços', path: '/perfil/enderecos', icon: LocationOnIcon },
  { label: 'Cartões', path: '/perfil/cartoes', icon: CreditCardIcon },
  {
    label: 'Lista de Desejos',
    path: '/perfil/lista_de_desejos',
    icon: FavoriteIcon,
  },
];
