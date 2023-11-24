import Categories from "../components/Categories"
import Slider from "../components/Slider"
import Foods from "../components/Foods"
import { categories } from "../data";

const Home = () => {

  const selectedCategoryIndices: number[] = Array.from({ length: categories.length }, (_, index) => index);

  return (
    <div>
      <Slider />
      <Categories />
      {selectedCategoryIndices.map((index) => (
        <Foods key={index} selectedCategoryIndex={index} />
      ))}
    </div>
  )
}

export default Home