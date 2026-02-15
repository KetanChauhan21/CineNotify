import Categories from '../Components/Categories'
import Trending from '../Components/Trending'
import CategoriesCard from '../Components/Categoriescard'

const Main = () => {
    return (
        <div className="bg-gray-950 text-white min-h-screen">
            <Categories />
            <Trending />
        </div>
    )
}

export default Main
