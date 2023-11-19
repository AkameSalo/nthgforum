import * as React from 'react';
import './karina.css'


interface IKarinaDivProps {
}

const KarinaDiv: React.FunctionComponent<IKarinaDivProps> = (props) => {
  const [coordinates, setCoordinates] = React.useState({ left: 1070, top: 521 });
  const [pressed, setPressedYes] = React.useState(false);

  const onClickNot = () => {
    const newLeft = Math.floor(Math.random() * 1001);
    const newTop = Math.floor(Math.random() * 1001);

    setCoordinates({ left: newLeft, top: newTop });
  };

  const onClickYes = () => {
    setPressedYes(true);
  };

  return (
    <div>
        <div className='carina-card'
        style={pressed ? {display: "none"} : {display: 'block'}}
        >
            <h1 className='text'>Я люблю Карину</h1>
            <button className='button'
            style={{"left": "830px", "top": "521px"}}
            onClick={onClickYes}>
                Да
            </button>
            <button className='button' style={{ left: `${coordinates.left}px`, top: `${coordinates.top}px` }}
            onClick={onClickNot}
            >Нет</button>
            
        </div>
        <div className='love-card'
        style={pressed ? {display: "flex"} : {display: 'none'}}
        >
            <h1>Как можно не любить эти глазки? ❤️</h1>
            <div
        style={{
            background: "url(https://i.pinimg.com/originals/f2/82/a9/f282a914c00985cc388c17066aedbf98.gif)",
            width: "712px",
            height: "470px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
        }}
        >
        <img
            src="https://media.discordapp.net/attachments/1162126362346274922/1175729276738347048/image.png?ex=656c4a37&is=6559d537&hm=8b0489468c621b583ce16bee53982921b0c76489738cfe079e7d0a08507bece6&=&width=610&height=566"
            alt="Вторая картинка"
            style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            }}
        />
        </div>
        </div>
    </div>
  );
};

export default KarinaDiv;
