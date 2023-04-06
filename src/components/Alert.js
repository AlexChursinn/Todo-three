import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
  /* Получаем данные из useContext(AlertContext)*/
  const { alert, hide } = useContext(AlertContext);

  /*   if (!alert.visible) {
    return null;
  } */

  return (
    /* CSSTransition делаем оберткой компонент который хотим анимировать
    делаем на visible анимацию 500мс вмонтировать и убрать 350мс
    */
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Внимание!</strong>
        {/* &nbsp; добавляет пробел */}
        &nbsp;{alert.text}
        <button
          /* При клике на кнопку скрываю alert */
          onClick={hide}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </CSSTransition>
  );
};

export default Alert;
