import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu,UserPicture} from './styles';


const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const ClickSignIn = () => {
        navigate('/login')
    }
    
    return (
        <Wrapper>
            <Container>
                <Row>
                    
                        <img src={logo} alt="Logo da dio"/>
                    
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>
                            Live_Code
                        </Menu>
                        <Menu>
                            Global
                        </Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/43553774?v=4"/>
                    ) : (
                        <>
                        <Button title="Entrar" onClick={ClickSignIn}/>
                        <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }