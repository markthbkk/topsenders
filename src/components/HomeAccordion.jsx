import { Text, Accordion } from "@contentful/f36-components";
import { useContext } from "react";
import "./HomeAccordion.css";
import SenderChartTable from "./SenderChartTable.jsx";
import { GlobalContext } from "../context/GlobalState.jsx";
let clickedUser = "";

const HomeAccordion = (props) => {
  const {
    switchCurrentUser,
    currentUserSearchResults,
    updateCurrentUserSearchResults,
  } = useContext(GlobalContext);

  console.log(props.senders);

  const senders = props.senders;

  const clickHandler = async function (e) {
    e.preventDefault();

    switchCurrentUser(e.target.innerText);
    updateCurrentUserSearchResults(e.target.innerText);
    clickedUser = e.target.innerText;
  };

  return (
    <Accordion>
      {senders.map((item) => {
        let itemClass = "item";

        item === clickedUser
          ? (itemClass = "item activeItem")
          : (itemClass = "item");

        return (
          <div key={item}>
            <Accordion.Item
              title={item}
              onClick={clickHandler}
              isExpanded={item === clickedUser}
              className={itemClass}
            >
              <Text>
                <SenderChartTable sender={item} />
              </Text>
            </Accordion.Item>
          </div>
        );
      })}
    </Accordion>
  );
};

export default HomeAccordion;
