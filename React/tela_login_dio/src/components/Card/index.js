import { FiThumbsUp } from "react-icons/fi";

import {background} from '../../assets/image_background.jpg';

import {CardContainer, 
ImageBackground,
Content,
UserInfo,
UserPicture,
PostInfo,HasInfo
} from './styles';


const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src={background}/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/43553774?v=4"/>
                    <div>
                        <h4>Cesar Augusto</h4>
                        <p>Ha 10 Minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto do curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio ....<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p><FiThumbsUp/>10</p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }