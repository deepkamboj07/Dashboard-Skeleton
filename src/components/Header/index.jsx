import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderComp=()=>{
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return(
        <Header
                style={{
                    padding: 20,
                    background: '#272B34',
                }}
            />
    )
}
export default HeaderComp;