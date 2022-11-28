import axios from "axios";
import { useEffect, useState } from "react";
​
var component = (props: any) => {
  var listeOuNon = 0;
  var listes = props.lists;
  listeOuNon = props.isLists;
  var montrecomposant = props.show;
​
  if (listeOuNon) {
    var [trad, ajoutTrad] = useState();
​
    useEffect(() => {
      (async () => {
        axios.get("/api/trad").then((reponse) => {
          if (reponse.status == 200) {
            ajoutTrad(reponse.data);
          }
        });
      })();
    });
  }
​
  if (montrecomposant) {
    return (
      <div>
        {listeOuNon ? (
          <div>
            <div>le super titre {trad}</div>
            <div>
              <ul>
                {listes.map((elements: any) => (
                  <li>{elements.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div>le super titre</div>
            <div>Bonjour tout le monde</div>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
​
export default component;
