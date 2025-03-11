import { getArticlesInCategory } from "../../data/data";
import CategoryNews from "../CategoryNews";

const DisplayCategory = ({ categoryToDisplay }) => {
  // console.log("DisplayCategory", categoryToDisplay);

  if (!categoryToDisplay) {
    return <h1>categoryToDisplay empty</h1>;
  }

  const articles = getArticlesInCategory(categoryToDisplay, true);

  return <CategoryNews articles={articles} title={categoryToDisplay} />;
};

export default DisplayCategory;
