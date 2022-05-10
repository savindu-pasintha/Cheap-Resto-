import styles from "../styles/Specialities.module.scss";
import { ReactComponent as Western } from "../assets/food/western.svg";
import { ReactComponent as Eastern } from "../assets/food/eastern.svg";
import { ReactComponent as Japan } from "../assets/food/japan.svg";
import { ReactComponent as Korean } from "../assets/food/korean.svg";

const FoodCard = ({ foodIcon, ctg, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{foodIcon}</div>
      <h2>{ctg}</h2>
      <p>{description}</p>
    </div>
  );
};

const Specialities = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Speacialities</h1>
        <h2>Our Special Cuisine</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.row1}>
          <FoodCard
            foodIcon={<Western />}
            ctg="Western 'Ye Lai Xiang Tasty Barbeque'"
            description="The 'Maxwell Food Centre,' Singapore's oldest Western restaurant, is so popular that it has been dubbed the best Western food in Singapore. Since their inception in 1976, Ye Lai Xiang Tasty Barbeque has served huge portions of Hainanese-style Chicken Chop ($7.50) and Pork Chop ($7.50). Expect hearty stews, barbecued meats with just the right amount of char, and huge portions of sides if you go to The Frying Pan."
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern 'The Ranch Cafe'"
            description="They prepare a wide selection of Western Italian specialties with our unique recipes and homemade sauce, including ravioli filled with wild boar. It also incorporates other dishes strongly influenced by local taste.
The first restaurant in the region to serve Western cuisine is The Ranch, which stands on a hill overlooking the Geylang River. The area surrounding it has distinctive characteristics, including geysers and waterfalls. The Ranch serves a variety of events, from birthdays to baby showers to buffet dinners for businesses."
          />
          <FoodCard
            foodIcon={<Japan />}
            ctg="Japannese 'Chef's Hats'"
            description="Chefs Bernard, who has 16 years of culinary expertise at The Ritz-Carlton Millennium Singapore and Marina Bay Sands Singapore, promises to provide his guests with a gastronomic experience. This is a fantastic location to have the birthday celebration. You may host family gatherings, get-togethers with your friends or company parties like as family supper, annual dinner, conference, holiday parties, or university reunions."
          />
          <FoodCard
            foodIcon={<Korean />}
            ctg="Korean 'Rebel Rebel Wine Bar'"
            description="It's no surprise that this new charge is taken by establishments specializing in all natural wines (a loose use of the term here, of course). This movement, opposed to winemaking traditions, is led by jeans and wine lists with bank-busting prices.
It is pushed by wine experts who are primarily wine enthusiasts and want you to appreciate the good in whatever bottle you order, regardless of price or Vivino rating. This dream will be realized with the introduction of Rebel Rebel.
          Rebel Rebel Wine Bar is scheduled to open in July 2020. Rebel is a wine bar, so wines are highlights there. The Schloss Lieser Riesling Trocken from Germany ($76) is a delicious German riesling. Jesus du Pays Basque's Jamon de Bellota and salted ham ($24) impresses with juicy ham."
          />
        </div>
      </div>
    </div>
  );
};

export default Specialities;
