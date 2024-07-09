import React from "react";

function MyMission() {
  return (
    <div className="wrapper my_mission-block">
      <p className="h2">Моя миссия</p>
      <p className="sub-title">Я хочу помочь учителям</p>
      <div className="mission_blocks">
        <div className="mission-block">
          Использовать ИИ для создания качественных материалов
        </div>
        <div className="mission-block empty"></div>
        <div className="mission-block empty"></div>
        <div className="mission-block">
          Сократить время на подготовку к урокам
        </div>
        <div className="mission-block empty"></div>
        <div className="mission-block">
          Сделать уроки более интересными и эффективными
        </div>
      </div>
    </div>
  );
}

export default MyMission;
