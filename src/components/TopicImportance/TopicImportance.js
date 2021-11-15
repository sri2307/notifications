import React from "react";
import classes from "./TopicImportance.module.css";
import Accordion from "react-bootstrap/Accordion";
import StarRatingComponent from "react-star-rating-component";

const topics = [
  {
    title: "Time Domain Representation",
    editable: false,
    rating: 3.5,
    key: "0",
    items: [
      {
        title: "Gate",
        rating: 4,
      },
      {
        title: "IES",
        rating: 3,
      },
    ],
  },
  {
    title: "Classifications of Signals",
    rating: 3.6,
    editable: false,
    key: "1",
    items: [
      {
        title: "Gate",
        rating: 4,
      },
      {
        title: "IES",
        rating: 3,
      },
    ],
  },
];

const TopicImportance = () => {
  return (
    <div className={classes.container}>
      {topics.map((topic) => (
        <Accordion>
          <Accordion.Item eventKey={topic.key}>
            <Accordion.Header>
              <div className={classes.combo}>
                <div className={classes.title}>{topic.title} </div>
                <StarRatingComponent
                  name={topic.title}
                  editing={topic.editable}
                  value={topic.rating}
                />
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {topic.items.map((item, key) => (
                <li key={key}>
                  <div className={classes.items}>
                    <div className={classes.title}>{item.title}</div>
                    <StarRatingComponent
                      name={topic.title}
                      editing={topic.editable}
                      value={item.rating}
                    />
                  </div>
                </li>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default TopicImportance;
