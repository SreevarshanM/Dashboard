// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

const pages = {
  id: 'authentication',
  title: 'Tabs',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Queries',
      type: 'item',
      url: '/query',
      icon: icons.LoginOutlined,
      target: true
    }
  ]
};

export default pages;
