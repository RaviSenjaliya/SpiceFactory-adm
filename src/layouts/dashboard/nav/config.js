// component
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ReviewsIcon from '@mui/icons-material/Reviews';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/counsellorDB',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: <RestaurantMenuIcon />,
  },
  {
    title: 'Menu',
    path: '/dashboard/menu',
    icon: <MenuBookIcon />,
  },

  // -------------------------------------------------------
  {
    title: 'Master',
    path: '/dashboard/master',
    icon: <WidgetsIcon />,
  },

  {
    title: 'Review',
    path: '/dashboard/review',
    icon: <ReviewsIcon />,
  },
];

export default navConfig;
