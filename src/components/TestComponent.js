import React from "react";
import withFetch from "./hoc/withFetch";
import withLog from "./hoc/withLog";
import { compose } from "recompose";

function MyComponent(props) {
  return (
    <h2>{JSON.stringify(props, null, 2)}</h2> //метод, который преоббразует данные в
  );
}

// export default MyComponent;
// export default withLog(MyComponent);
// export default withFetch("abc")(MyComponent); //коррированая функция

//несколько оберток хуков для компонентов
// export default withLog(withFetch(MyComponent));

//вызов нескольких хуков с помощью экспощиции
export default compose(withLog, withFetch)(MyComponent);
