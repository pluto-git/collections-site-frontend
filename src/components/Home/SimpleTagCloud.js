import { TagCloud } from "react-tagcloud";

import {FormattedMessage} from "react-intl";
import styles from "./SimpleTagCloud.module.css";

const data = [
  { value: "jQuery", count: 25 },
  { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 },
  { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 },
  { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 },
  { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 },
  { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 },
  { value: "NPM", count: 11 },
];

const SimpleTagCloud = () => {
  return (
    <>
      <div className="text-center fs-1"><FormattedMessage id="home-tagCloud.header" /></div>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
        className={styles.myTagCloud+" "+styles['simple-cloud']}
      />
      <br />
    </>
  );
};

export default SimpleTagCloud;
