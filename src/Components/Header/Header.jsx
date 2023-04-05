import React from "react";
import cl from "./_Header.module.scss";

//в пропсы в будущем будем передавать аватар, имя пользователя из бд
const Header = (props) => {
    const infoObject = {
      name: 'cotiara97',
      iconBlindTyping: require('../../img/icons/favicon-48x48 2.png'),
      avatarIcon: require('../../img/icons/Avatars.png'),
      documentIcon: require('../../img/icons/Icon.png'),
    };

    return (
      <header className={cl.header}>
        <div className={cl.TitleBlock}>
          <img src={infoObject.iconBlindTyping} alt='iconOfSite' />
          <span className={cl.span}>Blind Typing</span>
        </div>
        <div className={cl.AvatarBlock}>
          <div>
              <img src={infoObject.avatarIcon} alt='avatar' />
              <span className={cl.span}>{infoObject.name}</span>
              <img src={infoObject.documentIcon} alt='documentIcon' />
          </div>
        </div>
      </header>
    );
};

export default Header;
