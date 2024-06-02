
import SideBar from "../components/SideBar"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from "react";
import HeaderComp from "../components/Header";
import PieChart from "../Items/PieChart";

const { Content, Footer,} = Layout;
  

const RootLayout=({})=>{
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [itemKey,setItemKey] = useState('1');

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
        <SideBar setItemKey={setItemKey}/>  
        <Layout
            style={{
                backgroundColor:"#363A45"
            }}>
            <HeaderComp/>
            <Content
                style={{
                    margin: '30px',
                    backgroundColor:"#272B34"
                }}
                >
                    {
                        itemKey === '1' && <PieChart/>
                    }
            </Content>
            
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor:"#363A45",
                    color:'white'
                }}
                >
                ©{new Date().getFullYear()} Created by Harshit Chauhan
            </Footer>
        </Layout>
    </Layout>
    )
}
export default RootLayout;