import React from "react";

function CanDo() {
  return (
    <div className="wrapper catsBlock">
      <h2>Что вы можете создать</h2>
      <div className="topBlock">
        <div className="leftBlock">
          <img src="/assets/images/cats/top/1.png" alt="cat1" />
        </div>
        <div className="middleBlock">
          <div className="top">
            <img src="assets/images/cats/top/2.png" alt="cat2" />
            <img src="assets/images/cats/top/3.png" alt="cat3" />
            <img src="assets/images/cats/top/4.png" alt="cat4" />
          </div>
          <div className="bottom">
            <img src="/assets/images/cats/top/5.png" alt="cat5" />
            <img src="/assets/images/cats/top/6.png" alt="cat6" />
          </div>
        </div>
        <div className="rightBlock">
          <img src="/assets/images/cats/top/7.png" alt="cat7" />
        </div>
      </div>
      <div className="bottomBlock">
        <div className="leftBlock">
          <img src="/assets/images/cats/bottom/1.png" alt="cat8" />
        </div>
        <div className="rightBlock nigga">
          <img src="/assets/images/cats/bottom/2.png" alt="cat9" />
        </div>
      </div>
    </div>
  );
}

export default CanDo;
