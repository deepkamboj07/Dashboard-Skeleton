import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    BarChartOutlined,
    LineChartOutlined
  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from "react";
import logo from '../../assets/WiJungle-Logo-White.png';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
}
const items = [
    getItem('Pie Chart', '1', <PieChartOutlined />),
    getItem('Bar Chart', '2', <BarChartOutlined />),
    getItem('Graph', '3', <LineChartOutlined />),
];

const SideBar = ({setItemKey}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Sider style={{backgroundColor:'#272B34'}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className='p-10'>
                <img src={logo} alt="logo" style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="demo-logo-vertical" />
            <Menu 
             style={{backgroundColor:'#272B34'}}
             onClick={(e) => setItemKey(e.key)}
             theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}
export default SideBar;