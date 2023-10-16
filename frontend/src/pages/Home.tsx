import Categories from "../components/Categories"
import Slider from "../components/Slider"
import Foods from "../components/Foods"

const Home = () => {

  const selectedCategoryIndices: number[] = [0, 1, 2];

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