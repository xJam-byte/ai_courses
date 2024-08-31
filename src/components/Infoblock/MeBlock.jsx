import React, { useEffect, useState } from "react";

function MeBlock() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="wrapper me-block info-block">
      <div className="left-block">
        <img src={innerWidth <= 1024 ?"/assets/images/me2.png" :"/assets/images/me.png"} alt="my_image" />
      </div>
      <div className="right-block">
        <h2>Я Айгерим - Iuna</h2>
        <p>
          Я учитель биологии . Мне нравится преподавать, но я не люблю тратить
          много времени на подготовку к урокам. Я всегда хотела выдавать своим
          ученикам качественный материал, но раньше на это уходило много
          времени. Сейчас я могу подготовить урок за 10-20 минут.
        </p>
        <p>
          Я хочу поделиться своим опытом с другими учителями и помочь им
          сократить время на подготовку, не теряя при этом качества обучения.
        </p>
        <p>
          ИИ может помочь учителям сделать свою работу более эффективной и
          интересной. Я надеюсь, что мой опыт и знания помогут другим учителям
          добиться своих целей.
        </p>
      </div>
    </div>
  );
}

export default MeBlock;
